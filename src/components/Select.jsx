export default function Select({ children, className, ...props }) {
  return (
    <select {...props} className={className}>
      {children.map((child) => {
        return (
          <option className="option" key={child.key} value={child.key}>
            {child.value}
          </option>
        );
      })}
    </select>
  );
}
