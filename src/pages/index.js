import * as style from "../styles/index.module.css"
import Link from "next/link"

const Index = () => {
  return (
    <>
      <h1 className={style.h1Text}>ああああ</h1>
      <Link href="/contact"><a>コンタクト</a></Link>
    </>
  )
}

export default Index
