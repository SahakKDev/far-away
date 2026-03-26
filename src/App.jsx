import { useState } from 'react';
import Actions from './components/Actions';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemForm from './components/ItemForm';
import Items from './components/Items';

function App() {
  const [items, setItems] = useState([]);

  function handleAddNewItem(item) {
    setItems(prevItems => [...prevItems, item])
  }

  function handleRemoveItem(id) {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  return (
    <div className='app'>
      <Header />
      <ItemForm onAdd={handleAddNewItem} />
      <main>
        <Items onRemove={handleRemoveItem}>{items}</Items>

        <Actions />
      </main>

      <Footer>Start adding some items to your packing list 🚀</Footer>
    </div>
  );
}

export default App;
