import React from 'react';
import PropTypes from 'prop-types';

const Ranktext = ({ name,step }) => (
  <div className="Ranktext">
      <p>test</p>
      <p>{name}</p>
      <p>{step}</p>

  </div>
);
Ranktext.propTypes = {
    name: PropTypes.any,
    step: PropTypes.any
};
export default Ranktext;