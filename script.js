window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", () => {

    const blueCan = document.querySelector(".blue-can");
    const yellowCan = document.querySelector(".yellow-can");
    const pinkCan = document.querySelector(".pink-can");

    const blueSection = document.querySelector(".bluephoto");
    const yellowSection = document.querySelector(".yellowphoto");
    const pinkSection = document.querySelector(".pinkphoto");

    function pad(num) {
        return String(num).padStart(4, "0");
    }

    function updateCan(can, section, folder, totalFrames, speed = 1) {
        if (!can || !section) return;

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // TRIGGER (centre-based)
        const center = windowHeight / 2;

        // how far section is from center
        let progress = (center - rect.top) / (windowHeight * speed);

        // clamp 0–1
        progress = Math.min(Math.max(progress, 0), 1);

        const frame = Math.floor(progress * (totalFrames - 1)) + 1;
        const frameStr = pad(frame);

        can.src = `Images/${folder}/${frameStr}.png`;
    }

    window.addEventListener("scroll", () => {

        // BLUE CAN
        updateCan(blueCan, blueSection, "Blue Scroll Frames", 30, 1.1);

        // YELLOW CAN
        updateCan(yellowCan, yellowSection, "Yellow Scroll Frames", 30, 1.1);

        // PINK CAN
        updateCan(pinkCan, pinkSection, "Pink Scroll Frames", 25, 1.1);

    });

});