import Image from 'next/image'
import ReactMarkdown from "react-markdown"
import Layout from "../../components/layout"
import PrevNext from "../../components/prevNext"
import Seo from "../../components/seo"
import * as style from "../../styles/singleBlog.module.scss"
import { getAllBlogs, getSingleBlog } from '../../utils/mdQueries'

const SingleBlog = ({ frontmatter, markdownBody, prev, next }) => {
  const { title, date, image, excerpt } = frontmatter

  return (
    <Layout>
      <Seo title={title} description={excerpt} />
      <div className={style.hero}>
        <Image src={image} alt="blog-image" height="500" width="1000" />
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>{title}</h1>
          <p>{date}</p>
          <ReactMarkdown children={markdownBody} />
        </div>
        <PrevNext prev={prev} next={next} />
      </div>
    </Layout>

  )
}

export default SingleBlog

export async function getStaticPaths() {  //slug生成、登録
  const { orderedBlogs } = await getAllBlogs()  //全ブログデータ
  const paths = orderedBlogs.map((orderedBlog) => `/blog/${orderedBlog.slug}`)  //すべてのブログの個別URL

  return {
    paths: paths,  //配列の形でないとだめ
    fallback: false, //paths内にあるslug以外は404を返す
  }
}

export async function getStaticProps(context) {
  const { singleDocument } = await getSingleBlog(context)  //front matter部分を変換したデータ
  const { orderedBlogs } = await getAllBlogs()  //全ブログデータ

  const prev = orderedBlogs.filter(orderedBlog => orderedBlog.frontmatter.id === singleDocument.data.id - 1)  //全ブログデータから前の記事データを抽出
  const next = orderedBlogs.filter(orderedBlog => orderedBlog.frontmatter.id === singleDocument.data.id + 1)  //全ブログデータから次の記事データを抽出


  return {
    props: {
      frontmatter: singleDocument.data,
      markdownBody: singleDocument.content,
      prev,
      next,
    }
  }
}
