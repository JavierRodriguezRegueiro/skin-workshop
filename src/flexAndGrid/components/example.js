import React from 'react';
import '../styles/example.css';


let test = '<html><body><p>llll</p></body></html>'

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            html: this.props.html,
            style: this.parseStyle(this.props.style)
        };

        this.setHTML = this.setHTML.bind(this);
        this.setStyle = this.setStyle.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    parseStyle(value) {
        return '<style>' + value + '<style/>'
    }

    setHTML(e) {
        this.setState({
            html: e.target.value.toString()
        });
        console.log(this.state.html);
    }

    setStyle(e) {
        this.setState({
            style: this.parseStyle(e.target.value)
        });
    }

    applySrc() {
        return 'data:text/html;charset=utf-8,' + encodeURI(this.state.html + this.state.style);
    }

    resetState() {
        this.setState({
            html: this.props.html,
            style: this.parseStyle(this.props.style)
        })
    }

    render() {
        return (
            <section className='example'>
                <p className='example__title'>{this.props.title}</p>
                <p className='example__desc'>{this.props.desc}</p>
                <textarea
                    className='example__textarea example__textarea--html'
                    value={this.state.html}
                    onChange={this.setHTML}
                ></textarea>
                <textarea
                    className='example__textarea example__textarea--style'
                    defaultValue={this.state.style}
                    onChange={this.setStyle}
                ></textarea>
                <iframe title={this.props.title}
                        className='example__code'
                        id='example'
                        key={this.state.html}
                        src={this.applySrc()}
                ></iframe>
                <button
                    className='example__btn'
                onClick={this.resetState}>Reset</button>
            </section>
        );
    }
}

export default Example;