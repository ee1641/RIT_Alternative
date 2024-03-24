import React from "react";
import './App.css';
import About from './components/About';
import Degrees from "./components/Degrees";
import Faculty from "./components/Faculty";
import Employment from "./components/Employment"

export default class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <section id='About'><About /></section>
                <section id='Degrees'><Degrees /></section>
                <section id='Employment'><Employment /></section>
                <section id='Faculty'><Faculty /></section>
                <section id='Contact'></section>
            </div>
        );
    }
}