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
import FacultyCard from './FacultyCard';
import "./faculty.css";

/**
 * Class component representing the Faculty page.
 * Fetches and displays information about faculty members.
 * @extends React.Component
 */
export default class Faculty extends React.Component {
    /**
     * Constructor for the Faculty component.
     * @param {Object} props - The properties passed to the component.
     */
    constructor(props) {
        super(props);
        this.state = {
            faculty: {},
            loaded: false
        };
    }

    /**
     * Fetches faculty data from an API after the component mounts. 
     * Updates the faculty object with the data from faculty and sets loaded to true upon successful retrieval of data.
     */
    componentDidMount() {
        axios.get('https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/people')
            .then((response) => {
                this.setState({ faculty: response.data.faculty, loaded: true });
            });
    }


    /**
     * Renders the Faculty component.
     * If data is not yet loaded, displays a loading animation.
     * Once data is loaded, renders information about faculty members.
     * @returns {JSX.Element} JSX representing the Faculty component.
     */
    render() {
        const { faculty, loaded } = this.state;
        let content;
        if (!loaded) {
            content = <div>{loading()}</div>;
        } else {
            content = (
                <div className="container">
                    {faculty.map((member, index) => (
                        <div key={index} className="card">
                            <FacultyCard
                                username={member.username}
                                name={member.name}
                                tagline={member.tagline}
                                title={member.title}
                                interestArea={member.interestArea}
                                office={member.office}
                                website={member.website}
                                phone={member.phone}
                                email={member.email}
                                twitter={member.twitter}
                                facebook={member.facebook}
                                imagepath={member.imagePath}
                            />
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div id="faculty">
                <h1 className="banner">Faculty</h1>
                {content}
            </div>
        );
    }


}