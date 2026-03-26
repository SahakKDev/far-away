import { useState } from 'react';
import Button from './Button';
import Select from './Select';

export default function ItemForm({ onAdd }) {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState('');

  function handleCountChange(e) {
    setCount(+e.target.value);
  }

  function handleItemChange(e) {
    setItem(e.target.value);
  }

  function handleAddItem(e) {
    e.preventDefault();

    if (!item.trim().length) return;

    onAdd({ id: new Date().toISOString(), count, name: item });

    setCount(1);
    setItem('');
  }

  return (
    <div className='item-form'>
      <p>What do you need for your 😍 trip?</p>

      <form className=''>
        <Select value={count} onChange={handleCountChange}>
          {Array.from(new Array(12), (_, i) => i + 1)}
        </Select>

        <input
          value={item}
          onChange={handleItemChange}
          type='text'
          placeholder='Item...'
        />

        <Button onClick={handleAddItem} className='btn-primary'>
          add
        </Button>
      </form>
    </div>
  );
}
