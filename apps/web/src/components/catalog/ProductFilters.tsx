export function ProductFilters() {
  return (
    <div
      className="
     grid
     gap-4
     md:grid-cols-4
    "
    >
      <select>
        <option>Category</option>
      </select>

      <select>
        <option>Rating</option>
      </select>

      <select>
        <option>Availability</option>
      </select>

      <select>
        <option>Flash Sale</option>
      </select>
    </div>
  );
}
