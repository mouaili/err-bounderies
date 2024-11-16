import React, { Component } from 'react';
import frieza from '../images/frieza.webp';
import handleClickComponent from '../functions/WrappedComponent';

export class Frieza extends Component {
  render() {
    const { hocState, handleClickImage } = this.props;

    return (
      <div className={`col ${hocState.background} m-3`}>
        <img src={frieza} alt="Frieza" onClick={handleClickImage} />
      </div>
    );
  }
}

export default handleClickComponent(Frieza);
