import { BrowserRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import About from "./components/Blocks/About"


function App() {

  return (
     <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/clients" element={<div>Clients Page</div>} />
          <Route path="/core-values" element={<div>Core Values Page</div>} />
          <Route path="/team" element={<div>Team Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  )
}

export default App
