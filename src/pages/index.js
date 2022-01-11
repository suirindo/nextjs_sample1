import Link from 'next/link'
import Image from 'next/image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/index.module.scss"

const Index = () => {
  return (
    <Layout>
      <Seo title = "asagiman" description= "asagimanのポートフォリオサイトです" />
      <div className = {style.hero}>
        <Image src = "/images/index-hero.jpeg" alt = "hero" layout = "fill" objectFit = "cover" quality = {90} />
        <div className={style.textContainer}>
            <h1>Im asagiman</h1>
            <h3>JavaScript Developer</h3>
          </div>
      </div>
      <div className = {style.container}>
        <div className={style.profile}>
          <div>
            <h2>JavaScript Nerd</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <Image src ="/images/profile.jpeg" alt = "hero" height = {1195} width = {1000} quality = {90} />
        </div>
        <div className = {style.skills}>
          <h2>Skills</h2>
          <div className = {style.skillsContainer}>
            <div><img src="/images/javascript.svg" alt = "javascript" /><span>JavaScript / 1years</span></div>
            <div><img src="/images/react.svg" alt = "react" /><span>React / 1years</span></div>
            <div><img src="/images/gatsby.svg" alt = "gatsby" /><span>Gatsby / 1years</span></div>
            <div><img src="/images/next.svg" alt = "next" /><span>Next.JS / 1years</span></div>
          </div>
        </div>
        <div className = {style.ctaButton}>
          <Link href="/contact"><a>Make It Happen!</a></Link>
        </div>
      </div>
    </Layout>
  )
}

export default Index