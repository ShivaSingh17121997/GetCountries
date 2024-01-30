import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function getItems(id) {
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
    .then((res) => res.json())
}

function SingleRestaurantPage() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const params = useParams();

  useEffect(() => {
    setLoading(true)
    getItems(params.id)
      .then((res) => {
        console.log(res)
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{data.name}</h3>
      </div>
      <div data-testid="restaurant-type">Type:{data.type}</div>
      <div data-testid="restaurant-rating">Rating:{data.rating}</div>
      <div data-testid="restaurant-votes">Votes:{data.number_of_votes}</div>
      <div data-testid="restaurant-price">Starting Price:{data.price_starts_from}</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} src={data.image} alt={data.name} />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
