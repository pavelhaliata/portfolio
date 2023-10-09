import React, {ReactNode} from "react";
import style from "./layout.module.scss"
import {Header} from "../";
import {Footer} from "../";

type PropsType = {
    children: ReactNode
}
export const Layout: React.FC<PropsType> = ({children}) => {

    return (
        <div className={style.container}>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}