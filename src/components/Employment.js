import React from "react";
import axios from "axios";
import loading from './LoadingAnimation';
import EmploymentTable from './employmentTable'; // Import the EmploymentTable component
import './Employment.css';

/**
 * Class component representing the Employment page.
 * This component fetches and displays employment data, including professional employment information and co-op information.
 * @extends React.Component
 */
export default class Employment extends React.Component {

    /**
     * Constructor for the Employment component.
     * @param {Object} props - The properties passed to the component.
     */
    constructor(props) {
        super(props);
        this.state = {
            employmentTable: [],
            coopTable: [],
            loaded: false,
        };
    }

    /**
     * Fetches employment data from an API after component mounts.
     */
    componentDidMount() {
        axios.get('https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/employment')
            .then((response) => {
                this.setState({ employmentTable: response.data.employmentTable, coopTable: response.data.coopTable, loaded: true });
            });
    }

    /**
    * Renders the Employment component.
    * If data is not yet loaded, displays a loading animation.
    * Once data is loaded, renders employment tables.
    * @returns {JSX.Element} Content to be rendered.
    */
    render() {
        const { employmentTable, coopTable, loaded } = this.state;

        let content;
        if (!loaded) {
            content = <div>{loading()}</div>;
        } else {
            content = (
                <div className="table-div">
                    <h1>{coopTable.title}</h1>
                    <EmploymentTable data={coopTable.coopInformation} columns={[
                        { id: 'employer', label: 'Employer' },
                        { id: 'degree', label: 'Degree' },
                        { id: 'city', label: 'City' },
                        { id: 'term', label: 'Term' }
                    ]} />

                    <h1>{employmentTable.title}</h1>
                    <EmploymentTable data={employmentTable.professionalEmploymentInformation} columns={[
                        { id: 'employer', label: 'Employer' },
                        { id: 'degree', label: 'Degree' },
                        { id: 'city', label: 'City' },
                        { id: 'title', label: 'Title' },
                        { id: 'startDate', label: 'Start Date' }
                    ]} />
                </div>
            );
        }

        return (

            <div id="employment">
                <h1 className="banner">Employment Tables</h1>
                {content}
            </div>
        );
    }
}
