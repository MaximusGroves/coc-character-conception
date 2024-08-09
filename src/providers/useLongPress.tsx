import { useState, useEffect } from 'react';

export default function useLongPress(callback = () => { }, release = () => { }, ms = 300, press = () => { }) {
    const [startLongPress, setStartLongPress] = useState(false);

    useEffect(() => {
        let timerId;
        if (startLongPress) {
            timerId = setTimeout(callback, ms);
        } else {
            clearTimeout(timerId);
        }

        return () => {
            clearTimeout(timerId);
        };
    }, [callback, ms, startLongPress]);

    return {
        onContextMenu: (e) => { e.preventDefault(); e.stopPropagation() },
        onMouseDown: (e) => { e.stopPropagation(); press(); setStartLongPress(true) },
        onMouseUp: (e) => { e.stopPropagation(); if (startLongPress) { release() }; setStartLongPress(false) },
        onMouseLeave: (e) => { e.stopPropagation(); if (startLongPress) { release() }; setStartLongPress(false) },
        onTouchStart: (e) => { e.stopPropagation(); setStartLongPress(true) },
        onTouchEnd: (e) => { e.stopPropagation(); if (startLongPress) { release() }; setStartLongPress(false) },
    };
}
