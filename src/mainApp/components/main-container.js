import React from 'react';
import '../styles/main-container.css';
import Main from './main';

class MainContainer extends React.Component {
    render() {
        return (
            <Main workshops={this.props.workshops}/>              
        );
    }
}

export default MainContainer;