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

  render() {
    const { board } = this.state;

    return (
      <div className="SingleBoard">
        <h1>{board.name}</h1>
        <div className="pins d-flex flex-wrap">
          { this.state.pins.map((pin) => <Pin key={pin.id} pin={pin} />) }
        </div>
      </div>
    );
  }
}

export default SingleBoard;
