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
import './Employment.css';


export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employmentTable: [],
            coopTable: [],
            loaded: false,
            currentPage: 1,
            employmentcurrentPage: 1,
            itemsPerPage: 10
        };
    }

    componentDidMount() {
        axios.get('https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/employment')
            .then((response) => {
                this.setState({ employmentTable: response.data.employmentTable, coopTable: response.data.coopTable, loaded: true });
            });
    }

    render() {
        const { employmentTable, coopTable, loaded, currentPage, employmentcurrentPage, itemsPerPage } = this.state;
        // chat gpt helped me implement the table so that i am able to display only 10 coops and not all at once
        let currentItems = [];
        let currentEmploymentItems = [];
        let employmentTotalPages = 0;
        let totalPages = 0;

        if (coopTable && coopTable.coopInformation) {
            const indexOfLastItem = currentPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            currentItems = coopTable.coopInformation.slice(indexOfFirstItem, indexOfLastItem);
            totalPages = Math.ceil(coopTable.coopInformation.length / itemsPerPage);
        }

        if (employmentTable && employmentTable.professionalEmploymentInformation) {
            const indexOfLastEmploymentItem = employmentcurrentPage * itemsPerPage;
            const indexOfFirstEmploymentItem = indexOfLastEmploymentItem - itemsPerPage;
            currentEmploymentItems = employmentTable.professionalEmploymentInformation.slice(indexOfFirstEmploymentItem, indexOfLastEmploymentItem);
            employmentTotalPages = Math.ceil(employmentTable.professionalEmploymentInformation.length / itemsPerPage);
        }

        const nextPage = () => {
            this.setState((prevState) => ({
                currentPage: prevState.currentPage + 1
            }));
        };

        const prevPage = () => {
            this.setState((prevState) => ({
                currentPage: prevState.currentPage - 1
            }));
        };

        const employmentNext = () => {
            this.setState((prevState) => ({
                employmentcurrentPage: prevState.employmentcurrentPage + 1
            }));
        }
        const employmentPrev = () => {
            this.setState((prevState) => ({
                employmentcurrentPage: prevState.employmentcurrentPage - 1
            }));
        }

        let content;
        if (!loaded) {
            content = <div>{loading()}</div>;

        } else {
            content = (
                <div>
                    <h1>{coopTable.title}</h1>
                    {/* https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_intro */}
                    <table>
                        <thead>

                            <tr>
                                <th className="employer">Employer</th>
                                <th className="columnSize">Degree</th>
                                <th className="columnSize">City</th>
                                <th className="columnSize"> Term</th>


                            </tr>
                        </thead>
                        <tbody>

                            {currentItems.map((arr, index) => (
                                <tr key={index + (currentPage - 1) * itemsPerPage}>
                                    <td>{arr.employer}</td>
                                    <td>{arr.degree}</td>
                                    <td>{arr.city}</td>
                                    <td>{arr.term}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>{currentPage}</h3>
                    <div className="buttons">
                        <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
                        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
                    </div>

                    <h1>{employmentTable.title}</h1>

                    <table>
                        <thead>
                            <tr>
                                <th className="columnSize">Employer</th>
                                <th className="columnSize">Degree</th>
                                <th className="columnSize">City</th>
                                <th className="employer">Title</th>
                                <th>Start Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEmploymentItems.map((arr, index) => (
                                <tr key={index + (currentPage - 1) * itemsPerPage}>
                                    <td>{arr.employer}</td>
                                    <td>{arr.degree}</td>
                                    <td>{arr.city}</td>
                                    <td>{arr.title}</td>
                                    <td>{arr.startDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>{employmentcurrentPage}</h3>
                    <div className="buttons">
                        <button onClick={employmentPrev} disabled={employmentcurrentPage === 1}>Prev</button>
                        <button onClick={employmentNext} disabled={employmentcurrentPage === employmentTotalPages}>Next</button>
                    </div>
                </div>
            )
        }

        return (
            <div id="employment">
                <h1>Employment Tables</h1>
                {content}
            </div>
        );
    }

}