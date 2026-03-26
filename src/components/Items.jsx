import Item from './Item';

export default function Items({ children, onRemove }) {
  function onRemoveItem() {
    onRemove(this);
  }

  return (
    <div className='items'>
      {children.map((item) => (
        <Item key={item.id} item={item} onRemove={onRemoveItem} />
      ))}
    </div>
  );
}
