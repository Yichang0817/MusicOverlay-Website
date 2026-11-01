(() => {
  "use strict";

  function initializeScreenshotLightbox() {
    const galleryLinks = Array.from(document.querySelectorAll(".original-screenshots .original-image"));
    const lightbox = document.getElementById("screenshot-lightbox");
    const image = document.getElementById("lightbox-image");
    const errorMessage = document.getElementById("lightbox-error");
    const current = document.getElementById("lightbox-current");
    const total = document.getElementById("lightbox-total");
    const previousButton = lightbox?.querySelector(".lightbox-previous");
    const nextButton = lightbox?.querySelector(".lightbox-next");
    const closeButton = lightbox?.querySelector(".lightbox-close");
    const backdrop = lightbox?.querySelector(".lightbox-backdrop");

    if (!lightbox || !image || !errorMessage || !current || !total || !previousButton || !nextButton || !closeButton || !backdrop || galleryLinks.length === 0) return;

    const screenshots = galleryLinks.map((link) => ({
      link,
      image: link.querySelector("img")
    })).filter((screenshot) => screenshot.image);

    if (screenshots.length === 0) return;

    let activeIndex = 0;
    let returnFocus = null;
    let isOpen = false;

    total.textContent = String(screenshots.length);

    function updateImage() {
      const screenshot = screenshots[activeIndex];
      const source = screenshot.link.href;

      current.textContent = String(activeIndex + 1);
      errorMessage.hidden = true;
      image.hidden = false;
      image.alt = screenshot.image.alt;
      image.dataset.source = source;
      image.src = source;
    }

    function showImageError() {
      if (image.dataset.source !== image.src) return;
      image.hidden = true;
      errorMessage.hidden = false;
    }

    function getFocusableElements() {
      return Array.from(lightbox.querySelectorAll("button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"));
    }

    function openLightbox(index, trigger) {
      activeIndex = index;
      returnFocus = trigger;
      isOpen = true;
      lightbox.hidden = false;
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("lightbox-open");
      updateImage();
      closeButton.focus();
    }

    function closeLightbox() {
      if (!isOpen) return;
      isOpen = false;
      document.body.classList.remove("lightbox-open");
      lightbox.hidden = true;
      lightbox.setAttribute("aria-hidden", "true");
      image.removeAttribute("src");
      image.alt = "";
      errorMessage.hidden = true;

      if (returnFocus && document.contains(returnFocus)) returnFocus.focus();
      returnFocus = null;
    }

    function showAdjacentImage(direction) {
      activeIndex = (activeIndex + direction + screenshots.length) % screenshots.length;
      updateImage();
    }

    galleryLinks.forEach((link, index) => {
      link.addEventListener("click", (event) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        openLightbox(index, link);
      });
    });

    previousButton.addEventListener("click", () => showAdjacentImage(-1));
    nextButton.addEventListener("click", () => showAdjacentImage(1));
    closeButton.addEventListener("click", closeLightbox);
    backdrop.addEventListener("click", closeLightbox);
    image.addEventListener("load", () => {
      if (image.dataset.source === image.src) {
        image.hidden = false;
        errorMessage.hidden = true;
      }
    });
    image.addEventListener("error", showImageError);

    document.addEventListener("keydown", (event) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showAdjacentImage(-1);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showAdjacentImage(1);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = getFocusableElements();
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    document.addEventListener("musicoverlay-languagechange", () => {
      if (isOpen) image.alt = screenshots[activeIndex].image.alt;
    });
  }

  document.addEventListener("DOMContentLoaded", initializeScreenshotLightbox);
})();
