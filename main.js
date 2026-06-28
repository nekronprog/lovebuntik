// =========================
// SMOOTH SCROLL NAV
// =========================

document.querySelectorAll(".nav-center a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)

        if (!targetElement) return

        const headerOffset = 85 // висота шапки
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        })
    })
})

// =========================
// OPTIONAL: HEADER EFFECT ON SCROLL
// (трохи покращує вигляд)
// =========================

const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(255,255,255,0.95)"
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)"
    } else {
        header.style.background = "rgba(255,255,255,0.75)"
        header.style.boxShadow = "none"
    }
})
