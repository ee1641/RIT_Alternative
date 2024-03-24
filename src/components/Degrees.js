import React from "react";
import axios from "axios";
import loading from './LoadingAnimation';
import MultiActionAreaCard from './MultiActionAreaCard'; // Import the MultiActionAreaCard component
import './Degrees.css';

export default class Degrees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            undergraduate: [],
            graduate: [],
            loaded: false
        };
    }

    componentDidMount() {
        axios.get('https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/degrees')
            .then((response) => {
                this.setState({ undergraduate: response.data.undergraduate, graduate: response.data.graduate, loaded: true });
            });
    }

    render() {
        const { graduate, undergraduate, loaded } = this.state;

        let content;
        if (!loaded) {
            content = <div>{loading()}</div>;
        } else {
            content = (
                <div id="degree-div">
                    <h1>Undergraduate Degrees</h1>
                    <div className="container">
                        {undergraduate.map((degree, index) => (
                            <div className="card">

                                <MultiActionAreaCard
                                    key={index}
                                    title={`${degree.degreeName.toUpperCase()}: ${degree.title}`}
                                    description={degree.description}
                                    concentrations={degree.concentrations}
                                />
                            </div>
                        ))}
                    </div>
                    <h1>Graduate Degrees</h1>
                    <div className="container">
                        {graduate.map((degree, index) => (
                            <div className="card">

                                <MultiActionAreaCard
                                    key={index}
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
