import React, { useState } from "react";
import { Row, Container, Col, Carousel } from "react-bootstrap";
import TheButton from "../Ui/TheButton";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroFourSection.module.css";
import aboutImage1 from "../../assets/image/about-image-p1.webp";
import aboutImage2 from "../../assets/image/about-image-p2.webp";
import aboutImage3 from "../../assets/image/about-image-p3.webp";
import Modal from "../Ui/Modal";
import restaurantData from "../../restaurantData.json";

const HeroFourSection = () => {
  const [showModal, setShowModal] = useState(false);

  const aboutModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal>
          <div className={classes.about_modal}>
            <div className={classes.about_header}>
              <h2 className={classes.text_modal_header}>About us</h2>
            </div>
            <div>
              <div className={classes.scrollableContent}>
                <table className={classes.about_table}>
                  <tbody>
                    <tr>
                      <td className={classes.table_label}>Chef Name:</td>
                      <td>{restaurantData.restaurant.chef.name}</td>
                    </tr>
                    <tr>
                      <td className={classes.table_label}>Chef Bio:</td>
                      <td>{restaurantData.restaurant.chef.bio}</td>
                    </tr>
                    <tr>
                      <td className={classes.table_label}>Signature Dish:</td>
                      <td>{restaurantData.restaurant.chef.signature_dish}</td>
                    </tr>
                    <tr>
                      <td className={classes.table_label}>
                        Ambiance Description:
                      </td>
                      <td>{restaurantData.restaurant.ambiance.description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={classes.about_footer}>
              <div className={classes.button_modal_div}>
                <TheButton onClick={closeModal}>Cancel</TheButton>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <section id="about">
      <Container>
      <Row className={`${classes.row} mx-auto`}>
        <Col
          lg={6}
          data-aos="fade-right"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <div className={classes.text_div}>
            <h2 className={classes.text_header}>About us</h2>
            <p className={classes.text_content}>
              Skip the kitchen hassle! The Hot Plate ensures you savor
              delectable meals without the need for homemade effort. Enjoy your
              favorite dishes anywhere, whether you're at home or on the move.
              We're your culinary guide, helping you discover unique and
              delightful meals wherever your adventures lead. Say goodbye to
              unhealthy, costly takeout – our app ensures you never compromise
              on flavor and quality!
            </p>
            <div className={classes.button_div}>
              <TheButton onClick={aboutModal}>See more</TheButton>
            </div>
          </div>
        </Col>
        <Col lg={6}>
              <div className={classes.image_div}>
                <Carousel>
                  {restaurantData.restaurant.awards.map((award, index) => (
                    <Carousel.Item key={index}>
                      <div className={classes.carouselCaptionWrapper}>
                        <Carousel.Caption className={classes.carouselCaption}>
                          <h3>{award.organization}</h3>
                          <p>{`${award.year}: ${award.award}`}</p>
                        </Carousel.Caption>
                      </div>
                      <img
                        className={classes.image}
                        src={
                          index === 0
                            ? aboutImage1
                            : index === 1
                            ? aboutImage2
                            : aboutImage3
                        }
                        alt={`award-${index}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </Col>
      </Row>
    </Container>
      </section>
    </>
  );
};

export default HeroFourSection;
