import {  type styleVariant, type styleSet, applyStyleSet } from "../../../lib/sv"

const outlinedStyle: styleVariant = {
    name: "outlined",
    styles:[
    "fill-none",
    "stroke-current",
    "stroke-20"]
}

const filledStyle: styleVariant = {
    name: "filled",
    styles:[
        "fill-current",
        "stroke-none"
    ]
}

const baseStyle: string[] = ["h-10", "w-10"];

const defaultStyle: styleVariant = filledStyle;

const styleVariants: styleVariant[] = [outlinedStyle, filledStyle];

const iconStyleSet: styleSet = {
    base: baseStyle,
    variants: styleVariants,
    default: defaultStyle
}

export function iconStyleApplier( variant: string ) : string {
    return applyStyleSet(iconStyleSet, variant)
}