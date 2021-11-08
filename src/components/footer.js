import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.google.com/"><img src="/images/github.svg" alt="logo"/></a>
        <a href="https://www.google.com/"><img src="/images/linkedin.svg" alt="logo"/></a>
        <a href="https://www.google.com/"><img src="/images/twitter.svg" alt="logo"/></a>
        <a href="https://www.google.com/"><img src="/images/facebook.svg" alt="logo"/></a>
        <hr/>
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
        <p>©{new Date().getFullYear()} Abe Hiroki</p>
      </div>
    </footer>
  )
}

export default Footer