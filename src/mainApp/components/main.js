import React from 'react';
import '../styles/main.css';
import { Link } from "react-router-dom";

class Main extends React.Component {
    render() {
        return (
            <article className='main'>
                <WorkshopSelector workshops={this.props.workshops}/>
            </article>
        );
    }
}

class WorkshopSelector extends React.Component {
    render() {
        return (
            <div className='workshops'>
                {Object.keys(this.props.workshops).map(key => <Link className={'workshop__link ' + this.props.workshops[key].classLinkName} key={key} to={this.props.workshops[key].path}>{this.props.workshops[key].title}</Link>)}
            </div>
        );
    }
}

export default Main;