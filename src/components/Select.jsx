export default function Select({ children, className, ...props }) {
  return (
    <select {...props} className={className}>
      {children.map((child) => {
        return (
          <option key={child} value={child}>
            {child}
          </option>
        );
      })}
    </select>
  );
}
