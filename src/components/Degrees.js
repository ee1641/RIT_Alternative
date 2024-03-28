import React from "react";
import axios from "axios";
import loading from './LoadingAnimation';
import DegreeCard from './DegreeCard'; // Import the MultiActionAreaCard component
import './Degrees.css';


/**
 * Class component representing the Degrees page.
 * This component fetches and displays information about undergraduate and graduate degrees.
 * User can click on read more Button and addtional Infromation will be displayed in a modal.
 * @extends React.Component
 */
export default class Degrees extends React.Component {

    /**
     * Constructor for Degrees component.
     * @param {Object} props - The properties passed to the component.
     */
    constructor(props) {
        super(props);
        this.state = {
            undergraduate: [],
            graduate: [],
            loaded: false
        };
    }

    /**
     * Fetches undergraduate and graduate degrees data from an API. 
     * Once the data is received, update the undergraduate and graduate arrays and set loading to true.
     */
    componentDidMount() {
        axios.get('https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/degrees')
            .then((response) => {
                this.setState({ undergraduate: response.data.undergraduate, graduate: response.data.graduate, loaded: true });
            });
    }

    /**
     * Renders the Degrees component.
     * @returns {JSX.Element} JSX representing the Degrees component.
     */
    render() {
        const { graduate, undergraduate, loaded } = this.state;

        let content;
        if (!loaded) {
            content = <div>{loading()}</div>;
        } else {
            content = (
                <div id="degree-div">
                    <h1 className="banner">Undergraduate Degrees</h1>
                    <div className="container">
                        {undergraduate.map((degree, index) => (
                            <div className="card" key={index} style={{ marginBottom: "10vh", marginTop: "10vh" }}>

                                <DegreeCard
                                    title={`${degree.degreeName.toUpperCase()}: ${degree.title}`}
                                    description={degree.description}
                                    concentrations={degree.concentrations}
                                />
                            </div>
                        ))}
                    </div>
                    <h1 className="banner">Graduate Degrees</h1>
                    <div className="container">
                        {graduate.map((degree, index) => (
                            <div className="card" key={index} style={{ marginBottom: "10vh", marginTop: "10vh" }}>

                                <DegreeCard
                                    //ChatGPT Helped me with the conditional
                                    title={degree.title ? `${degree.degreeName.toUpperCase()}: ${degree.title}` : degree.degreeName.toUpperCase()}
                                    description={degree.description}
                                    concentrations={degree.concentrations}
                                    availableCertificates={degree.availableCertificates}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <div id="degrees">
                {content}
            </div>
        );
    }
}
