import React from 'react'
import { Container} from "react-bootstrap"
import{BsFacebook} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'
import{BsTwitter} from 'react-icons/bs'
import{BsYoutube} from 'react-icons/bs'

const Footers=()=>{
    return(

        <Container fluid>
        <div>
            <div className="row">
                <div className="col-md-3">
                    <ul className="navbar-nav">
                        <li id="nav-icons">
                            <BsFacebook/>
                            <BsInstagram/>
                            <BsTwitter/>
                            <BsYoutube/>
                        </li>
                        <li className="nav-item">
                            <a href='344' className="nav-link text-muted">Audio and Subtitles</a>
                        </li>
                        <li className="nav-item">
                            <a  href='344'className="nav-link text-muted">Media Center</a>
                        </li>
                        <li className="nav-item">
                            <a href='344' className="nav-link text-muted">Privacy</a>
                        </li>
                        <li className="nav-item">
                            <a href='344' className="nav-link text-muted">Contact Us</a>
                        </li>
                        <li className="nav-item mt-2">
                            <button className="btn btn-outline-secondary">Service Code</button>
                        </li>
                        <li className="nav-item mt-2">
                            <a href='344' className="nav-link text-muted">© {new Date().getFullYear()} Netflix inc</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="navbar-nav">
                         
                        <li className="nav-item">
                            <a href='344' className="nav-link text-muted">Audio Description</a>
                        </li>
                        <li className="nav-item">
                            <a href='344' className="nav-link text-muted">Investor Relations</a>
                        </li>
                        <li className="nav-item">
                            <a href='344' className="nav-link text-muted">Legal Notices</a>
                        </li>
                        
                       
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="navbar-nav">
                         
                        <li className="nav-item">
                            <a href='344' className="nav-link text-muted">Help Center</a>
                        </li>
                        <li className="nav-item">
                            <a href='344' className="nav-link text-muted">Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a href='344'className="nav-link text-muted">Cookie Preferences</a>
                        </li>
                        
                       
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="navbar-nav">
                         
                        <li className="nav-item">
                            <a href='344' className="nav-link text-muted">Gift Cards</a>
                        </li>
                        <li className="nav-item">
                            <a href='344' className="nav-link text-muted">Terms Of Use</a>
                        </li>
                        <li className="nav-item">
                            <a href='344' className="nav-link text-muted">Corporate Information</a>
                        </li>
                        
                       
                    </ul>
                </div>
            </div>
        </div>
    </Container>
    )
}
export default Footers