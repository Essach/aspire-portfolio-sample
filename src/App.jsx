import { Box } from "@chakra-ui/react"
import About from "./components/About"
import Header from "./components/Header"
import Links from "./components/Links"
import Product from "./components/Product"
import Statistics from "./components/Statistics"
import GetStarted from "./components/GetStarted"
import Team from "./components/Team"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

function App() {

  return (
    <>  
      <Box display={'flex'} flexDirection={'column'} minH='100vh'>
        <Header />
        <Product />
      </Box>
      <Links />
      <About />
      <Statistics />
      <GetStarted />
      <Team />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
