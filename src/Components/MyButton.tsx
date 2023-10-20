import { ReactNode } from 'react';

// todo rename 
type Props = {
  type: 'button' | 'submit' | 'reset' | undefined;
  className: string;
  text?: string;
  children: ReactNode;
};

export const MyButton = (props: Props) => {
  return (
    <button type={props.type} className={props.className}>
      {props.children}
    </button>
  )
};
