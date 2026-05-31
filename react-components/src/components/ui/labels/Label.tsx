import * as React from 'react';
import type { LabelProps } from './labels.types';
import { cn } from '../../../lib/cn';
import { labelStyleApplier } from './labels.styles';

export const Label = React.forwardRef<HTMLDivElement, LabelProps> (
    ({className, styleVariant, caption, ...props}, ref) => {
        return (
            <div
            ref={ref}
            className={cn(labelStyleApplier(styleVariant!), className)}
            {...props}
            >
                {caption}
            </div>
        )
    }
)