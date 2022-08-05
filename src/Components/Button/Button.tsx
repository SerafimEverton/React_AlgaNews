import * as B from './Button.styles';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

    variant: 'danger' | 'text' | 'primary'

    label: string
}

export default function Button ({ label, variant, ref, ...props }: ButtonProps){
    return <B.Wrapper 
    variant = {variant} 
    {...props}    
    >
        {label}
        </B.Wrapper>
        
}