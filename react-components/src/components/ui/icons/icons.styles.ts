import {  type styleVariant, type styleSet, applyStyleSet } from "../../../lib/sv"

const outlinedStyle: styleVariant = {
    name: "outlined",
    styles:[
    "fill-none",
    "stroke-current",
    "stroke-2"]
}

const filledStyle: styleVariant = {
    name: "filled",
    styles:[
        "fill-current",
        "stroke-none"
    ]
}

const baseStyle: string[] = ["h-6", "w-6"];

const defaultStyle: styleVariant = filledStyle;

const iconStyleVariants: styleVariant[] = [outlinedStyle, filledStyle];

const iconStyleSet: styleSet = {
    base: baseStyle,
    variants: iconStyleVariants,
    default: defaultStyle
}

export function iconStyleApplier( variant: string ) : string {
    return applyStyleSet(iconStyleSet, variant)
}