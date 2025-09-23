import { useEffect, useState } from "react";

export default function FrontDisplay() {
    const [textIndex, setTextIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    const names = [
        "", "", "", "", "", "P", "Pe", "Pet", "Pete", "Peter", "Peter", "Peter", "Peter'",
        "Peter's", "Peter's ", "Peter's p", "Peter's po", "Peter's por", "Peter's port",
        "Peter's portf", "Peter's portfo", "Peter's portfol", "Peter's portfoli",
        "Peter's portfolio", "Peter's portfolio"
    ];

    useEffect(() => {

        const timers = names.map((text, i) => {
                setTimeout(() => setTextIndex(i), i * 310)
        }
        );

        const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 500);

        const stopBlinkTimeout = setTimeout(() => {
            clearInterval(cursorInterval);
            setShowCursor(false);
        }, names.length * 310 + 2000);


        return () => {
            timers.forEach(clearTimeout);
            clearInterval(cursorInterval)
            clearTimeout(stopBlinkTimeout);
        };
    }, []);

    return (
        <div id="front-holder">
            <video id="numbers-video" autoPlay loop muted>
                <source src="/numbers.mp4" type="video/mp4" />
            </video>
            <h1 id="highlighted-name">
                {names[textIndex]}
                <span id="blink">{showCursor ? '|' : ' '}</span>
            </h1>
        </div>
    );
}
