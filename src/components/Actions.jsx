import Button from "./Button";
import Select from "./Select";

export default function Actions() {
  return <div className="actions">
    <Select className='btn-secondary'>
      {[1, 2, 3]}
    </Select>

    <Button className='btn-secondary'>clear list</Button>
  </div>
}