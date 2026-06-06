export function PropertyFilters() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <select>
        <option>Property Type</option>
        <option>Apartment</option>
        <option>Duplex</option>
        <option>Land</option>
      </select>
      <select>
        <option>Bedrooms</option>
        <option>1</option>
        <option>2</option>
        <option>3+</option>
      </select>
      <select>
        <option>Status</option>
        <option>Available</option>
        <option>Reserved</option>
        <option>Occupied</option>
      </select>
    </div>
  );
}
