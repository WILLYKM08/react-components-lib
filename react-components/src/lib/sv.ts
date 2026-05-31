
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
    if(variant){
        const result = ''
        styleSet.base.map( (b) => result.concat(b, " ") );
        styleSet.variants.find(style => style.name === variant)?.styles.map((vs) => result.concat(vs, " "))
        return result;
    } else {
        const result = ''
        styleSet.base.map( (b) => result.concat(b, " ") );
        styleSet.default.styles.map((vs) => result.concat(vs, " "))
        return result;
    }
}