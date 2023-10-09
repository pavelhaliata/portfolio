import React, {ForwardedRef} from 'react';
import {forwardRef} from 'react';
import { motion } from "framer-motion";
import style from "./skill.module.scss";

type PropsType = {
    title: string
    subTitle: string
}

export const Skill: React.FC<PropsType> = forwardRef(({title,subTitle}, ref:ForwardedRef<HTMLDivElement | null>) => {
    return (
            <div
                ref={ref}
                className={style.item}>
                <p className={style.title}>{title}</p>
                <p className={style.sub_title}>{subTitle}</p>
            </div>
    )
})

export const MSkill = motion(Skill)