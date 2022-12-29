import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

const optionList = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return [good, neutral, bad].reduce((total, val) => total + val, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total) || 0;
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case optionList.good:
        setGood(good + 1);
        break;

      case optionList.neutral:
        setNeutral(neutral + 1);
        break;

      case optionList.bad:
        setBad(bad + 1);
        break;

      default:
        throw new Error('Unsupported option type');
    }
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.values(optionList)}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>

      <GlobalStyle />
    </Layout>
  );
};

export default App;
