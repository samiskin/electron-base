import React from 'react';
import Actions from 'actions/Actions';
import { connect } from 'react-redux';
import store from 'lib/Store';


let lastTick = 0;
class Main extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
  };

  handleClick(e) {
    Actions.increment();
    console.log(this.unsub);
    this.unsub();
  }

  componentDidMount() {
    this.unsub = store.subscribe(() => {
        if (Date.now() - lastTick > 1000) {
            lastTick = Date.now();
            Actions.increment(2);
        }
    });
    console.log(this.unsub);
  }

  render() {
    return (
      <div className="Main">
        Hello World!
        <button onClick={this.handleClick.bind(this)}> Click count: {this.props.counter} </button>
      </div>
    );
  }
}

export default connect((state) => ({
  counter: state.counter,
}))(Main);
