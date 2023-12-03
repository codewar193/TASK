import React from "react";
import TheButton from "../Ui/TheButton";
import classes from "./HeroSection.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodImage from "../../assets/image/FoodImage.webp";
import restaurantData from "../../restaurantData.json";

const HeroSection = () => {
  //Rendering the Hero section(Landing page) on the DOM
  return (
    <section id="hero">
      <Container>
        <Row className={`${classes.row} mx-auto`}>
          <Col
            lg={6}
            className="p-0"
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-duration="1500"
          >
            <div className={classes.text__div}>
              <h1>
              Hundreds<span> of flavors </span>  under one roof
              </h1>

              <p style={{padding: '20px'}}>
              Situated along the <b>{restaurantData.restaurant.location.address} </b>proudly ranks among the World's 50 Best Restaurants. Acknowledged in 2021 as one of the Top 5 globally, we invite you to relish the pleasure of wholesome and delightful food at your convenience. Our commitment is to ensure your dining experience is comfortable, healthy, and tailored for those on the go.
              </p>

              <Link
                className={classes.order_button}
                to="dishes"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <TheButton>Order Now</TheButton>
              </Link>
            </div>
          </Col>
          <Col lg={6} className="p-0">
            <div className={`ms-auto`}>
              <img
                className={classes.food__image}
                src={FoodImage}
                fluid="true"
                alt="Food pic"
                data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="1500"
              ></img>
            </div>
          </Col>
        </Row>
        <Row
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <div className={classes.number__properties}>
            <div>
              <p className={classes.number__properties__digit}>500+</p>
              <p className={classes.number__properties__text}>Food partners</p>
            </div>
            <div className="mx-4">
              <p className={classes.number__properties__digit}>1k+</p>
              <p className={classes.number__properties__text}>
                orders delivered
              </p>
            </div>
            <div>
              <p className={classes.number__properties__digit}>12k+</p>
              <p className={classes.number__properties__text}>Clients</p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
  //END
};

export default HeroSection;
