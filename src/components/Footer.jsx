import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub, faTwitter, faFacebook } 
	from '@fortawesome/free-brands-svg-icons'; 
import './style.css'; // Import your custom CSS file 

const Footer = () => { 
return ( 
	<footer className="footer"> 
	<div className="container"> 
		<div className="row"> 
		<div className="col-md-6"> 
			<p>© 2025 Qlic home Agency . All rights reserved.</p> 
		</div> 
		<div className="col-md-6 text-md-right"> 
			<ul className="social-icons list-unstyled"> 
			<li> 
				<a 
href="https://www.linkedin.com/in/jemaouizied/" target="_blank" rel="noopener noreferrer"> 
				<FontAwesomeIcon icon={faLinkedin} /> 
				</a> 
			</li> 
			<li> 
				<a href= 
"https://github.com/Jemaoui009" target="_blank" rel="noopener noreferrer"> 
				<FontAwesomeIcon icon={faGithub} /> 
				</a> 
			</li> 
			<li> 
				<a href= 
"https://www.facebook.com/profile.php?id=61573138746754" target="_blank" rel="noopener noreferrer"> 
				<FontAwesomeIcon icon={faFacebook} /> 
				</a> 
			</li> 
			</ul> 
		</div> 
		</div> 
	</div> 
	</footer> 
); 
}; 

export default Footer;