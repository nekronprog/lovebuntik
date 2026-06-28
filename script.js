const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")
const box = document.querySelector(".question-box")
const heartsContainer = document.querySelector(".hearts")

let yesScale = 1

// =========================
// YES BUTTON GROW
// =========================
function growYes() {
	yesScale += 0.12
	yesBtn.style.transform = `scale(${yesScale})`
}

// =========================
// MOVE BOX (SAFE)
// =========================
function moveBox() {
	const rect = box.getBoundingClientRect()

	const maxX = window.innerWidth - rect.width
	const maxY = window.innerHeight - rect.height

	const x = Math.max(10, Math.random() * maxX)
	const y = Math.max(10, Math.random() * maxY)

	box.style.position = "absolute"
	box.style.left = x + "px"
	box.style.top = y + "px"

	// тільки легкий ефект, без накопичення scale
	box.style.transform = `rotate(${(Math.random() - 0.5) * 4}deg)`
}

// =========================
// HEARTS
// =========================
function createHeart() {
	const heart = document.createElement("div")
	heart.classList.add("heart")
	heart.innerHTML = "❤️"

	heart.style.left = Math.random() * window.innerWidth + "px"
	heart.style.fontSize = 15 + Math.random() * 25 + "px"

	heartsContainer.appendChild(heart)

	setTimeout(() => heart.remove(), 4000)
}

// =========================
// EVENTS
// =========================
noBtn.addEventListener("click", () => {
	moveBox()
	createHeart()
})

// (опціонально) щоб було живіше
noBtn.addEventListener("mouseover", moveBox)

// =========================
// YES ACTION
// =========================
yesBtn.addEventListener("click", () => {
	// плавний вибух сердець
	for (let i = 0; i < 30; i++) {
		setTimeout(createHeart, i * 80)
	}

	setTimeout(() => {
		window.location.href = "main.html"
	}, 2000)
})
