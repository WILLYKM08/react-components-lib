import {  type styleVariant, type styleSet, applyStyleSet } from "../../../lib/sv"

const primaryStyle: styleVariant = {
    name: "primary",
    styles:[
        "pointer-events-auto",
        "cursor-pointer",
        "bg-brand hover:bg-brand/70",
        "text-light",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        "focus-visible:outline-brand"
    ]
}

const secondaryStyle: styleVariant = {
    name: "secondary",
    styles:[
        "pointer-events-auto",
        "cursor-pointer",
        "bg-ltgray hover:bg-ltgray/70 dark:bg-mddark dark:hover:bg-drgray",
        "text-dark dark:text-light",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        "focus-visible:outline-brand"
    ]
}

const ghostStyle: styleVariant = {
    name: "ghost",
    styles:[
        "pointer-events-auto",
        "cursor-pointer",
        "hover:inset-ring hover:inset-ring-dark hover:dark:inset-ring-light",
        "bg-transparent",
        "text-dark dark:text-light",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        "focus-visible:outline-brand"
    ]
}

const disabledStyle: styleVariant = {
    name: "disabled",
    styles:[
        "pointer-events-none",
        "cursor-not-allowed",
        "inset-ring",
        "bg-transparent",
        "text-ltgray dark:text-dkgray",
        "inset-ring-ltgray dark:inset-ring-dkgray",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        "focus-visible:outline-brand"
    ]
}

const baseStyle: string[] = [
    "rounded-xl",
    "px-3 py-2",
    "text-sm",
    "font-semibold",
    "shadow-xs",
    "flex",
    "justify-start",
    "items-center",
    "justify-items-center-safe"
];

const defaultStyle: styleVariant = primaryStyle;

const styleVariants: styleVariant[] = [
    primaryStyle,
    secondaryStyle,
    ghostStyle,
    disabledStyle
    ];

const itemStyleSet: styleSet = {
    base: baseStyle,
    variants: styleVariants,
    default: defaultStyle
}

export function buttonStyleApplier( variant: string ) : string {
    return applyStyleSet(itemStyleSet, variant)
}