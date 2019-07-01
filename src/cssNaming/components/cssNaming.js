import React from 'react';
import '../styles/cssNaming.css';
import { example1 } from '../examples/example-1.json';

const examples = [
  {
    "key": "example1",  
    "exampleHeader": "Example 1",
    "exampleDesc": "Set classes and define them in CSS for this Enyo component",
    "exampleEnyo": example1["example-cssnaming-enyo-1"].join("\n"),
    "exampleCSS": example1["example-cssnaming-css-1"].join("\n"),
    "resultEnyo": example1["result-cssnaming-enyo-1"].join("\n"),
    "resultCSS": example1["result-cssnaming-css-1"].join("\n")
  }
];

class ExampleRendering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enyo: this.props.example.exampleEnyo,
      css: this.props.example.exampleCSS,
      enyoCheck: "IDLE",
      cssCheck: "IDLE"
    }

    this.setEnyoState = this.setEnyoState.bind(this);
    this.setCSSState = this.setCSSState.bind(this);
    this.setEnyoCheckState = this.setEnyoCheckState.bind(this);
    this.setCssCheckState = this.setCssCheckState.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.checkEnyo = this.checkEnyo.bind(this);
    this.checkCSS = this.checkCSS.bind(this);
  };

  // Internal Reactjs function --> Get example state from sessionStorage
  componentWillMount() {
    if (sessionStorage.getItem(this.props.example.key)) {
      const exampleStatus = JSON.parse(sessionStorage.getItem(this.props.example.key));
      this.setState(() => ({
        enyo: exampleStatus.enyo,
        css: exampleStatus.css,
        enyoCheck: exampleStatus.enyoCheck,
        cssCheck: exampleStatus.cssCheck
      }));
    }
  };

  // Internal Reactjs function --> Save example state to locaStorage
  componentDidUpdate() {
    const exampleStatus = {
      enyo: this.state.enyo,
      css: this.state.css,
      enyoCheck: this.state.enyoCheck,
      cssCheck: this.state.cssCheck
    }
    sessionStorage.setItem(this.props.example.key, JSON.stringify(exampleStatus));
  };

  // Set Enyo State for example
  setEnyoState(newValue) {
    this.setState({
      enyo: newValue.target.value.toString(),
      enyoCheck: "IDLE"
    });
  };

  // Set CSS State for example
  setCSSState(newValue) {
    this.setState({
      css: newValue.target.value.toString(),
      cssCheck: "IDLE"
    });
  };

  // Set Enyo Check State for example
  setEnyoCheckState(newValue) {
    this.setState({
      enyoCheck: newValue
    });  
  };

  // Set CSS Check State for example
  setCssCheckState(newValue) {
    this.setState({
      cssCheck: newValue
    });  
  };

  // Check function for Enyo
  checkEnyo(resultEnyo) {
   return this.state.enyo === resultEnyo;
  };

  // Check function for CSS
  checkCSS(resultCSS) {
    return this.state.css === resultCSS;
  };

  // Check function for Example
  checkAll() {
    this.checkEnyo(this.props.example.resultEnyo) ? this.setEnyoCheckState("OK") : this.setEnyoCheckState("KO");
    this.checkCSS(this.props.example.resultCSS) ? this.setCssCheckState("OK") : this.setCssCheckState("KO");
  };

  // Get CSS classNames for Enyo example
  getEnyoClassesNames() {
    var classNames = "example__textarea example__textarea--html";
    switch (this.state.enyoCheck) {
        case "OK":
            classNames += " example__textarea--correct";            
            break;
        case "KO":
            classNames += " example__textarea--wrong";            
            break;    
        default:
            classNames += " example__textarea--idle";
            break;
    }
    console.log("getEnyoClassesNames returns " + classNames);
    return classNames;
  };

  // Get CSS classNames for Enyo example
  getCSSClassesNames() {
    var classNames = "example__textarea example__textarea--style";
    switch (this.state.cssCheck) {
        case "OK":
            classNames += " example__textarea--correct";            
            break;
        case "KO":
            classNames += " example__textarea--wrong";            
            break;
    
        default:
            break;
    }
    console.log("getCSSClassesNames returns " + classNames);
    return classNames;
  };

  // Render Component
  render() {
    return (
      <article className="example">
        <p className="example__title" key={this.props.example.key + "title"}>{this.props.example.exampleHeader}</p>
        <p className="example__desc" key={this.props.example.key + "desc"}>{this.props.example.exampleDesc}</p>
        <p className="example__subtitle example__subtitle--enyo">Enyo Component</p>
        <p className="example__subtitle example__subtitle--css">CSS Classes</p>
        <textarea className={this.getEnyoClassesNames()} key={this.props.example.key + "enyo"} onChange={this.setEnyoState} defaultValue={this.state.enyo}/>
        <textarea className={this.getCSSClassesNames()} key={this.props.example.key + "css"} onChange={this.setCSSState} defaultValue={this.state.css}/>
        <button className="example__btn" key={this.props.example.key + "check"} onClick={this.checkAll}>Check it!</button>                
      </article>
    );
  }
}

class CssNaming extends React.Component {    
  render() {
    return (
      <div className="cssnaming">
        {examples.map(example => <ExampleRendering key={example.key} example={example}/>)}
      </div>
    );
  }
}

export default CssNaming;

