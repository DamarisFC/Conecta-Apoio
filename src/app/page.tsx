//pagina principal 

import Footer from "./components/header/footer/footer"
import ServiceForm from "./components/header/form/page"
import Header from "./components/header/header/page"
import Services from "./components/header/servico/servico"
import Unidades from "./components/header/unidade/unidades"



export default function Home() {
  return (
    <main>
      <Header></Header>
      <Services></Services>
      <Unidades></Unidades>
      <ServiceForm></ServiceForm>
      <Footer></Footer>
    </main>
  )

}
