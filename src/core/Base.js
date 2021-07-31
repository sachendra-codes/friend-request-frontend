import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import '../styles.css'
const Base = ({
    title = "My title",
    description = "My Description",
    className = "p-4 flex-fill",
    children
}) => {    
    return (
//         <div class="d-flex flex-column min-vh-100">
//     <nav>
//     </nav>
//     <main class="flex-fill">
//     </main>
//     <footer>
//     </footer>
// </div>
        <div className='d-flex flex-column min-vh-100'>
            <Navigation/>
            <div className = "container-fluid">
                {/* <div className="jumbotron  text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div> */}
                <div  className = {className}>{children}</div>
            </div>
            <footer className="footer mt-auto py-3">
                <div className="container-fluid bg-dark  text-center py-3">
                    <h4 className="text-white">Reach out to us</h4>
                    <a href="https://www.linkedin.com/in/sachendra-jain-04963a1a6/" target="_blank" rel="noopener noreferrer"><button className="btn btn-warning btn-ld">Contact Us</button></a>
                </div>
                <div className="container">
                    <span className="text-muted">
                        An Amazing Website
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Base
