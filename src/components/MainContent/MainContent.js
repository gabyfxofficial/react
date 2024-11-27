import "./MainContent.css";
import Card from "../Card/Card";

const MainContent = () => {
  const cars = [
    {
      image:
        "https://purepng.com/public/uploads/large/purepng.com-red-ferrari-488-gtb-carcarferrarivehicletransport-961524664035iiglb.png",
      name: "Ferrari",
      price: 599,
    },
    {
      image:
        "https://th.bing.com/th/id/R.a9ca46ae75bac0124f431fdb964315fc?rik=I4Mx7nC40Gi7yQ&pid=ImgRaw&r=0",
      name: "BMW S6",
      price: 189,
    },
    {
      image:
        "https://th.bing.com/th/id/R.a021844e2f3b0eff8bc4931289d830ac?rik=ZK7EYw93wT9U6A&pid=ImgRaw&r=0",
      name: "Skoda",
      price: 289,
    },
    {
      image:
        "https://purepng.com/public/uploads/large/purepng.com-orange-jeep-wrangler-carcarvehicletransportjeep-9615246560639no4a.png",
      name: "Jeep",
      price: 169,
    },
  ];

  return (
    <div className="main-content">
      {cars.map((car, index) => (
        <Card key={index} {...car} />
      ))}
    </div>
  );
};

export default MainContent;
