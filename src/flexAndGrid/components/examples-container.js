import React from 'react';
import Example from './example';
import FloatingButton from './floating-button';
import '../styles/examples-container.css';

import { example1 } from '../examples/flex-examples/example-1';
import { example2 } from '../examples/flex-examples/example-2';
import { example3 } from '../examples/flex-examples/example-3';
import { example4 } from '../examples/flex-examples/example-4';
import { example5 } from '../examples/flex-examples/example-5';
import { example6 } from '../examples/flex-examples/example-6';

import { example1 as example1Grid } from '../examples/grid-examples/example-1';
import { example2 as example2Grid } from '../examples/grid-examples/example-2';
import { example3 as example3Grid } from '../examples/grid-examples/example-3';

const topics = ['Flexbox', 'CSS Grid'],
  flexExamples = [
    {
      id: example1.id,
      title: example1.title,
      desc: example1.desc,
      html: example1.html.join('\n'),
      style: example1.style.join('\n')
    },
    {
      id: example2.id,
      title: example2.title,
      desc: example2.desc,
      html: example2.html.join('\n'),
      style: example2.style.join('\n')
    },
    {
      id: example3.id,
      title: example3.title,
      desc: example3.desc,
      html: example3.html.join('\n'),
      style: example3.style.join('\n')
    },
    {
      id: example4.id,
      title: example4.title,
      desc: example4.desc,
      html: example4.html.join('\n'),
      style: example4.style.join('\n')
    },
    {
      id: example5.id,
      title: example5.title,
      desc: example5.desc,
      html: example5.html.join('\n'),
      style: example5.style.join('\n')
    },
    {
      id: example6.id,
      title: example6.title,
      desc: example6.desc,
      html: example6.html.join('\n'),
      style: example6.style.join('\n')
    }
  ],
  gridExamples = [
    {
      id: example1Grid.id,
      title: example1Grid.title,
      desc: example1Grid.desc,
      html: example1Grid.html.join('\n'),
      style: example1Grid.style.join('\n')
    },
    {
      id: example2Grid.id,
      title: example2Grid.title,
      desc: example2Grid.desc,
      html: example2Grid.html.join('\n'),
      style: example2Grid.style.join('\n')
    },
    {
      id: example3Grid.id,
      title: example3Grid.title,
      desc: example3Grid.desc,
      html: example3Grid.html.join('\n'),
      style: example3Grid.style.join('\n')
    }
  ],
  gridGuide = 'https://css-tricks.com/snippets/css/complete-guide-grid/',
  flexGuide = 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/';

class ExamplesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainTopic: ''
    };

    this.setTopic = this.setTopic.bind(this);
  }

  setTopic(value) {
    this.setState({
      mainTopic: value
    });
  }

  whichExamples() {
    let examples = 'none',
      questionLink;

    if (this.state.mainTopic === 'Flexbox') {
      examples = flexExamples;
      questionLink = flexGuide;
    } else if (this.state.mainTopic === 'CSS Grid') {
      examples = gridExamples;
      questionLink = gridGuide;
    }
    return { examples, questionLink };
  }

  renderExamples() {
    let operators = this.whichExamples();
    if (operators.examples === 'none') {
      return <ChooseTopic />;
    } else {
      return (
        <ExampleContainerBody
          examples={operators.examples}
          questionLink={operators.questionLink}
        />
      );
    }
  }

  render() {
    return (
      <article className="examplesContainer">
        <TopicSelector
          topics={topics}
          setTopic={this.setTopic}
          currentTopic={this.state.mainTopic}
        />
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
        {this.props.topics.map(topic => (
          <button
            className="topic-selector__selector"
            key={topic}
            onClick={() => this.props.setTopic(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
    );
  }
}

const ExampleContainerBody = props => {
  return (
    <section className="example-container-body">
      {props.examples.map(ex => {
        return (
          <Example
            key={ex.id}
            id={ex.id}
            title={ex.title}
            desc={ex.desc}
            html={ex.html}
            style={ex.style}
          />
        );
      })}
      <FloatingButton questionLink={props.questionLink} label="Guide" />
    </section>
  );
};

const ChooseTopic = () => {
  return (
    <section className="ChooseTopic">
      <h3 className="ChooseTopic__title">Let's start!</h3>
      <h4 className="ChooseTopic__subtitle">
        Please, choose one topic to start/continue with this workshop
      </h4>
    </section>
  );
};
export default ExamplesContainer;
