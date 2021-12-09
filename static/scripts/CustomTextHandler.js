class CustomTextHandler {
    receiveParameters() {
        const url = window.location.href;
        const regexPattern = /(?<=\?name=)[a-z]+/i;
        const match = url.match(regexPattern);
        if (match !== null) {
            return match[0];
        }

        return "Everyone";
    }

    updateText(customText) {
        const aText = document.querySelector("#customOutput");
        aText.setAttribute("value", customText);
        fetch("./static/fonts/Gwendolyn-Bold-msdf.json")
        .then(response => response.json())
        .then(jsonResponse => {
            let length = 0;
            console.log(jsonResponse)
            for (const character of customText) {
                console.log(character);
                for (let charInfo of jsonResponse.chars) {

                    if (charInfo.char == character) {
                        console.log(charInfo)
                        length += charInfo.width;
                    }
                }
            }

            console.log(length);
        })
    }
}