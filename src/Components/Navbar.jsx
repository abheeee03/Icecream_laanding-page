import React from 'react'
import Styles from './Navbar.module.css'
import { Link } from 'react-router-dom'


const Navbar = () => {


  return (
    <div className={Styles.nav}>
        <Link to="/"className={Styles.logoName}> <svg className={Styles.Icon}fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 194.359 194.359" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M167.01,189.777L126.14,24.464l7.248-4.184l-3.695-6.401l-9.652,5.572c-0.001,0.001-0.002,0-0.002,0l-1.357,0.783 c-6.28-9.151-15.486-15.72-26.321-18.624C80.324-1.616,67.756,0.042,56.963,6.27C46.172,12.5,38.454,22.56,35.228,34.595 c-2.904,10.836-1.816,22.093,2.968,32.107l-10.955,6.325l3.695,6.401l7.194-4.153l42.796,41.164l-0.02,0.025l0.251,0.198 l79.704,76.665c0.707,0.68,1.631,1.032,2.564,1.032c0.631,0,1.27-0.162,1.846-0.494 C166.696,193.043,167.405,191.375,167.01,189.777z M42.366,36.508c2.715-10.129,9.21-18.594,18.292-23.837 c6.049-3.493,12.763-5.277,19.566-5.277c3.41,0,6.842,0.447,10.224,1.353c8.928,2.394,16.565,7.725,21.842,15.178L56.298,56.252 c-4.696-11.737-0.204-25.482,11.057-31.985c1.768-1.021,2.373-3.282,1.353-5.048c-1.023-1.766-3.287-2.378-5.048-1.353 c-14.797,8.546-20.534,26.821-13.83,42.121l-4.323,2.496l-0.919,0.531C40.773,54.719,39.974,45.439,42.366,36.508z M111.283,135.385l7.014-10.627l-6.166-4.07l-6.263,9.488l-14.997-14.425l12.717-16.161l-5.808-4.57l-12.262,15.583L68.973,94.688 l17.972-24.023l-5.918-4.427L63.605,89.525L44.793,71.43l0.142-0.082c0,0,0.001,0,0.002-0.001L64.711,59.93l54.768-31.62 l37.288,150.824L111.283,135.385z"></path> </g> </g> </g></svg> I-SCREAM</Link>
        <p className={Styles.LinkCont}>
            <Link to="/Categories">Categories</Link>
            <Link to="/Brands">Brands</Link>
            <Link to="/BecomeSeller">Become Seller</Link>
            <Link to="/Login">Login</Link>
        </p>
    </div>
  )
}

export default Navbar