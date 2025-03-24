import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faPhone } 
	from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } 
	from '@fortawesome/free-brands-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 
import './style.css'; 

const Contact = () => { 
	const breadcrumbsPaths = 
		[ 
			{ title: 'Home', to: '/' }, 
			{ title: 'Contact', to: '/contact' } 
		]; 

	return ( 
		<section id="contact" className="container"> 
			<Breadcrumbs paths={breadcrumbsPaths} /> 
			<h2 className="section-title">Contact</h2> 
			<p className="section-description"> 
				Feel free to reach out for
				collaboration or inquiries :  
			</p> 
			<ul className="contact-list list-unstyled"> 
				<li> 
					<FontAwesomeIcon icon={faEnvelope} 
						className="contact-icon" /> 
						jemaouizied8@gmail.com
				</li> 
				<li> 
					<FontAwesomeIcon icon={faLinkedin} 
						className="contact-icon" /> 
					https://www.linkedin.com/in/jemaouizied/
				</li> 
				<li> 
					<FontAwesomeIcon icon={faGithub} 
						className="contact-icon" /> 
					https://github.com/Jemaoui009
				</li> 
				<li> 
					<FontAwesomeIcon icon={faPhone} 
						className="contact-icon" /> 
					216-26-058-203
				</li> 
			</ul> 
		</section> 
	); 
}; 

export default Contact;