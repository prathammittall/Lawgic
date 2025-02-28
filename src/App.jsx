import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FAQ from './components/FAQ'
import Services from './components/Services'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

function App() {
	return (
		<>
			<Navbar />
			<div id="home">
				<Hero />
			</div>
			<div id="about">
				<About />
			</div>
			<div id="services">
				<Services />
			</div>
			<div id="testimonials">
				<Testimonials />
			</div>
			<div id="faq">
				<FAQ />
			</div>
			<div id="contact">
				<Footer />
			</div>
		</>
	)
}

export default App