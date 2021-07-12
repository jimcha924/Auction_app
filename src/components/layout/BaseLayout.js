import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Slideshow from "../Slides";
import Cards from "../Cards";

const BaseLayout = (props) => {
  return (
    <>
    <Header /> <br />

  <body>

    <Slideshow />
    <br></br>
    {/* <Cards /> */}
     <div> 
      {/* <ul>
        <li>
          <Link to="/cards">bids</Link>
        </li>
        <li>
          <Link to="/listings">Listings</Link>
        </li>
        <li>
          <Link to="/class">Class demo</Link>
        </li>
        
      </ul> */}
      </div>
      {props.children}
    </body>
      <Footer />
    </>
  );
};

export default BaseLayout;