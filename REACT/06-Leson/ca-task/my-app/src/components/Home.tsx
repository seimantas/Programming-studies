import { useEffect, useState } from "react";
const Home = () => {
  const [orders, setOrders] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(orders);

  useEffect(() => {
    const fetchProducts = () => {
      fetch("https://golden-whispering-show.glitch.me")
        .then((response) => response.json())
        .then((data) => setOrders(data))
        .catch((err) => {
          console.error(err.message);
        })
        .finally(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        });
    };
  });
  return (
    <div>
      isLoading ? (<p>Loading</p>) : ( <div className="container">{orders}</div>
      )
    </div>
  );
};
