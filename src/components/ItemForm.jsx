import Button from './Button';
import Select from './Select';

export default function ItemForm() {
  return (
    <div className='item-form'>
      <p>What do you need for your 😍 trip?</p>

      <form className=''>
        <Select>{Array.from(new Array(12), (_, i) => i + 1)}</Select>

        <input type='text' placeholder='Item...' />

        <Button className='btn-primary'>add</Button>
      </form>
    </div>
  );
}
