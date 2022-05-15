import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <div className="about">
      <h1>About this page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        alias veniam harum atque aliquid corrupti deleniti explicabo, porro
        nostrum odit voluptate consectetur repellendus quos quas beatae
        reiciendis fugiat distinctio rem.
      </p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  );
}

export default AboutPage;
