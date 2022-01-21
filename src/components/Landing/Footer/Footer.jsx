import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <section>
            <footer className="footer mt-auto py-3 footersection">
                <div className="container footer-container">
                    <span className="text-white"><b>Let's Connect!</b></span>
                    <br />
                    <div className="footer-socials">
                        <a 
                            href="https://www.linkedin.com/in/swayam-nayak-15a551198/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{textDecoration: "none", color: "white", padding: "10px"}}
                        >
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a> 
                        <a 
                            href="https://github.com/swayam-coder" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{textDecoration: "none", color: "white"}}
                        >
                            <i class="fab fa-github"></i> Github
                        </a> 
                        <a 
                            href="mailto:swayam14feb@gmail.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{textDecoration: "none", color: "white"}}
                        >
                            <i class="far fa-envelope"></i> Mail
                        </a> 
                    </div>
                </div>
            </footer>
        </section>
    )
}
