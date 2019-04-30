import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App =() =>{
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" text="this is text1"/>
      <CommentDetail author="Alex" text="this is text 2"/>
    </div>
  );
};


ReactDOM.render(<App/>,document.querySelector('#root'))
