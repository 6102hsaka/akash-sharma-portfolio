import type { RefObject } from "react";
import { useRef, useEffect } from "react";

const useScrollAnimation = (
    classname: string,
    fraction: number
): RefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const addAnimation = () => {
            if (ref && ref.current) {
                if (
                    ref.current.getBoundingClientRect().top <=
                    window.innerHeight * fraction
                ) {
                    ref.current.classList.add(classname);
                }
            }
        };

        window.addEventListener("resize", addAnimation);
        window.addEventListener("scroll", addAnimation);

        return () => {
            window.removeEventListener("resize", addAnimation);
            window.removeEventListener("scroll", addAnimation);
        };
    }, [classname, fraction]);

    return ref;
};

export default useScrollAnimation;
