import React from 'react'
import NavBar from "./Sections/NavBar.jsx";
import Hero from './Sections/Hero.jsx';
import About from "./Sections/About.jsx";
import Certificates from "./Sections/Certificates.jsx";
import Contact from "./Sections/Contact.jsx";
import Footer from "./Sections/Footer.jsx";
import Projects from "./Sections/Projects.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            {/*<h1 className="text-2xl text-white underline">Hello, Three.js</h1>*/}

            <NavBar />
            <Hero />
            <About />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />
        </main>
    )
}

export default App