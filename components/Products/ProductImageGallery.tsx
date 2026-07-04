"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  onImageClick?: () => void;
}

export default function ProductImageGallery({
  images,
  productName,
  onImageClick,
}: ProductImageGalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  if (!images || images.length === 0) {
    return null;
  }

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedImageIndex, images.length]);

  const goToNext = useCallback(() => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    onImageClick?.();
  };

  return (
    <>
      {/* Main Gallery Section */}
      <div className="flex flex-col">
        {/* Main Image - Clickable */}
        <button
          onClick={() => openModal(selectedImageIndex)}
          className="group relative w-full aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50 shadow-xl transition-all duration-300 flex items-center justify-center p-8 hover:shadow-2xl active:scale-95 cursor-pointer"
          aria-label={`Open gallery for ${productName}`}
        >
          <Image
            src={images[selectedImageIndex]}
            alt={`${productName} - Image ${selectedImageIndex + 1}`}
            width={400}
            height={400}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />

          {/* Gallery Icon Overlay - Shows on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-16 h-16 text-white drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 13a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
            </div>
          </div>

          {/* Image Counter Badge - Bottom Right */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-white text-sm font-semibold">
              {selectedImageIndex + 1} / {images.length}
            </div>
          )}
        </button>

        {/* Thumbnail Gallery */}
        {images.length > 1 && (
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2 -mx-1 px-1">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`shrink-0 w-20 h-20 rounded-lg border-2 transition-all overflow-hidden hover:scale-105 active:scale-95 ${
                  selectedImageIndex === index
                    ? "border-orange-500 shadow-lg ring-2 ring-orange-300"
                    : "border-gray-200 hover:border-orange-300"
                }`}
                aria-label={`View image ${index + 1}`}
                title={`Image ${index + 1} of ${images.length}`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain bg-linear-to-br from-amber-50 to-yellow-50"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal Gallery */}
      {isModalOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-9999 bg-black/35 backdrop-blur-md flex flex-col items-center justify-center"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Full screen product gallery"
        >
          {/* Close Button - Top Right */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 z-9999 p-3 hover:bg-white/20 rounded-full transition-all active:scale-90 backdrop-blur-sm hover:scale-110"
            aria-label="Close gallery"
            title="Close (ESC)"
          >
            <svg
              className="w-8 h-8 text-white drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Main Content Container */}
          <div
            className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Main Image */}
            <div className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center mb-4 rounded-2xl overflow-hidden shadow-2xl bg-white/10">
              <Image
                key={selectedImageIndex}
                src={images[selectedImageIndex]}
                alt={`${productName} - Image ${selectedImageIndex + 1}`}
                width={1200}
                height={1200}
                className="w-full h-full object-contain animate-in fade-in duration-300"
                sizes="(max-width: 768px) 95vw, 90vw"
                priority
              />

              {/* Left Arrow - Desktop Only */}
              {images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 p-3 hover:bg-white/30 hover:ring-2 hover:ring-orange-400 rounded-full transition-all active:scale-90 backdrop-blur-sm group"
                  aria-label="Previous image"
                  title="Previous (←)"
                >
                  <svg
                    className="w-8 h-8 text-white group-hover:text-orange-300 drop-shadow-lg transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )}

              {/* Right Arrow - Desktop Only */}
              {images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 hover:bg-white/30 hover:ring-2 hover:ring-orange-400 rounded-full transition-all active:scale-90 backdrop-blur-sm group"
                  aria-label="Next image"
                  title="Next (→)"
                >
                  <svg
                    className="w-8 h-8 text-white group-hover:text-orange-300 drop-shadow-lg transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Image Counter and Thumbnails Section */}
            <div className="w-full flex flex-col items-center gap-4">
              {/* Counter */}
              {images.length > 1 && (
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/20 hover:border-orange-400 transition-all">
                  {selectedImageIndex + 1} / {images.length}
                </div>
              )}

              {/* Thumbnail Strip - Bottom */}
              {images.length > 1 && (
                <div className="w-full max-w-2xl">
                  <div className="flex gap-2 overflow-x-auto pb-2 px-2 justify-center">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImageIndex(index);
                        }}
                        className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg border-2 transition-all overflow-hidden hover:scale-110 active:scale-95 ${
                          selectedImageIndex === index
                            ? "border-orange-400 shadow-lg ring-2 ring-orange-300"
                            : "border-white/30 hover:border-white/60"
                        }`}
                        aria-label={`View image ${index + 1}`}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain bg-black/30"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile Navigation Hint */}
              <div className="md:hidden text-white/60 text-sm">
                {t("productDetail.swipeHint")}
              </div>
            </div>
          </div>

          {/* Bottom Navigation Arrows - Mobile */}
          {images.length > 1 && (
            <div className="md:hidden absolute bottom-24 left-0 right-0 flex justify-between px-4 pointer-events-none">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="pointer-events-auto p-3 hover:bg-white/30 hover:ring-2 hover:ring-orange-400 rounded-full transition-all active:scale-90 backdrop-blur-sm group"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6 text-white group-hover:text-orange-300 drop-shadow-lg transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="pointer-events-auto p-3 hover:bg-white/30 hover:ring-2 hover:ring-orange-400 rounded-full transition-all active:scale-90 backdrop-blur-sm group"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6 text-white group-hover:text-orange-300 drop-shadow-lg transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
