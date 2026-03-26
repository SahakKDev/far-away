import Item from './Item';

export default function Items({ children, onRemove, sortBy, onStatusChange }) {
  function onRemoveItem() {
    onRemove(this);
  }

  let items = children;

  if (sortBy === 'description') {
    items = children.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === 'status') {
    items = children.slice().sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className='items'>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onRemove={onRemoveItem}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}
