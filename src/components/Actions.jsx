import Button from './Button';
import Select from './Select';

const sortOptions = [
  { key: 'input', value: 'sort by input order' },
  { key: 'description', value: 'sort by description' },
  { key: 'status', value: 'sort by packed status' },
];

export default function Actions({ sortBy, changeSorting }) {
  function handleSortChange(e) {
    changeSorting(e.target.value);
  }

  return (
    <div className='actions'>
      <Select
        value={sortBy}
        onChange={handleSortChange}
        className='btn-secondary'
      >
        {sortOptions}
      </Select>

      <Button className='btn-secondary'>clear list</Button>
    </div>
  );
}
