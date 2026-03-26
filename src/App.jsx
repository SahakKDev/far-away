import { useState } from 'react';
import Actions from './components/Actions';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemForm from './components/ItemForm';
import Items from './components/Items';

function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('input');

  function handleAddNewItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleRemoveItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function changeSortBy(sortBy) {
    setSortBy(sortBy);
  }

  function handleStatusChange() {
    setItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        packed: item.id === this ? !item.packed : item.packed,
      })),
    );
  }

  return (
    <div className='app'>
      <Header />
      <ItemForm onAdd={handleAddNewItem} />
      <main>
        <Items
          sortBy={sortBy}
          onRemove={handleRemoveItem}
          onStatusChange={handleStatusChange}
        >
          {items}
        </Items>

        <Actions sortBy={sortBy} changeSorting={changeSortBy} />
      </main>

      <Footer>Start adding some items to your packing list 🚀</Footer>
    </div>
  );
}

export default App;
