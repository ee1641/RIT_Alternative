
import React from "react";
import './footer.css';

/**
 * Component representing the footer section of the website.
 * Provides information about RIT and quick links to different sections.
 * Also includes social media links and contact details.
 * @extends React.Component
 */

export default class Footer extends React.Component {

    /**
     * Renders the Footer component.
     * @returns {JSX.Element} JSX representing the Footer component.
     */
    render() {
        return (
            // https://www.codewithfaraz.com/content/19/how-to-create-pure-css-responsive-footer-using-html-and-css#html-code
            <div className="footer">
                <div className="heading">
                    <h2>Rochester Institute of Technology</h2>
                </div>
                <div className="content">
                    <div className="services">
                        <h4>Services</h4>
                        <p>Web and Mobile Computing</p>
                        <p>Hospitality and Toursim</p>
                        <p>International Business</p>
                        <p>New Media Design</p>
                    </div>
                    <div className="social-media">
                        <h4>Social</h4>
                        <p>
                            <a href="https://www.linkedin.com/school/rochester-institute-of-technology/"
                            ><i className="fab fa-linkedin"></i> Linkedin</a
                            >
                        </p>
                        <p>
                            <a href="https://twitter.com/ritnews?lang=en"
                            ><i className="fab fa-twitter"></i> Twitter</a
                            >
                        </p>
                        <p>
                            <a href="https://www.facebook.com/RITfb/"
                            ><i className="fab fa-facebook"></i> Facebook</a
                            >
                        </p>
                        <p>
                            <a href="https://www.instagram.com/rit_croatia/"
                            ><i className="fab fa-instagram"></i> Instagram</a
                            >
                        </p>
                    </div>
                    <div className="links">
                        <h4>Quick links</h4>
                        <p><a href="#about">Home</a></p>
                        <p><a href="#degrees">Degree</a></p>
                        <p><a href="#employment">Employment</a></p>
                        <p><a href="#faculty">Faculty</a></p>
                    </div>
                    <div className="details">
                        <h4 className="address">Address</h4>
                        <p>
                            Ul. Damira Tomljanovića 15, <br />
                            10000, Zagreb
                        </p>
                        <h4 className="mobile">Mobile</h4>
                        <p>+385 01 6439 100</p>
                        <h4 className="mail">Email</h4>
                        <p>admissions@croatia.rit.edu
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}