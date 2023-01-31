import { useEffect, useState } from "react";
import { resourceLimits } from "worker_threads";

export const RenderItems = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [saveItems, setSaveItems] = useState([]);

  useEffect(() => {
    const products = fetch("https://golden-whispering-show.glitch.me")
      .then((response) => response.json())
      .then((data) => setSaveItems(data))
      .catch((err) => {
        console.error(err.message);
      });

    setTimeout(() => {
      setIsLoading(false);
    }, 1_000);
  }, []);

  return <div>{isLoading ? <p>Loading</p> : <div></div>}</div>;
};
