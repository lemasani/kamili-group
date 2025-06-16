import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import RootLayout from "./layout/RootLayout";
import About from "./Blocks/About";
import Home from "./Blocks/Home";
import ServiceBlock from "./Blocks/Services";
import { withPageTransition } from "./components/PageTransitions/TransitionWrapper";

// Create transitioned components for simple pages
const ProjectsPage = withPageTransition(() => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-4xl font-bold text-primary">Projects Page</h1>
  </div>
));

const ClientsPage = withPageTransition(() => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-4xl font-bold text-primary">Clients Page</h1>
  </div>
));

const CoreValuesPage = withPageTransition(() => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-4xl font-bold text-primary">Core Values Page</h1>
  </div>
));

const TeamPage = withPageTransition(() => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-4xl font-bold text-primary">Team Page</h1>
  </div>
));

const ContactPage = withPageTransition(() => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-4xl font-bold text-primary">Contact Page</h1>
  </div>
));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServiceBlock />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/core-values" element={<CoreValuesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
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