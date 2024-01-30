import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Pagination from "../Components/Pagination"
import RestaurantTable from "../Components/RestaurantTable";

function Dashboard() {
  const { authState, logoutUser } = useContext(AuthContext);
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  useEffect(() => {

    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=5`)
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        console.log(res)
        // console.log(res.json())
      })
      .catch((err) =>
        console.log(err)
      )
  }, [page])

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser} >Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RestaurantTable data={data.data} />
      </div>
      <div data-testid="pagination-container">
        <Pagination
          handlePageChange={(page) => setPage(page)}
          totalPages={data.totalPages}
          currentPage={page}
        />
      </div>
    </div>
  );
}

export default Dashboard;
