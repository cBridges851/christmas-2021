class CustomTextHandler {
    receiveParameters() {
        const url = window.location.href;
        const regexPattern = /(?<=\?name=)[a-z1-9?!.,#()\@\:\;\/\-]+/i;
        const match = url.match(regexPattern);

        if (match !== null) {
            return match[0];
        }

        return "Everyone";
    }

    updateText(customText) {
        const aText = document.querySelector("#customOutput");
        aText.setAttribute("value", customText);
    }
}
