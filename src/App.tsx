// App.tsx
import React, { useContext } from 'react';
import { AppContext } from './Context';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProdottoSingolo from './Pages/ProdottoSingolo';

function App() {
  const { products, addToCart } = useContext(AppContext); 

  return (
    <div>
      <Home/> {}
      <Login />
      <ProdottoSingolo />
    </div>
  );
}

export default App;
