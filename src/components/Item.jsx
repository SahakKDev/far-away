export default function Item({ item, onRemove }) {
  return (
    <p className='item'>
      <input type='checkbox' />
      {item.count} {item.name}{' '}
      <span onClick={onRemove.bind(item.id)} className='remove-icon'>
        ❌
      </span>
    </p>
  );
}
