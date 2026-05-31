
export interface styleVariant {
    name: string,
    styles: string[]
}

export interface styleSet {
    base: string[],
    variants: styleVariant[],
    default: styleVariant,
}

export function applyStyleSet(styleSet:styleSet, variant?:string): string{
    const baseClasses = styleSet.base.join(" ");

    if (variant) {
        const foundVariant = styleSet.variants.find(style => style.name === variant);
        if (foundVariant) {
            return `${baseClasses} ${foundVariant.styles.join(" ")}`.trim();
        }
    }
    
    // Si no se pasó variante o si se pasó una que no existe en el arreglo, aplicamos el default
    return `${baseClasses} ${styleSet.default.styles.join(" ")}`.trim();
}