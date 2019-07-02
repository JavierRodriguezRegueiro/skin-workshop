import React from 'react';
import '../styles/example.css';


class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            html: this.props.html,
            style: this.props.style
        };

        this.setHTML = this.setHTML.bind(this);
        this.setStyle = this.setStyle.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    componentWillMount() {
        if (localStorage.getItem(this.props.id)) {

            const exampleStatus = JSON.parse(localStorage.getItem(this.props.id));
            this.setState(() => ({
                html: exampleStatus.html,
                style: exampleStatus.style
            }))
        }
    }

    componentDidUpdate() {
        const exampleStatus = {
            html: this.state.html,
            style: this.state.style
        }

        localStorage.setItem(this.props.id, JSON.stringify(exampleStatus));
    }

    static parseStyle(value) {
        return '<style>' + value + '<style/>'
    }

    setHTML(e) {
        this.setState({
            html: e.target.value.toString()
        });
    }

    setStyle(e) {
        this.setState({
            style: e.target.value
        });
    }

    addTabOnHTML(e) {
        if (e.keyCode === 9) {
            //If tab key is pressed
            e.preventDefault();
        }
    }

    applySrc() {
        return 'data:text/html;charset=utf-8,' + encodeURI(this.state.html + Example.parseStyle(this.state.style));
    }

    resetState() {
        this.setState({
            html: this.props.html,
            style: this.props.style
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
                    onKeyDown={this.addTabOnHTML}
                ></textarea>
                <textarea
                    className='example__textarea example__textarea--style'
                    value={this.state.style}
                    onChange={this.setStyle}
                    onKeyDown={this.addTabOnHTML}
                ></textarea>
                <iframe title={this.props.title}
                        className='example__code'
                        id='example'
                        key={this.state.html}
                        src={this.applySrc()}
                ></iframe>
                <button
                    className='example__btn'
                    onClick={this.resetState}>Reset
                </button>
            </section>
        );
    }
}

export default Example;