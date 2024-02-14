'use client';
import React, {useEffect, useRef} from "react";
import {motion, useInView, useAnimation, useIsPresent} from "framer-motion";

type config = {
    hidden: {opacity?: number, x?: number, y?: number},
    visible: {opacity?: number, x?: number, y?: number},
};

export default function Base({children, variants, delay, width="full"}: {
    children: JSX.Element,
    variants: config,
    delay: number,
    width?: "full" | "100%",
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        console.log(isInView);
        if(isInView){
            mainControls.start("visible").then(r => r).catch(e => console.log(e));
        }
    }, [mainControls, isInView]);

    return (
        <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5, ease: "easeInOut", delay: delay}}
            >
                {children}
            </motion.div>
        </div>
    );
};

export function SlideLeft ({children, delay}: {children: JSX.Element, delay: number}) {
    return (
        <Base
            delay={delay}
            variants={{
            hidden: {opacity: 0, x: 275},
            visible: {opacity: 1, x: 0},
        }}>
            {children}
        </Base>
    );
}

export function SlideRight ({children, delay}: {children: JSX.Element, delay: number}) {
    return (
        <Base
            delay={delay}
            variants={{
            hidden: {opacity: 0, x: -275},
            visible: {opacity: 1, x: 0},
        }}>
            {children}
        </Base>
    );
}

export function SlideUp ({children, delay}: {children: JSX.Element, delay: number}) {
    return (
        <Base
            delay={delay}
            variants={{
            hidden: {opacity: 0, y: 275},
            visible: {opacity: 1, y: 0},
        }}>
            {children}
        </Base>
    );
}

export function SlideDown ({children, delay}: {children: JSX.Element, delay: number}) {
    return (
        <Base
            delay={delay}
            variants={{
            hidden: {opacity: 0, y: -275},
            visible: {opacity: 1, y: 0},
        }}>
            {children}
        </Base>
    );
}

export function FadeIn ({children, delay}: {children: JSX.Element, delay: number}) {
    return (
        <Base
            delay={delay}
            variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1},
        }}>
            {children}
        </Base>
    );
}
