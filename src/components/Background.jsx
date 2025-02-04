function Background () {
    const highlightName = document.getElementById("highlighted-name");
    const names = ["", "", "", "", "", "P", "Pe", "Pet","Pete", "Peter", "Peter", "Peter", "Peter'", "Peter's", "Peter's ", "Peter's p", "Peter's po", "Peter's por", "Peter's port", "Peter's portf", "Peter's portfo", "Peter's portfol", "Peter's portfoli", "Peter's portfolio", "Peter's portfolio"]
    const blinker = "<span id=\"blink\">|</span>";

    setTimeout(alterText, 1000);

    function alterText() {
        highlightName.innerHTML = blinker;
        for(let i = 0; i < names.length; i++) {
            if (i % 2 === 0) {
                setTimeout(function () {
                    highlightName.innerHTML = names[i];
                },i * 325)
            } else {
                setTimeout(function () {
                    highlightName.innerHTML = names[i] + blinker;
                },i * 325)
            }

        }

    }
}

export default Background;