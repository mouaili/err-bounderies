import './App.css';
import ErrorBoundary from './functions/ErrorBoundary';
import Frieza from './comonents/Frieza';
import Goku from './comonents/Goku';
import Vegeta from './comonents/Vegeta';

function App() {
  return (
    <div className="container text-center text-info">
      <h1 className="m-4">Le Périmètre des erreurs</h1>
      <div className="row">
        <Vegeta name="Vegeta" />
        <Goku name="Goku" />
        <ErrorBoundary>
          <Frieza name="Frieza" />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
