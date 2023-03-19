import React from "react";
// import { useNavigate } from "react-router-dom";
import ShowFestival from "./showFestival";
import {  Link,useLocation } from "react-router-dom";





const Home = () => {
  const location=useLocation();

  // const navigate = useNavigate();
  // const authToken = localStorage.getItem('token');

  // if (!authToken) {
  //   navigate("/signup");
  // }
  return (

    <main role="main">

    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="first-slide" src="../../boatrace.png" alt="First slide" />
          <div class="container">
            <div class="text-at-home-carousel carousel-caption text-left">
              <h1 className="main-heading">Indulge in the beauty of culture.</h1>
              <p> Discover a World of Local Festivities: Celebrate Culture, Food, Music and More with Our Festival Guide!</p>
              <p>
              <Link className="btn btn-lg btn-primary" to="/signup" role="button"style={{ boxShadow: `${location.pathname==="/signup"?"3px 3px rgb(80 80 80)":""}`,marginLeft:"10px"}}>Sign up</Link>
              </p>
            </div>
          </div>
        </div>
        
    
      </div>
    </div>


     
    <div class="container marketing">

      {/* <!-- Three columns of text below the carousel --> */}
     


     <ShowFestival />

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
        </div>
      </div>

      <hr class="featurette-divider" />

    
    </div>


  
    <footer class="container">
      <p class="float-right"><a href="#">Back to top</a></p>
      <p>&copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
  </main>

  );
};

export default Home;
