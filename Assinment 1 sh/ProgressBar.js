import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ percentage, height, color }) => {
  const containerStyles = {
    height: height,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    margin: 10,
    overflow: 'hidden'
  };

  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: color,
    transition: 'width 0.2s ease-in',
    borderRadius: 'inherit',
    textAlign: 'right'
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

// Props Validation 

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

ProgressBar.defaultProps = {
  percentage: 0,
  height: 20,
  color: '#007bff'
};

export default ProgressBar;
