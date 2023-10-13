import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from "../assets/logo.svg"
import { Cart, Container, Header } from "../styles/pages/app"
import Image from "next/image"
import { Handbag } from "phosphor-react"
import ShoppingCart from "../components/ShoppingCart"

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <Cart>
          <Handbag size={24} />
          <div>1</div>
        </Cart>
      </Header>
      <ShoppingCart/>
      <Component {...pageProps} />
    </Container>
  )
}

export default App
