import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import pinShape from '../../../helpers/propz/pinShape';

import './Pin.scss';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    deletePin: PropTypes.func,
  }

  deletePinEvent = (event) => {
    event.preventDefault();
    const { deletePin, pin } = this.props;
    deletePin(pin.id);
  }

  render() {
    const { pin } = this.props;

    return (
      <div className="Pin col-3">
      <div className="card">
        <img src={pin.imageUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{pin.name}</h5>
          <p className="card-body">{pin.description}</p>
          <Link className="btn btn-light" to={`/board/${pin.boardId}/pin/${pin.id}/edit`}>Edit Pin</Link>
          <button className="btn btn-light" onClick={this.deletePinEvent}>Delete Pin</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Pin;
