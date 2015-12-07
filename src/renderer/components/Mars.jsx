import React from 'react';
import Component from 'Component';
import AppActions from 'actions/AppActions';

export default class Child extends Component {

  render() {
    console.log("MARS");
    return (
      <div> Hello Mars! <button onClick={AppActions.click}> Click me! </button> </div>
    );
  }

}
