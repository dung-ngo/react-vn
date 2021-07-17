import React, { useEffect } from 'react'
import TodoFeature from './features/Todo';
import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList)
    }
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <TodoFeature />
    </div>
  );
}

export default App;
