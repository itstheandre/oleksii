import { useParams } from "react-router";

function Product() {
  const params = useParams();
  console.log("params:", params);

  //   fetchFromApi(params)
  return (
    <div>
      <h1>The Product</h1>
    </div>
  );
}

export { Product };
