import React from 'react';

import boardData from '../../../helpers/data/boardData';
import pinData from '../../../helpers/data/pinData';

import Pin from '../../shared/Pin/Pin';

import './SingleBoard.scss';

class SingleBoard extends React.Component {
  state = {
    board: {},
    pins: [],
  }

  getPinData = (boardId) => {
    pinData.getPinsByBoardId(boardId)
      .then((pins) => this.setState({ pins }))
      .catch((err) => console.error('error from get pins', err));
  }

  componentDidMount() {
    const { boardId } = this.props.match.params;

    boardData.getSingleBoard(boardId)
      .then((response) => {
        this.setState({ board: response.data });
        this.getPinData(boardId);
      })
      .catch((err) => console.error('Error from get single board YE', err));
  }

  deletePin = (pinId) => {
    const { boardId } = this.props.match.params;

    pinData.deletePin(pinId)
      .then(() => this.getPinData(boardId))
      .catch((err) => console.error(err, 'err from deleting pin'));
  }

  render() {
    const { board } = this.state;

    return (
      <div className="SingleBoard">
        <h1>{board.name}</h1>
        <div className="pins d-flex flex-wrap">
          { this.state.pins.map((pin) => <Pin key={pin.id} pin={pin} deletePin={this.deletePin} />) }
        </div>
      </div>
    );
  }
}

export default SingleBoard;
