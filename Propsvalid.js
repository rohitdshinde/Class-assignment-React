import React from 'react';
import Prop from 'prop-types';

class Valid extends React.Component {
  render() {
    const { name, age} = this.props;

    return (
      <div>
        <h1>Name: {name}</h1>
        <h2><p>Age: {age}</p></h2>
        
      </div>
    );
  }
}

Valid.propTypes = {
  name: Prop.string.isRequired,
  age: Prop.number.isRequired,
};

export default Valid;
