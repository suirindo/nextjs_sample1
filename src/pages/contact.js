import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/contact.module.scss"


const Contact = () => {
    return (
        <Layout>
            <Seo title = "コンタクト" description = "これはコンタクトページです"/>
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1>Contact</h1>
                <p>お気軽にご連絡ください</p>
                <form action="https://formspree.io/f/xnqwnkbk" method="POST">
                    <label htmlFor = "name">お名前</label>
                        <input type = "text" name = "name" id = "name" required/>
                    <label htmlFor = "email">メールアドレス</label>
                </form>
            </div>
        </div>
        </Layout>
    )
}

export default Contact