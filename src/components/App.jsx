import React from 'react';
import FeedbackOption from './FeedbackOption/FeedbackOption';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const OPTIONS = ['good', 'neutral', 'bad']

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good / total) * 100)
  };

  render() {

    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <Section title="Please leave feedback">
            <FeedbackOption
              options={OPTIONS}
              onLeaveFeedback={this.changeState}
            />
          </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
