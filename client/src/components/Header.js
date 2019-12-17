import React from 'react';

const Header = props => {
  return (
    <header>
      <h1>
        todo
        <span>list</span>
      </h1>
      <h2>
        simple todo app built with <span>react</span> and <span>redux</span>{' '}
        calling restful api created with <span>node</span>, <span>express</span>{' '}
        and <span>mongodb</span>
      </h2>
    </header>
  );
};

export default Header;
