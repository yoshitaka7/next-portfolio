import "../styles/all.scss"  //グローバルなcss

//最上階コンポーネント
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
