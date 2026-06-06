import { PropertyCard } from "./PropertyCard";

export function PropertyGrid({ properties }: any) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {properties.map((property: any) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
}
