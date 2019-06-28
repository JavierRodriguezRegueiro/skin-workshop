import React from 'react';
import Example from './example';
import '../styles/examples-container.css'


const topics = ['Flexbox', 'CSS Grid'];

const flexExamples = [
    {
        title: 'Example 1',
        desc: 'description for example 1, follow this using flexbox.',
        html: '<div></div>',
        style: '.gg {color:red}'
    },
    {
        title: 'Example 1',
        desc: 'description for example 1, follow this using flexbox.',
        html: '<div></div>',
        style: '.gg {color:red}'
    },
    {
        title: 'Example 1',
        desc: 'description for example 1, follow this using flexbox.',
        html: '<div></div>',
        style: '.gg {color:red}'
    }
];

const gridExamples = [
    {
        title: 'Example 1',
        desc: 'description for example 1, follow this using grid.',
        html: '<div></div>',
        style: '.gg {color:red}'
    },
    {
        title: 'Example 1',
        desc: 'description for example 1, follow this using grid.',
        html: '<div></div>',
        style: '.gg {color:red}'
    },
    {
        title: 'Example 1',
        desc: 'description for example 1, follow this using grid.',
        html: '<div></div>',
        style: '.gg {color:red}'
    }
]

class ExamplesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainTopic: '',
        }


        this.setTopic = this.setTopic.bind(this);
    }

    setTopic(value) {
        this.setState({
            mainTopic: value,
        });
    }

    whichExamples() {
        let examples = 'none';
        if (this.state.mainTopic === 'Flexbox') {
            examples = flexExamples;
        } else if (this.state.mainTopic === 'CSS Grid') {
            examples = gridExamples;
        }
        return examples;
    }

    renderExamples() {
        let examplesToRender = this.whichExamples();
        if (examplesToRender === 'none') {
            return <ChooseTopic/>
        } else {
            return <ExampleContainerBody examples={examplesToRender}/>
        }
    }

    render() {
        return (
            <article className='examplesContainer'>
                <TopicSelector topics={topics} setTopic={this.setTopic} currentTopic={this.state.mainTopic} />
                {this.renderExamples()}
            </article>
        );
    }
}

class TopicSelector extends React.Component {
    selectorClass() {
        let mainSelectorClass = 'topic-selector ';
        if (this.props.currentTopic === 'Flexbox') {
            mainSelectorClass = mainSelectorClass.concat('topic-selector--flexbox');
        } else if (this.props.currentTopic === 'CSS Grid') {
            mainSelectorClass = mainSelectorClass.concat('topic-selector--grid');
        }
        return mainSelectorClass;
    }

    render() {
        return (
            <div className={this.selectorClass()}>
                {this.props.topics.map(topic => <p className='topic-selector__selector' key={topic}
                                                   onClick={() => this.props.setTopic(topic)}>{topic}</p>)}
            </div>
        );
    }
}

const ExampleContainerBody = (props) => {
    return (
        <section className='example-container-body'>
            {props.examples.map((ex) => {
                return <Example
                    title={ex.title}
                    desc={ex.desc}
                    html={ex.html}
                    style={ex.style}
                />
            })}
        </section>
    );
}

const ChooseTopic = () => {
    return(
        <section className='ChooseTopic'>
            <h3 className='ChooseTopic__title'>Ups!</h3>
            <h4 className='ChooseTopic__subtitle'>Please, choose one topic to start/continue with this workshop</h4>
        </section>
    );
}
export default ExamplesContainer;