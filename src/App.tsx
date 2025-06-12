import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import RootLayout from "./layout/RootLayout";
import About from "./Blocks/About";
import Home from "./Blocks/Home";
import { TransitionWrapper } from "./components/PageTransitions/TransitionWrapper";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <TransitionWrapper>
              <Home />
            </TransitionWrapper>
          } 
        />
        <Route 
          path="/about" 
          element={
            <TransitionWrapper>
              <About />
            </TransitionWrapper>
          } 
        />
        <Route 
          path="/services" 
          element={
            <TransitionWrapper>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-primary">Services Page</h1>
              </div>
            </TransitionWrapper>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <TransitionWrapper>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-primary">Projects Page</h1>
              </div>
            </TransitionWrapper>
          } 
        />
        <Route 
          path="/clients" 
          element={
            <TransitionWrapper>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-primary">Clients Page</h1>
              </div>
            </TransitionWrapper>
          } 
        />
        <Route 
          path="/core-values" 
          element={
            <TransitionWrapper>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-primary">Core Values Page</h1>
              </div>
            </TransitionWrapper>
          } 
        />
        <Route 
          path="/team" 
          element={
            <TransitionWrapper>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-primary">Team Page</h1>
              </div>
            </TransitionWrapper>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <TransitionWrapper>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-primary">Contact Page</h1>
              </div>
            </TransitionWrapper>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <AnimatedRoutes />
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;