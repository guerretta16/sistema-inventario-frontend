import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Layouts/Header/Header';
import ProductoAdminPage from './Pages/ProductoAdminPage';
import Home from './Pages/Home';
import ProductoPage from './Pages/ProductoPage';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Body */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/producto'>
          <Route path=':id' element={<ProductoPage/>} />
        </Route>
        <Route path='/producto-admin' element={<ProductoAdminPage/>} />
      </Routes>

      {/* Footer */}
    </div>
  );
}

export default App;
