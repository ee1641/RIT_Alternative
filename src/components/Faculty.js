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
import './faculty.css';


export default class Faculty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faculty: {},
            loaded: false
        };
    }

    componentDidMount() {
        axios.get('https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/people')
            .then((response) => {
                this.setState({ faculty: response.data.faculty, loaded: true });
            });
    }

    render() {
        const { faculty, loaded } = this.state;
        let content;
        if (!loaded) {
            content = <div>{loading()}</div>;


        } else {
            content = (
                <div>
                    {faculty.map((member, index) => (

                        <div className="faculty-member" key={index}>
                            <hr></hr>
                            <h1>{member.name}</h1>
                            <div className="wrapper">
                                {member.imagePath && <img src={member.imagePath} alt={member.username} />}
                                <div className="info-container">
                                    {/* Chat GPT helped me with the conditionals  */}
                                    {member.name && <p>User name: {member.username}</p>}
                                    {member.tagline && <p>Tagline: {member.tagline}</p>}
                                    {member.title && <p>Title: {member.title}</p>}
                                    {member.interestArea && <p>Interest Area: {member.interestArea}</p>}
                                    {member.office && <p>Office: {member.office}</p>}
                                    {member.website && <p>Website: {member.website}</p>}
                                    {member.phone && <p>Phone: {member.phone}</p>}
                                    {member.email && <p>Email: {member.email}</p>}
                                    {member.twitter && <p>Twitter: {member.twitter}</p>}
                                    {member.facebook && <p>Facebook: {member.facebook}</p>}

                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            )
        }

        return (
            <div id="faculty">
                <h1>Faculty</h1>
                {content}
            </div>
        );
    }

}