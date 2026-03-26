export default function Item({ item, onRemove, onStatusChange }) {
  return (
    <div className='item'>
      <input type='checkbox' onChange={onStatusChange.bind(item.id)} />
      <p className={item.packed ? 'packed' : ''}>
        {item.count} {item.name}
      </p>
      <span onClick={onRemove.bind(item.id)} className='remove-icon'>
        ❌
      </span>
    </div>
  );
}
