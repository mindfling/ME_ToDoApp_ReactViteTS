import React, { ReactNode } from 'react'

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined;
  className: string;
  text?: string;
  children: ReactNode;
}

export const Button = (props: Props) => {
  return (
    <button type={props.type} className={props.className}>
      {props.children}
    </button>
  )
}
