import React from "react";
import style from "./header.module.scss"
import githubImg from "assets/icon/github-60.svg"
import linkedinImg from "assets/icon/linkedin-50.svg"
import telegramImg from "assets/icon/telegram-60.svg"
import myPhotoImg from "assets/images/photo_black.jpg"
import groupOvalImg from "assets/images/group-oval-left.svg"
import ovalImg from "assets/images/oval.svg"
import { motion } from "framer-motion"
import {MButton} from "../common";


type PropsType = {}

export const Header: React.FC<PropsType> = () => {

    const iconAnimation = {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {delay : custom * 0.2, once: true}
        })
    }
    const topNameAnimation = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }

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

    return (
        <motion.header
           initial="hidden"
           whileInView="visible"
            className={style.header}>
                <div className={style.header__top}>
                    <motion.span variants={topNameAnimation} className={style.top__name}>pavelhaliata</motion.span>
                    <nav className={style.top__nav}>
                        <motion.a variants={iconAnimation} custom={1} href="https://github.com/Pavel-Vladimirovich" target="_blank" rel="noopener noreferrer"
                           title="GitHub"><img src={githubImg} alt="GitHub icon"/></motion.a>
                        <motion.a variants={iconAnimation} custom={2} href="https://ru.linkedin.com/" target="_blank" rel="noopener noreferrer"
                           title="LinkedIn"><img
                            src={linkedinImg} alt="LinkedIn icon"/></motion.a>
                        <motion.a variants={iconAnimation} custom={3} href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer"
                           title="Telegram"><img src={telegramImg} alt="Telegram icon"/></motion.a>
                    </nav>
                </div>
            <article className={style.header__body}>
                <motion.h1 variants={textAnimation} custom={1} className={style.header__title}>
                    Nice to meet you!
                    I’m <span>Pavel Haliata</span>.
                </motion.h1>
                <motion.p variants={textAnimation} custom={2} className={style.header__description}>
                    Based in the Republic of Belarus, I’m a front-end developer
                    passionate about building accessible web apps that users love.
                    My goal is to provide user satisfaction and convenience through
                    innovative and high-quality frontend design.
                </motion.p>
                <div className={style.header__qualities}>
                    <motion.span variants={textAnimation} custom={3}>Personal qualities:</motion.span>
                    <ul>
                        <motion.li variants={textAnimation} custom={4}>Desire for self-improvement and learning new technologies</motion.li>
                        <motion.li variants={textAnimation} custom={5}>Creativity and attention to detail</motion.li>
                        <motion.li variants={textAnimation} custom={6}>Sociability and the ability to work in a team</motion.li>
                    </ul>
                </div>
            </article>
            <div className={style.header__preview}>
                <img src={myPhotoImg} alt='photo'/>
            </div>
            <img src={groupOvalImg} className={style.group_oval} alt="oval"/>
            <img src={ovalImg} className={style.oval} alt="oval"/>
            <MButton variants={textAnimation} custom={5} title='contact me'/>
        </motion.header>
    );
}
