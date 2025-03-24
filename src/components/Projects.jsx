import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 
import './style.css'; 

const Projects = () => { 
	const breadcrumbsPaths = 
		[ 
			{ title: 'Home', to: '/' }, 
			{ title: 'Projects', to: '/projects' } 
		]; 

	return ( 
		<section id="projects"
			className="container text-center"> 
			<Breadcrumbs paths={breadcrumbsPaths} /> 
			<h2 className="section-title"> 
				<FontAwesomeIcon icon={faCode} 
					className="mr-2" /> 
				Projects 
			</h2> 
			<div className="row"> 
				{/* Project 1 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								Read For Speed V 0.1
							</h5> 
							<p className="card-text"> 
								Designed the UI and implemented 
								CSS styling for the website, 
								optimizing performance and design across 
								all pages. 
							</p> 
						</div> 
					</div> 
				</div> 
				{/* Project 2 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								Training and Placement 
								intership Website Official 
							</h5> 
							<p className="card-text"> 
								Designed and developed the official 
								intership Website for the university using 
								HTML, CSS, PHP, JavaScript, jQuery, and Bootstrap. 
							</p> 
						</div> 
					</div> 
				</div> 
				{/* Project 3 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								E-commerce Platform 
							</h5> 
							<p className="card-text"> 
								Built a fully functional e-commerce 
								platform with features like product listing, 
								cart management, and user authentication using 
								React js, Symfony, and Mysql. 
							</p> 
						</div> 
					</div> 
				</div> 
				{/* Project 4 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								trace root for a geolocation application
							</h5> 
							<p className="card-text"> 
								Developed a geolocation application 
								that allows users to view and manage 
								their routes on openstreetmap using 
								Javacript, html, bootstrap, openstreetmap, jquery, ajax
							</p> 
						</div> 
					</div> 
				</div> 
			</div> 
		</section> 
	); 
}; 

export default Projects;