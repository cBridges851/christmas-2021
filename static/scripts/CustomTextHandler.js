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
            for (const character of customText) {
                for (let charInfo of jsonResponse.chars) {

                    if (charInfo.char == character) {
                        console.log(charInfo)
                        length += charInfo.width;
                    }
                }
            }

            console.log(length);

            const position = (0.56521739130434782608695652173913 * length);
            // console.log((0.56521739130434782608695652173913 * length))
            // console.log(position)

            aText.setAttribute("position", `${position} -65 -110`)
        })
    }
}