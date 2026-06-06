import { Card } from "@/ui";


export default function DashboardHome() {
  return (
    <div
      className="
       grid
       gap-6
       md:grid-cols-2
       xl:grid-cols-4
      "
    >
      <Card>
        <h3>Properties</h3>

        <p
          className="
          text-3xl
          font-bold
         "
        >
          24
        </p>
      </Card>

      <Card>
        <h3>Savings</h3>

        <p
          className="
          text-3xl
          font-bold
         "
        >
          ₦850,000
        </p>
      </Card>

      <Card>
        <h3>Orders</h3>

        <p
          className="
          text-3xl
          font-bold
         "
        >
          18
        </p>
      </Card>

      <Card>
        <h3>Wallet</h3>

        <p
          className="
          text-3xl
          font-bold
         "
        >
          ₦125,000
        </p>
      </Card>
    </div>
  );
}
