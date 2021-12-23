class SpeedHandler {
    receiveParameters() {
        const url = window.location.href;
        const regexPattern = /(?<=\??speed=)[0-9]+/i;
        const match = url.match(regexPattern);

        if (match !== null) {
            return match[0];
        }

        return 1000;
    }

    updateSpeed(speed) {
        const aText = document.querySelector("#camera");
        aText.setAttribute("wasd-controls", `acceleration: ${speed}`);
    }
}
