class SoundHandler {
    constructor() {
        this.hasUserInteracted = false;
        this.shouldMusicPlay;
    }

    receiveParameters() {
        const url = window.location.href;
        const regexPattern = /(?<=\??sound=)[true|false]+/i;
        const match = url.match(regexPattern);
        
        if (match !== null) {
            this.shouldMusicPlay = (match[0].toLowerCase() === "true");
        } else {
            this.shouldMusicPlay = true;
        }
    }

    setup() {
        if (this.shouldMusicPlay) {
            document.addEventListener("click", () => {
                if (!this.hasUserInteracted) {
                    this.playSound()
                }
            });

            document.addEventListener("keypress", () => {
                if (!this.hasUserInteracted) {
                    this.playSound()
                }
            });
        }
    }
    
    playSound() {
        const audio = new Audio("./static/sound/space.wav");
        audio.volume = 0.1;
        audio.play();
        audio.loop = true;
        this.hasUserInteracted = true;
    }
}