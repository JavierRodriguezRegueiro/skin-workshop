import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import MainApp from './mainApp/js/mainApp';
import CSSNamingApp from './cssNaming/js/cssnamingApp';
import FlexAndGrid from './flexAndGrid/components/flex-and-grid';
import SmallWindow from './mainApp/components/small-window';

import './App.css';

const applications =
    {
        'mainApp':
            {
                path: '/',
                component: MainApp
            },
        'flexAndGrid':
            {
                path: '/flexAndGridWorkshop',
                component: FlexAndGrid
            },
        'cssNaming':
            {
                path: '/cssNamingWorkshop',
                component: CSSNamingApp
            }
    };


class RouterApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            windowWidth: window.innerWidth
        }

        this.setWindowWidth = this.setWindowWidth.bind(this);
    }

    setWindowWidth() {
        this.setState({
            windowWidth: window.innerWidth
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.setWindowWidth);
    }
    renderRouter() {
        if(this.state.windowWidth >= 800) {
            //This application is not meant to be used in mobile devices
            return (
                <Router>
                    {Object.keys(applications).map(key => <Route key={key} exact path={applications[key].path}
                                                                 component={applications[key].component}/>)}
                </Router>
            );
        }
        else {
            return <SmallWindow/>
        }
    }

    render() {
        return (
            <div>
            {this.renderRouter()}
            </div>
        );
    }
}

function App() {
    return (
        <div className="app">
            <RouterApp/>
        </div>
    );
}

export default App;
