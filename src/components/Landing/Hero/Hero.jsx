import React from 'react';
import "./Hero.css";
import frontimg from "../../../assets/front-page.jpg"
import { NavLink } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container col-xxl-8 px-4 py-5 herocontainer">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5 herodetails">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={frontimg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="300" loading="lazy" />
      </div>
      <div className="col-lg-6 herocontent">
        <h1 className="display-5 fw-bold lh-1 mb-3">Memories, a place to share your favourite memories</h1>
        <p className="lead">This platform enables you to share, like and spread love by by sharing all the amazing experiences of your life. Sign Up and post pictures and stories of your recent favorite memory</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <NavLink to="/signup"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Click here to start your journey <i class="fas fa-arrow-right"></i></button></NavLink>
          {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
        </div>
        <p style={{marginTop: 10}}>&nbsp;Already registered? <NavLink to="/login">Login here</NavLink></p>
      </div>
    </div>
  </div> 
        </section>
    )
}
