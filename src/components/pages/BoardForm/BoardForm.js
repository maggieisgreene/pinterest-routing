import React from 'react';

import './BoardForm.scss';
import authData from '../../../helpers/data/authData';
import boardData from '../../../helpers/data/boardData';

class BoardForm extends React.Component {
  state = {
    boardName: '',
    boardDescription: '',
    boardImage: '',
  }

  nameChange = (event) => {
    event.preventDefault();
    this.setState({ boardName: event.target.value });
  }

  descriptionChange = (event) => {
    event.preventDefault();
    this.setState({ boardDescription: event.target.value });
  }

  imageChange = (event) => {
    event.preventDefault();
    this.setState({ boardImage: event.target.value });
  }

  saveBoardEvent = (event) => {
    event.preventDefault();

    const newBoard = {
      name: this.state.boardName,
      description: this.state.boardDescription,
      previewImageUrl: this.state.boardImage,
      uid: authData.getUid(),
    };
    boardData.saveBoard(newBoard)
      .then(() => this.props.history.push('/'))
      .catch((err) => console.error('error from save board', err));
  }

  render() {
    const { boardName, boardDescription, boardImage } = this.state;

    return (
      <form className="BoardForm col-6 offset-3">
        <div className="form-group">
          <label htmlFor="board-name">Board Name</label>
          <input
            className="form-control"
            type="text"
            id="board-name"
            placeholder="Enter Board Name"
            value={boardName}
            onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="board-description">Board Description</label>
          <input
            className="form-control"
            type="text"
            id="board-description"
            placeholder="Enter Board Description"
            value={boardDescription}
            onChange={this.descriptionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="board-image">Board Preview Image</label>
          <input
            className="form-control"
            type="text"
            id="board-image"
            placeholder="Enter Image URL"
            value={boardImage}
            onChange={this.imageChange}
          />
        </div>
        <button className="btn btn-light" onClick={this.saveBoardEvent}>Save Board</button>
      </form>
    );
  }
}

export default BoardForm;
