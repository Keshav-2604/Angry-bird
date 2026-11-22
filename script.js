const personalMessage = `
I know you're upset with me, and I'm genuinely sorry.

I never wanted to hurt you.

Your friendship means a lot to me,
and I don't want a silly mistake to ruin our bond.

I hope we can smile and laugh together again.

Please forgive me. ❤️
`;

const customMessage = `
Hey Rishi! ❤️

I know you're upset with me, and honestly, I understand why.

Parso raat jab tumne ek aur match khelne ko kaha tha, tab mujhe neend aa rahi thi. Maine socha tha ki kal khelenge, lekin shayad tum us waqt mere saath ek do match aur khelna chahti thi.

Aur kal jo hua, uske liye I'm really sorry. Mujhe bilkul achha nahi lag raha ki mera internet khatam hone ki wajah se tum game mein mera wait karti rahi. I know tum wait kar rahi thi aur achanak mera match se chale jaana tumhe bura laga hoga.

Main bas tumhe itna batana chahta hoon ki maine kabhi jaanbujhkar tumhe ignore nahi kiya. Na hi tumhare saath khelna mere liye boring hai.

It's just that sometimes situations mere control mein nahi hoti, but that doesn't mean I don't value our time together.

Hamare daily Ludo matches, random bakwaas, hasi-mazaak aur woh chhoti-chhoti nok-jhok mere liye genuinely special hain. 😂

I'm sorry for making you feel bad, Angry Bird.

Aur haan, agli baar internet aur neend dono se pehle tumhari match ki planning karunga! 😂❤️

Bas ab gussa thoda kam kar do. 🥹
`;

function typeText(elementId, message, speed = 45) {
    const target = document.getElementById(elementId);

    if (!target) return;

    target.textContent = "";

    let index = 0;

    function typing() {
        if (index < message.length) {
            target.textContent += message.charAt(index);
            index++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

let customStarted = false;
let apologyStarted = false;

function nextPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const next = document.getElementById("page" + pageNumber);

    if (next) {
        next.classList.add("active");
    }

    if (pageNumber === 3 && !customStarted) {
        customStarted = true;
        typeText("customTypedMessage", customMessage, 45);
    }

    if (pageNumber === 4 && !apologyStarted) {
        apologyStarted = true;
        typeText("typedMessage", personalMessage, 45);
    }
}

const noBtn = document.getElementById("noBtn");

if (noBtn) {
    function moveNoButton() {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        const randomX = Math.random() * Math.max(0, maxX);
        const randomY = Math.random() * Math.max(0, maxY);

        noBtn.style.position = "fixed";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }

    noBtn.addEventListener("mouseover", moveNoButton);

    noBtn.addEventListener("touchstart", function(event) {
        event.preventDefault();
        moveNoButton();
    });
}

const heartsContainer = document.getElementById("hearts");

if (heartsContainer) {
    const heartEmojis = ["❤️", "💗", "💕", "💖", "💘"];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("span");

        heart.innerHTML = heartEmojis[
            Math.floor(Math.random() * heartEmojis.length)
        ];

        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = Math.random() * 100 + "%";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";
        heart.style.animation = `floatHeart ${3 + Math.random() * 5}s infinite ease-in-out`;

        heartsContainer.appendChild(heart);
    }
}