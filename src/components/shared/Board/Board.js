import React from 'react';

import boardShape from '../../../helpers/propz/boardShape';

import './Board.scss';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
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
            <button className="btn btn-light" onClick={this.setSelectedBoardId}>View Pins</button>
            <button className="btn btn-secondary" onClick={this.setEditMode}>Edit Board</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
