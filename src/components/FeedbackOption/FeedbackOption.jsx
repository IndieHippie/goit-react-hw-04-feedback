import React from 'react';
import PropTypes from 'prop-types';
import { List, Button } from './Feedback.module';

const FeedbackOption = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <li key={option}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </li>
      ))}
    </List>
  );
};

export default FeedbackOption;

FeedbackOption.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
