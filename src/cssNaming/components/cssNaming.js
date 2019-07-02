import React from 'react';
import '../styles/cssNaming.css';
import { example1 } from '../examples/example-1.json';

const examples = [
  {
    "key": "example1",  
    "exampleHeader": "Example 1",
    "exampleDesc": "Set classes and define them in CSS for this Enyo component inside example1.js file",
    "exampleEnyo": example1["example-cssnaming-enyo-1"].join("\n"),
    "exampleCSS": example1["example-cssnaming-css-1"].join("\n"),
    "resultEnyo": example1["result-cssnaming-enyo-1"].join("\n"),
    "resultCSS": example1["result-cssnaming-css-1"].join("\n")
  },
  {
    "key": "example2",  
    "exampleHeader": "Example 2",
    "exampleDesc": "Set classes and define them in CSS for this Enyo component",
    "exampleEnyo": example1["example-cssnaming-enyo-1"].join("\n"),
    "exampleCSS": example1["example-cssnaming-css-1"].join("\n"),
    "resultEnyo": example1["result-cssnaming-enyo-1"].join("\n"),
    "resultCSS": example1["result-cssnaming-css-1"].join("\n")
  },
  {
    "key": "example3",  
    "exampleHeader": "Example 3",
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
      cssCheck: "IDLE",
      showResult: false,
    }

    this.setEnyoState = this.setEnyoState.bind(this);
    this.setCSSState = this.setCSSState.bind(this);
    this.setEnyoCheckState = this.setEnyoCheckState.bind(this);
    this.setCssCheckState = this.setCssCheckState.bind(this);
    this.setShowResult = this.setShowResult.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.checkEnyo = this.checkEnyo.bind(this);
    this.checkCSS = this.checkCSS.bind(this);
    this.showResult = this.showResult.bind(this);
  };

  // Internal Reactjs function --> Get example state from sessionStorage
  componentWillMount() {
    if (sessionStorage.getItem(this.props.example.key)) {
      const exampleStatus = JSON.parse(sessionStorage.getItem(this.props.example.key));
      this.setState(() => ({
        enyo: exampleStatus.enyo,
        css: exampleStatus.css,
        enyoCheck: exampleStatus.enyoCheck,
        cssCheck: exampleStatus.cssCheck,
        showResult: exampleStatus.showResult
      }));
    }
  };

  // Internal Reactjs function --> Save example state to locaStorage
  componentDidUpdate() {
    const exampleStatus = {
      enyo: this.state.enyo,
      css: this.state.css,
      enyoCheck: this.state.enyoCheck,
      cssCheck: this.state.cssCheck,
      showResult: this.state.showResult
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

  // Set Show Result state for example
  setShowResult(newValue) {
    this.setState({
      showResult: newValue
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

  // Get CSS classNames for Article example
  getArticleClassesNames() {
    var classNames = "cssnaming__article";
    if (this.state.showResult) {
      classNames += " cssnaming__article--withResult";
    } else {
      classNames += " cssnaming__article--withoutResult";
    }
    return classNames;
  };

  // Get CSS classNames for Enyo example
  getEnyoClassesNames() {
    var classNames = "article__textarea article__textarea--html";
    switch (this.state.enyoCheck) {
        case "OK":
            classNames += " article__textarea--correct";            
            break;
        case "KO":
            classNames += " article__textarea--wrong";            
            break;    
        default:
            classNames += " article__textarea--idle";
            break;
    }
    return classNames;
  };

  // Get CSS classNames for Enyo example
  getCSSClassesNames() {
    var classNames = "article__textarea article__textarea--style";
    switch (this.state.cssCheck) {
        case "OK":
            classNames += " article__textarea--correct";            
            break;
        case "KO":
            classNames += " article__textarea--wrong";            
            break;
        default:
            classNames += " article__textarea--idle";
            break;
    }
    console.log("getCSSClassesNames returns " + classNames);
    return classNames;
  };

  // Get name for Show Result button example
  changeShowResultLabel() {
      var msg = '';
      if (this.state.showResult) {
          msg = 'Hide Solution';
      } else {
          msg = 'Show Solution'
      }
      return msg;
  }

  // Chnage showResult state
  showResult() {
      let currentSate = this.state.showResult;
      this.setShowResult(!currentSate);
  };

  // Get CSS classNames for Result example
  getResultClassesNames() {
    var classNames = "article__resultContainer";
    if (!this.state.showResult) {
        classNames += " article__resultContainer--hidden";
    }
    return classNames;
  };

  // Render Component
  render() {
    return (
      <article className={this.getArticleClassesNames()}>
        <p className="article__title" key={this.props.example.key + "title"}>{this.props.example.exampleHeader}</p>
        <p className="article__desc" key={this.props.example.key + "desc"}>{this.props.example.exampleDesc}</p>
        <button className="article__btnresult" key={this.props.example.key + "result"} onClick={this.showResult}>{this.changeShowResultLabel()}</button>
        <div className={this.getResultClassesNames()}>
            <textarea className="article__flexElement" readOnly key={this.props.example.key + "enyoResult"} value={this.props.example.resultEnyo}/>
            <textarea className="article__flexElement" readOnly key={this.props.example.key + "cssResult"} value={this.props.example.resultCSS}/>
        </div> 
        <p className="article__subtitle article__subtitle--enyo">Enyo Component</p>
        <p className="article__subtitle article__subtitle--css">CSS Classes</p>
        <textarea className={this.getEnyoClassesNames()} key={this.props.example.key + "enyo"} onChange={this.setEnyoState} defaultValue={this.state.enyo}/>
        <textarea className={this.getCSSClassesNames()} key={this.props.example.key + "css"} onChange={this.setCSSState} defaultValue={this.state.css}/>
        <button className="article__btn" key={this.props.example.key + "check"} onClick={this.checkAll}>Check it!</button>            
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

