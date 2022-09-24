import Link from 'next/link';
import { client } from '../libs/client';
import styles from '../styles/Home.module.css';

// SSGを使ってデータを取得する
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  console.log(data);
  return {
    props: {
      blog: data.contents, // blog という名前で、data を返す
    },
  };
};

export default function Home({ blog }) {
  // blog というpropsをHomeで受け取っておく
  return (
    <div className={styles.container}>
      {/* // 複数構築していくblogをmap関数で取り出していく */}
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            <a href="">{blog.title}</a>
          </Link>
        </li>
      ))}
    </div>
  );
}
