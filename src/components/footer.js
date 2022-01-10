import Link from 'next/link'
import Image from 'next/image'
import * as style from "../styles/common.module.scss"


const Footer = () => {
    return (
        <footer className={style.footerWrapper}>
            <div className={style.insideContainer}>
                <a href = "https://www.google.com/"><Image src = "/images/github.svg" alt = "logo" layout = "fill" objectFit = "cover" quality = {90}/></a>
                <a href = "https://www.google.com/"><Image src = "/images/linkedin.svg" alt = "logo" layout = "fill" objectFit = "cover" quality = {90}/></a>
                <a href = "https://www.google.com/"><Image src = "/images/twitter.svg" alt = "logo" layout = "fill" objectFit = "cover" quality = {90}/></a>
                <a href = "https://www.google.com/"><Image src = "/images/facebook.svg" alt = "logo" layout = "fill" objectFit = "cover" quality = {90}/></a>
                <hr/>
                <Link href = "/blog"><a>Blog</a></Link>
                <Link href = "/contact"><a>Contact</a></Link>
                <p>©{new Date().getFullYear()} asagiman</p>
            </div>
        </footer>
    )
}

export default Footer