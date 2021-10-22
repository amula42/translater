import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Lngslct from './components/Lngslct';

const App = () => {
  return (
    <>
      <h2 className="text-center">Translate App</h2>
      <div className="container mt-5">
        <div className="row">
          <Lngslct />
        </div>
      </div>
    </>
  )
}

export default App
