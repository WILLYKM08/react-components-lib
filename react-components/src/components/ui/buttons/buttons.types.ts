import * as React from 'react';

export interface ButtonProps
extends React.HTMLAttributes<HTMLButtonElement>{
    styleVariant?: string,
    disabled?: boolean,
    icon?: React.ElementType
}