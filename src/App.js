import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Layouts/Header/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Body */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/producto'>
          <Route path=':id'/>
        </Route>
      </Routes>

      {/* Footer */}
    </div>
  );
}

export default App;
