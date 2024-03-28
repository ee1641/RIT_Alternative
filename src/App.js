import React from "react";
import './App.css';
import About from './components/About';
import Degrees from "./components/Degrees";
import Faculty from "./components/Faculty";
import Employment from "./components/Employment";
import Footer from "./components/Footer";

/**
 * Main component representing the entire application.
 * Renders sections for About, Degrees, Employment, Faculty, and Footer.
 * @extends React.Component
 */
export default class App extends React.Component {

    /**
     * Renders the main application component.
     * @returns {JSX.Element} JSX element representing the App component.
     */
    render() {
        return (
            <div className='App'>
                <section id='About'><About /></section>
                <section id='Degrees'><Degrees /></section>
                <section id='Employment'><Employment /></section>
                <section id='Faculty'><Faculty /></section>
                <section id='Contact'><Footer /></section>
            </div>
        );
    }
}