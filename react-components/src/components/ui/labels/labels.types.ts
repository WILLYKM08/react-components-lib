import * as React from 'react';

export interface LabelProps
extends React.HTMLAttributes<HTMLDivElement>{
    caption: string,
    styleVariant?: string
}