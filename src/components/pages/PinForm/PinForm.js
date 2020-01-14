import React from 'react';

import './PinForm.scss';
import pinData from '../../../helpers/data/pinData';

class PinForm extends React.Component {
  state = {
    pinName: '',
    pinImage: '',
    pinDescription: '',
  }

  nameChange = (event) => {
    event.preventDefault();
    this.setState({ pinName: event.target.value });
  }

  descriptionChange = (event) => {
    event.preventDefault();
    this.setState({ pinDescription: event.target.value });
  }

  imageChange = (event) => {
    event.preventDefault();
    this.setState({ pinImage: event.target.value });
  }

  savePinEvent = (event) => {
    event.preventDefault();
    const { boardId } = this.props.match.params;

    const newPin = {
      name: this.state.pinName,
      imageUrl: this.state.pinImage,
      siteUrl: this.state.pinImage,
      description: this.state.pinDescription,
      boardId,
    };
    pinData.savePin(newPin)
      .then(() => this.props.history.push(`/board/${boardId}`))
      .catch((err) => console.error('error from save pin', err));
  }

  render() {
    const { pinName, pinImage, pinDescription } = this.state;

    return (
      <form className="PinForm col-6 offset-3">
        <div className="form-group">
          <label htmlFor="pin-name">Pin Name</label>
          <input
            className="form-control"
            type="text"
            id="pin-name"
            placeholder="Enter Pin Name"
            value={pinName}
            onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin-description">Pin Description</label>
          <input
            className="form-control"
            type="text"
            id="pin-description"
            placeholder="Enter Pin Description"
            value={pinDescription}
            onChange={this.descriptionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin-image">Pin Preview Image</label>
          <input
            className="form-control"
            type="text"
            id="pin-image"
            placeholder="Enter Image URL"
            value={pinImage}
            onChange={this.imageChange}
          />
        </div>
        <button className="btn btn-light" onClick={this.savePinEvent}>Save Pin</button>
      </form>
    );
  }
}

export default PinForm;
