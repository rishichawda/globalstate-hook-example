import React from 'react';
import { connect } from './redux';
import ComponentWithoutState from './ComponentWithoutState';

const ChildComponent = ({ count, updateCounter }) => (
  <div>
    <p>This is the child component</p>
    <p>{count}</p>
    <button type='button' onClick={updateCounter}>Click me, I can plus one too!</button>
    <ComponentWithoutState />
  </div>
);

const mapState = ({ anothercount }) => ({
  count: anothercount,
});

const mapDispatch = (dispatch) => ({
  updateCounter: () => dispatch({ type: 'countincrement' })
});

export default connect(mapState, mapDispatch)(ChildComponent);