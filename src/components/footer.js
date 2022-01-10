import Link from 'next/link'
import Image from 'next/image'
import * as style from "../styles/common.module.scss"


const Footer = () => {
    return (
        <footer className={style.footerWrapper}>
            <div className={style.insideContainer}>
                <a href = "https://github.com/suirindo"><img src = "/images/github.svg" alt = "logo" /></a>
                <a href = "https://note.com/touzou"><img src = "/images/note.svg" alt = "logo" /></a>
                <a href = "https://twitter.com/coffee_to_hon"><img src = "/images/twitter.svg" alt = "logo" /></a>
                <a href = "https://www.facebook.com/suirindoco"><img src = "/images/facebook.svg" alt = "logo" /></a>
                <hr/>
                <Link href = "/blog"><a>Blog</a></Link>
                <Link href = "/contact"><a>Contact</a></Link>
                <p>©{new Date().getFullYear()} asagiman</p>
            </div>
        </footer>
    )
}

export default Footer