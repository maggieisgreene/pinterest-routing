import React from 'react';

import authData from '../../../helpers/data/authData';
import boardData from '../../../helpers/data/boardData';

import './BoardForm.scss';

class BoardForm extends React.Component {
  state = {
    boardName: '',
    boardDescription: '',
    boardImage: '',
  }

  componentDidMount() {
    const { boardId } = this.props.match.params;

    if (boardId) {
      boardData.getSingleBoard(boardId)
        .then((response) => {
          this.setState({ boardName: response.data.name, boardDescription: response.data.description, boardImage: response.data.previewImageUrl });
        })
        .catch((err) => console.error('error from get single board', err));
    }
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
    this.setState({ boardName: '', boardDescription: '', boardImage: '' });
  }

  updateBoardEvent = (event) => {
    event.preventDefault();
    const { boardId } = this.props.match.params;

    const updatedBoard = {
      name: this.state.boardName,
      description: this.state.boardDescription,
      previewImageUrl: this.state.boardImage,
      uid: authData.getUid(),
    };
    boardData.updateBoard(boardId, updatedBoard)
      .then(() => this.props.history.push('/'))
      .catch((err) => console.error('error from update board', err));
  }

  render() {
    const { boardName, boardDescription, boardImage } = this.state;
    const { boardId } = this.props.match.params;

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
        { (!boardId) ? (<button className="btn btn-light" onClick={this.saveBoardEvent}>Save Board</button>)
          : (<button className="btn btn-light" onClick={this.updateBoardEvent}>Update Board</button>) }
      </form>
    );
  }
}

export default BoardForm;
