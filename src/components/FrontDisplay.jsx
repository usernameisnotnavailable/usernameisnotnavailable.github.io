function FrontDisplay () {
    const highlightName = document.getElementById("highlighted-name");
    const names = ["", "", "", "", "", "P", "Pe", "Pet","Pete", "Peter", "Peter", "Peter", "Peter'", "Peter's", "Peter's ", "Peter's p", "Peter's po", "Peter's por", "Peter's port", "Peter's portf", "Peter's portfo", "Peter's portfol", "Peter's portfoli", "Peter's portfolio", "Peter's portfolio"]
    const blinker = "<span id=\"blink\">|</span>";

    setTimeout(alterText, 100);

    function alterText() {
        highlightName.innerHTML = blinker;
        for(let i = 0; i < names.length; i++) {
            if (i % 2 === 0) {
                setTimeout(function () {
                    highlightName.innerHTML = names[i];
                },i * 310)
            } else {
                setTimeout(function () {
                    highlightName.innerHTML = names[i] + blinker;
                },i * 310)
            }

        }

    }
}

export default FrontDisplay;