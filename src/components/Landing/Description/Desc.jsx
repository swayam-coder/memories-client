import React from 'react';
import "./Desc.css";

export default function Desc() {
    return (
        <section className="descsection">
            <div class="px-4 py-5 text-center desccontent">
    <h1 class="display-5 fw-bold">Made by Swayam Nayak</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Memories is a web application made by using ReactJS, Redux, ExpressJS and MongoDB with styling done in CSS/SCSS and Bootstrap. </p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center desc-images">
        <img src="https://img.icons8.com/ios-glyphs/64/000000/react.png" alt="react icon"/>
        <img src="https://img.icons8.com/color/64/000000/nodejs.png" alt="nodejs icon"/>
        <img src="https://img.icons8.com/color/64/000000/mongodb.png" alt="mongo icon"/>
        {/* <i class="fab fa-node-js"></i> */}
        <img src="https://img.icons8.com/color/64/000000/redux.png" alt="redux icon"/>
        <img src="https://img.icons8.com/color/64/000000/sass.png" alt="sass icon"/>
        <img src="https://img.icons8.com/color/64/000000/bootstrap.png" alt="bootstrap icon"/>
        </div>
    </div>
  </div>
        </section>
    )
}
