import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./HeroSixSection.module.css";
import StarRating from "./StarRating"; // Adjust the import path based on your folder structure
import restaurantData from "../../restaurantData.json";

const HeroSixSection = () => {
  return (
    <section id="testimonials">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Testimonials</h2>
              <p>This is what our clients are saying</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_content}>
          {restaurantData.restaurant.reviews.map((review, index) => (
            <Col
              key={index}
              lg={4}
              data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-duration="700"
              data-aos-delay={150 * index}
            >
              <div className={`${classes.text_div} px-2`}>
                <h4 className={classes.header_text}>{review.customer_name}</h4>
                <p className={classes.text_location}>
                  <StarRating rating={review.rating} />
                </p>
                <p className={classes.text_content}>{review.comment}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HeroSixSection;
