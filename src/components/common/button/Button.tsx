import React, {ForwardedRef} from 'react';
import {forwardRef} from 'react';
import { motion } from "framer-motion";
import style from "./button.module.scss";


interface ButtonProps  {
    title: string;
    onClick?: () => void
}

export const Button: React.FC<ButtonProps> = forwardRef(({ title,onClick, ...props }, ref:ForwardedRef<HTMLAnchorElement | null>) => {
    return (
        <a ref={ref} onClick={onClick} {...props} className={style.button}>
            {title}
        </a>
    );
});

export const MButton = motion(Button);