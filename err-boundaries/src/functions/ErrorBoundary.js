import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="col bg-danger text-center text-white m-3 d-flex align-items-center">
          <p>Oups, une erreur s'est produite..</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
