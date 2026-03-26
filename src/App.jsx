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

  function onClear() {
    setItems([]);
    setSortBy('input');
  }

  let stats = 'Start adding some items to your packing list. 🚀';

  if (items.length && items.every((item) => item.packed)) {
    stats = 'You got everything! Ready to go! 🛫';
  } else if (items.length) {
    const packedCount = items.filter((item) => item.packed === true).length;
    const packedPercent = Math.round((packedCount / items.length) * 100);

    stats = `You have ${items.length} items on your list, and you already packed ${packedCount} (${packedPercent}%). 🧳`;
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

        <Actions
          sortBy={sortBy}
          changeSorting={changeSortBy}
          handleClearList={onClear}
        />
      </main>

      <Footer>{stats}</Footer>
    </div>
  );
}

export default App;
