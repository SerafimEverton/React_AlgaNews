import * as I from './input.styles';

import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

    label?: string
}

export default function Input({ label,  ...props}: InputProps){
    return <I.Wrapper>{
    label &&
        <span className="Label">
          { label }
        </span>
    }
    <input
      {...props}
      type="text"
    />
    </I.Wrapper>
}