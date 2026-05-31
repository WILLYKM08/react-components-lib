import { cn } from '../../../lib/cn';
import type { IconProps } from './icons.types';
import { iconStyleApplier } from './icons.styles';

export const HomeIcon = ({className, styleVariant, ...props}: IconProps) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className={cn(iconStyleApplier(styleVariant), className)}
        {...props}
        >
            <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"/>
        </svg>
    )
}

export const BellIcon = ({className, styleVariant, ...props}: IconProps) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className={cn(iconStyleApplier(styleVariant), className)}
        {...props}
        >
            <path d="M160-200v-60h80v-304q0-84 49.5-150.5T420-798v-22q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v22q81 17 130.5 83.5T720-564v304h80v60H160Zm320-302Zm0 422q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM300-260h360v-304q0-75-52.5-127.5T480-744q-75 0-127.5 52.5T300-564v304Z"/>
        </svg>
    )
}

export const MenuIcon = ({className, styleVariant, ...props}: IconProps) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className={cn(iconStyleApplier(styleVariant), className)}
        {...props}
        >
            <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
        </svg>
    )
}