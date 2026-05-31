import { cn } from '../../../lib/cn';
import type { ButtonProps } from './buttons.types';
import { buttonStyleApplier } from './buttons.styles';

export const Button = ({disabled, children, styleVariant, className, icon:Icon, ...props}: ButtonProps) =>{
    return(
        <button
        className={cn(
            disabled 
            ? buttonStyleApplier("disabled") 
            : buttonStyleApplier(styleVariant!), className)}
        {...props}
        >
            {Icon && <Icon className="h-5"/>}
            {children}
        </button>
    )
}