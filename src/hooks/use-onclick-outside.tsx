import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

//this hook take a ref and call a handler only when the event take place outside the ref element
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: () => void
) => {
    useEffect(() => {
        const listener = (event: Event) => {
            const el = ref?.current as Node;
            if (!el || el.contains((event?.target as Node) || null)) {
                return;
            }
            handler();
        }

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        }

    }, [ref, handler]);
}

