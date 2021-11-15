import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  //Layoutコンポーネントで配下の要素がchildrenになる

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout