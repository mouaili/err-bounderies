import React from 'react';

const handleClickComponent = WrappedComponent => {
  // Class Component
  class HandleClickComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        background: '',
      };
    }

    handleClickImage = () => {
      console.log(WrappedComponent.name);

      //if Goku && Vegeta are selected :
      this.setState({ background: 'bg-success' });

      //If Frieza is selected :
      if (WrappedComponent.name === 'Frieza') {
        this.setState({ background: 'bg-danger' });
      }
    };

    render() {
      if (this.state.background === 'bg-danger') {
        throw new Error("Une erreure s'est produite");
      }

      return (
        <WrappedComponent
          handleClickImage={this.handleClickImage}
          hocState={this.state}
        />
      );
    }
  }
  return HandleClickComponent;
};

export default handleClickComponent;
