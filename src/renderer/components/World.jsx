
import React from 'react';
import Component from 'Component';
import { Link } from 'react-router';

import css from './styles/World.css';
import url from 'url';

export default class World extends Component {

  render() {
    return (
      <div className={css.world}>
        Hello world!
        <Link to="/mars"> to Mars! </Link>
      </div>
    );
  }

}
