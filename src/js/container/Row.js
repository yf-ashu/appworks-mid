import React from 'react';
import PropTypes from 'prop-types';

const Row = ({number,x,y,style,onClick}) => (
  <div className="cell" data-x={x} data-y={y} style={style} onClick={onClick}>
  {number}  
  </div>
);
Row.propTypes = {
 number: PropTypes.any,
 x: PropTypes.any,
 y: PropTypes.any,
 style: PropTypes.any,
 onClick: PropTypes.any


};
export default Row;