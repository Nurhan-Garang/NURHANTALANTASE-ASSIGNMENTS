import React, { Component, createRef } from "react";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
    this.contentRef = createRef();
  }

  toggleContent = () => {
    this.setState((prevState) => ({ showMore: !prevState.showMore }));
  };

  render() {
    return (
      <div className="about-container" style={styles.container}>
        <h2 style={styles.heading}>About Us</h2>
        <p style={styles.paragraph}>
          At <strong>Stay & Buy</strong>, we are passionate about helping you find not just a house—but a place to truly call home or invest with confidence.
        </p>

        {this.state.showMore && (
          <div ref={this.contentRef}>
            <p style={styles.paragraph}>
              We are a trusted real estate company based in Nairobi, Kenya, offering services including Airbnb rentals, property sales (completed and off-plan), property management, investment consultancy, and furnishing services.
            </p>
            <p style={styles.paragraph}>
              Our mission is simple: to connect people with property in a way that is honest, professional, and deeply personal.
            </p>
            <p style={styles.paragraph}>
              With deep roots in the Kenyan market and a growing portfolio of happy clients, Stay & Buy continues to redefine how people engage with property—one successful deal at a time.
            </p>
          </div>
        )}

        <button style={styles.button} onClick={this.toggleContent}>
          {this.state.showMore ? "Show Less" : "Read More"}
        </button>
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  heading: {
    color: "#2c3e50"
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default AboutUs;
