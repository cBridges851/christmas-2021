class CustomTextHandler {
    receiveParameters() {
        const url = window.location.href;
        const regexPattern = /(?<=\??name=)[a-z0-9?!.,#()\%\@\:\;\/\-]+/i;
        const match = url.match(regexPattern);

        if (match !== null) {
            match[0] = match[0].replaceAll("%20", " ");
            return match[0];
        }

        return "Everyone!";
    }

    updateText(customText) {
        const aText = document.querySelector("#customOutput");
        const title = document.querySelector("title");
        aText.setAttribute("value", customText);
        title.innerText = `Merry Christmas ${customText}`;
    }
}
