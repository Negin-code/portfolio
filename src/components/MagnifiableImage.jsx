import React, { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";

const MagnifiableImage = ({ src, alt, caption }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <figure className="relative w-full">
      {/* Image Container */}
      <button
        className="w-full overflow-hidden rounded-lg cursor-zoom-in group block text-left"
        onClick={() => setIsModalOpen(true)}
        aria-label={`View larger version of ${alt}`}
        type="button"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Zoom Icon Overlay */}
        <div
          className="absolute top-2 right-2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        >
          <IoMdSearch className="text-[#493B32] text-lg sm:text-xl" />
        </div>
      </button>

      {/* Caption */}
      {caption && (
        <figcaption className="mt-2 text-xs sm:text-sm text-[#493B32]/70 text-center">
          {caption}
        </figcaption>
      )}

      {/* Modal */}
      {isModalOpen && (
        <dialog
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-6"
          open
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-image-title"
          aria-describedby={caption ? "modal-image-caption" : undefined}
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-[95vw] max-h-[90vh]">
            <img
              id="modal-image-title"
              src={src}
              alt={alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            {caption && (
              <p
                id="modal-image-caption"
                className="text-white text-center mt-2 text-xs sm:text-sm"
              >
                {caption}
              </p>
            )}
            <button
              className="absolute -top-2 -right-2 sm:top-4 sm:right-4 bg-white/90 p-1.5 sm:p-2 rounded-full hover:bg-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
              aria-label="Close image modal"
              type="button"
            >
              <svg
                className="w-4 h-4 sm:w-6 sm:h-6 text-[#493B32]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </dialog>
      )}
    </figure>
  );
};

export default MagnifiableImage;
