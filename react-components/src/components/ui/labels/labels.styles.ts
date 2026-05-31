import {  type styleVariant, type styleSet, applyStyleSet } from "../../../lib/sv"

const titleStyle: styleVariant = {
    name: "title",
    styles:[
        "text-dark dark:text-light",
        "px-3 p-b-3",
        "text-xl",
        "font-bold"
    ]
}

const subStyle: styleVariant = {
    name: "subtitle",
    styles:[
        "text-dark dark:text-light",
        "px-3 py-2",
        "text-md",
        "font-bold"
    ]
}

const sectionlStyle: styleVariant = {
    name: "section",
    styles:[
        "text-dark dark:text-light",
        "px-3 py-2",
        "text-sm",
        "font-semibold"
    ]
}

const normalStyle: styleVariant = {
    name: "normal",
    styles:[
        "text-dkgray dark:text-mdgray",
        "px-3 py-2",
        "text-sm",
        "font-medium"
    ]
}

const baseStyle: string[] = [
    "col-span-full",
    "bg-transparent",
    "w-full"
];

const defaultStyle: styleVariant = normalStyle;

const styleVariants: styleVariant[] = [
    titleStyle,
    subStyle,
    sectionlStyle,
    normalStyle
    ];

const itemStyleSet: styleSet = {
    base: baseStyle,
    variants: styleVariants,
    default: defaultStyle
}

export function labelStyleApplier( variant: string ) : string {
    return applyStyleSet(itemStyleSet, variant)
}