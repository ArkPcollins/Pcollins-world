import { Card, Button } from "@/ui";

export function ProductCard({ product }: any) {
  return (
    <Card>
      <img
        src={product.images[0]}
        className="
      h-56
      w-full
      object-cover
     "
      />

      <div
        className="
      mt-4
     "
      >
        <h3>{product.name}</h3>

        <p>₦{product.price.toLocaleString()}</p>

        <Button>Add To Cart</Button>
      </div>
    </Card>
  );
}
