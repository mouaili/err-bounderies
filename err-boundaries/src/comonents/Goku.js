import React, { Component } from 'react';
import goku from '../images/goku.webp';
import handleClickComponent from '../functions/WrappedComponent';

export class Goku extends Component {
  render() {
    const { hocState, handleClickImage } = this.props;

    return (
      <div className={`col ${hocState.background} m-3`}>
        <img src={goku} alt="Goku" onClick={handleClickImage} />
      </div>
    );
  }
}

export default handleClickComponent(Goku);
