document.addEventListener("DOMContentLoaded", () => {
  // Animate cards on scroll
  const cards = document.querySelectorAll(".pirate-card")

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  })

  document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bg-music")
    const btn = document.getElementById("music-btn")
    if (!music || !btn) return

    btn.addEventListener("click", () => {
      if (music.paused) {
        music.play().catch(() => {}) // prevent autoplay block errors
        btn.textContent = "⏸️"
      } else {
        music.pause()
        btn.textContent = "🎵"
      }
    })
  })

  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "all 0.6s ease"
    observer.observe(card)
  })

  // Add click effect to cards
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)
    })
  })

  // Enhanced carousel functionality
  const carousel = document.getElementById("pirateCarousel")
  const bootstrap = window.bootstrap // Declare the bootstrap variable
  if (carousel) {
    // Add pause on hover
    carousel.addEventListener("mouseenter", () => {
      const carouselInstance = bootstrap.Carousel.getInstance(carousel)
      if (carouselInstance) {
        carouselInstance.pause()
      }
    })

    carousel.addEventListener("mouseleave", () => {
      const carouselInstance = bootstrap.Carousel.getInstance(carousel)
      if (carouselInstance) {
        carouselInstance.cycle()
      }
    })

    // Add keyboard navigation
    document.addEventListener("keydown", (e) => {
      const carouselInstance = bootstrap.Carousel.getInstance(carousel)
      if (carouselInstance) {
        if (e.key === "ArrowLeft") {
          carouselInstance.prev()
        } else if (e.key === "ArrowRight") {
          carouselInstance.next()
        }
      }
    })

    // Add slide change animation effects
    carousel.addEventListener("slide.bs.carousel", (e) => {
      const activeItem = carousel.querySelector(".carousel-item.active")
      const nextItem = e.relatedTarget

      // Add fade effect to captions
      if (activeItem) {
        const activeCaption = activeItem.querySelector(".carousel-caption")
        if (activeCaption) {
          activeCaption.style.opacity = "0"
          activeCaption.style.transform = "translateY(20px)"
        }
      }
    })

    carousel.addEventListener("slid.bs.carousel", (e) => {
      const activeItem = carousel.querySelector(".carousel-item.active")

      // Animate in new caption
      if (activeItem) {
        const activeCaption = activeItem.querySelector(".carousel-caption")
        if (activeCaption) {
          setTimeout(() => {
            activeCaption.style.opacity = "1"
            activeCaption.style.transform = "translateY(0)"
          }, 200)
        }
      }
    })
  }
})
