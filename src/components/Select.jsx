export default function Select({ children }) {
  return (
    <select>
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
