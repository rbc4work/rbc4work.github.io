import React from "react";
import "../Cards.css";
import Footer from "../Footer";

export default function About() {
  return (
    <div class="flex-wrapper">
      <div className="cards">
        <ul className="cards__items_pricing">
          <li className="cards__item_text">
            <br />
            <h1>About Us</h1>
            <br />
            <br />
            <div style={{ margin: "auto", width: "80%" }}>
              <h2>
                Pixel Perfect is a full service photo-editing and retouching
                company specializing in Real Estate services, Portrait
                retouching, 360 degree Panorama photo editing.
              </h2>
              <br />
              <h2>
                We are a company powered by experienced talented and passionate
                team that focus on serving our clients with their utmost
                satisfaction.
              </h2>
              <h2>
                Our innovation, creation, deduction, and teamwork have helped us
                delve deep into the work process to find out the best solutions
                for our clients.
              </h2>
              <br />
              <br />
              <br />
              <h2>Address:</h2>
              <br />
              <h3>Pixel Perfect</h3>
              <h3> Moghalrajapuram, Vijayawada 520010</h3>
              <br />
              <h2>Contact Number:</h2>
              <br />
              <h3> +91 8555034492</h3>
              <h3> +91 9704442400</h3>
            </div>
          </li>
        </ul>
        {/* <ul className="cards__items_pricing">
          <li className="cards__item_text">
            <div style={{ margin: "auto", width: "80%" }}>
              <h1 style={{ textAlign: "left" }}> Contact Us </h1>
              <br />
              <h2>Address:</h2>
              <br />
              <h3>Pixel Perfect</h3>
              <h3> Moghalrajapuram, Vijayawada 520010</h3>
              <br />
              <h2>Contact Number:</h2>
              <br />
              <h3> +91 8555034492</h3>
              <h3> +91 9704442400</h3>
            </div>
          </li>
        </ul> */}
      </div>

      <Footer />
    </div>
  );
}
