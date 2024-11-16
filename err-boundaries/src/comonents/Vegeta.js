import React, { Component } from 'react';
import vegeta from '../images/vegeta.png';
import handleClickComponent from '../functions/WrappedComponent';

export class Vegeta extends Component {
  render() {
    const { hocState, handleClickImage } = this.props;
    return (
      <div className={`col ${hocState.background} m-3`}>
        <img src={vegeta} alt="Vegeta" onClick={handleClickImage} />
      </div>
    );
  }
}

export default handleClickComponent(Vegeta);
