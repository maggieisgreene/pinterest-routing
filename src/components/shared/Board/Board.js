import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import boardShape from '../../../helpers/propz/boardShape';

import './Board.scss';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    deleteBoard: PropTypes.func,
  }

  deleteBoardEvent = (event) => {
    event.preventDefault();
    const { deleteBoard, board } = this.props;
    deleteBoard(board.id);
  }

  render() {
    const { board } = this.props;

    return (
      <div className="Board col-4">
        <div className="card">
        <img src={board.previewImageUrl} className="card-img-top boardImg" alt={board.name} />
          <div className="card-body">
            <h5 className="card-title">{board.name}</h5>
            <p className="card-text">{board.description}</p>
            <div className="d-flex justify-content-around">
              <Link className="btn btn-light" to={`/board/${board.id}`}>View Pins</Link>
              <button className="btn btn-light" onClick={this.deleteBoardEvent}>Delete Board</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
