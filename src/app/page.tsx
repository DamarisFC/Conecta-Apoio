//pagina principal 

import Footer from "./components/header/footer/footer"
import ServiceForm from "./components/header/form/page"
import Header from "./components/header/header/page"
import Services from "./components/header/servico/servico"
import Unidades from "./components/header/unidade/unidades"



export default function Home() {
  return (
    <main>
      <br></br>
      <Header></Header>
      <br></br>
      <ServiceForm></ServiceForm>
      <br></br>
      <Services></Services>
      <br></br>
      <Unidades></Unidades>
      <br></br>
      <Footer></Footer>
    </main>
  )

}
