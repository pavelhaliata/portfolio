import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import style from "./skills.module.scss";
import {MSkill} from "./skill/Skill";
import ovalGroup from "assets/images/group-oval-right.svg"
import { motion } from "framer-motion";

type SkillsType = {
    id: string
    title: string
    subTitle: string
}

type PropsType = {}

export const Skills: React.FC<PropsType> = () => {

    const textAnimation = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {delay : custom * 0.2, once: true}
        })
    }

    const [skills, setSkills] = useState<SkillsType[]>([
        {
            id: uuid(),
            title: 'html',
            subTitle: '7 months experience'
        }, {
            id: uuid(),
            title: 'css',
            subTitle: '7 months experience'
        }, {
            id: uuid(),
            title: 'scss',
            subTitle: '7 months experience'
        }, {
            id: uuid(),
            title: 'java script',
            subTitle: '7 months experience'
        },{
            id: uuid(),
            title: 'type script',
            subTitle: '6 months experience'
        }, {
            id: uuid(),
            title: 'react',
            subTitle: '6 months experience'
        }, {
            id: uuid(),
            title: 'redux',
            subTitle: '6 months experience'
        }, {
            id: uuid(),
            title: 'redux toolkit',
            subTitle: '6 months experience'
        },
    ])


    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            className={style.skills}>
            <motion.h2 variants={textAnimation} custom={1} className={style.title}>Skills</motion.h2>
            <div className={style.skills_wrapper}>
                {skills.map((t, index) => <MSkill variants={textAnimation} custom={index + 1} title={t.title} subTitle={t.subTitle} key={t.id}/>)}
            </div>
            <img src={ovalGroup} className={style.group_oval} alt="oval"/>
        </motion.section>
    )
}