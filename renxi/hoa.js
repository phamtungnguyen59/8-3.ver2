function createFlower() {
    const flower = document.createElement("img");
    flower.src = "image/tym.png";
    flower.classList.add("flower");

    let size = Math.random() * 20 + 20;
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;
    flower.style.position = "absolute";
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.top = "-50px";

    document.body.appendChild(flower);

    gsap.to(flower, {
        duration: Math.random() * 5 + 5,
        y: window.innerHeight + 50,
        x: "+=" + (Math.random() * 100 - 50),
        rotation: Math.random() * 360,
        opacity: 0,
        ease: "power1.out",
        onComplete: () => flower.remove(),
    });
}

setInterval(createFlower, 500);
