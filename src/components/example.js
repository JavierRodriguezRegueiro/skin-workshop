import React from 'react';
import '../styles/example.css';

class Example extends React.Component {
    render() {
        return (
            <section className='example'>
                <p className='example__title'>{this.props.title}</p>
                <p className='example__desc'>{this.props.desc}</p>
                <textarea className='example__textarea example__textarea--html' defaultValue={this.props.html}></textarea>
                <textarea className='example__textarea example__textarea--style' defaultValue={this.props.style}></textarea>
                <iframe title={this.props.title} className='example__code' id='example'></iframe>
                <button className='example__btn'>Try it</button>
            </section>
        );
    }
}

export default Example;