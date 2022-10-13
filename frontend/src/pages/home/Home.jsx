import React from 'react'
import banner from '../../images/banner.webp'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
     <>
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 fw-normal">Take a Quizz</h1>
      <p class="lead fw-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae asperiores delectus blanditiis doloribus quos, aut dolorum fugit, tenetur et dolore veniam. Itaque commodi neque adipisci in unde optio ad dicta.</p>
      <Link to="/register"><a class="btn btn-outline-secondary">Get started</a></Link>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
     </>
        )
}

export default Home