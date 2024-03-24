/*
 * React comunity encourage you to import assets in JavaScript files instead of 
 * using the public folder. For example, see the sections on adding a stylesheet 
 * and adding images and fonts:
 * - https://create-react-app.dev/docs/adding-a-stylesheet
 * - https://create-react-app.dev/docs/adding-images-fonts-and-files
 * 
 * This mechanism provides a number of benefits:
 * - Scripts and stylesheets get minified and bundled together to avoid extra network requests.
 * - Missing files cause compilation errors instead of 404 errors for your users.
 * - Result filenames include content hashes so you don’t need to worry about browsers caching their old versions.
 */
import React from "react";
import axios from "axios";
import loading from './LoadingAnimation';
import './About.css';
import AboutModal from './AboutModal';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: {},
            loaded: false
        };
    }

    componentDidMount() {
        axios.get('https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/about')
            .then((response) => {
                this.setState({ about: response.data, loaded: true });
            });
    }

    render() {
        const { about, loaded } = this.state;

        let content;
        if (!loaded) {
            content = <div>{loading()}</div>;

        } else {
            content = (
                <div>
                    <h3>{about.title}</h3>
                    <p>{about.description}</p>
                    <AboutModal quote={about.quote} quoteAuthor={about.quoteAuthor} name={"Show Quote"} header={"QUOTE"} />
                </div>
            )
        }

        return (
            <div id="about">
                <h1>iSchool @ RIT</h1>
                {content}
            </div>
        );
    }

}