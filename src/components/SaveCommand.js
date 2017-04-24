import React, {Component} from 'react';
import {connect} from 'react-redux';
import {set as persistState} from '../localStore';
import {giveCard} from '../actions/index';

class SaveCommand extends Component {
  saveState() {
    let state = this.props;
    persistState(state);
  };

  render() {
    return (
      <button onClick={this.saveState.bind(this)} className="command">Save</button>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  giveCard: (card, target) => dispatch(giveCard(card, target))
});

export default connect(state => state, mapDispatchToProps)(SaveCommand);