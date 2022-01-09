import Link from 'next/link'
import Image from 'next/image'

const Index = () => {
  return (
    <>
      <div>
        <Image src = "/images/index-hero.jpeg" alt = "hero" layout = "fill" objectFit = "cover" quality = {90} />          <div>
            <h1>Im asagiman</h1>
            <h3>JavaScript Developer</h3>
          </div>
      </div>
      <div>
        <div>
          <div>
            <h2>JavaScript Nerd</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <Image src ="/images/profile.jpeg" alt = "hero" height = {1195} width = {1000} quality = {90} />
        </div>
  
        <div>
          <h2>Skills</h2>
          <div>
            <div><img src="/images/javascript.svg" alt = "javascript"/><span>JavaScript / 1years</span></div>
            <div><img src="/images/react.svg" alt = "react"/><span>React / 1years</span></div>
            <div><img src="/images/gatsby.svg" alt = "gatsby"/><span>Gatsby / 1years</span></div>
            <div><img src="/images/next.svg" alt = "next"/><span>Next.JS / 1years</span></div>
          </div>
        </div>

        <div>
          <Link href="/contact"><a>Make It Happen!</a></Link>
        </div>
      </div>
      </>
  )
}

export default Index