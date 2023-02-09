/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from "react";

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // eslint-disable-next-line react/require-default-props
  isOutlined?: boolean;
};

export function Button({
  isOutlined = false,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button className={`button ${isOutlined ? "outlined" : ""}`} {...props} />
  );
}

/*import {BaseHTMLAttributes} from 'react'

import '../styles/button.scss'
type ButtonProps = BaseHTMLAttributes<HTMLButtonElement>;


export function Button (props:ButtonProps){
return(
        <button className="button"{...props} type="submit" />
    )
}


//type ButtonProps ={
    disabled?: boolean;
   type?:'submit'
    htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  } & Omit<React.HTMLAttributes<HTMLButtonElement>
*/


