import PrivateRoute from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home"
import Login from "./Login";
import Item from "./SingleRestaurantPage"
import CartPage from "./CartPage"

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        <Route
          path="/restaurants/:id" element={<PrivateRoute> <Item /> </PrivateRoute>} />
      </Routes>
      <Routes path="./cart" element={<CartPage /> } ></Routes>
    </div>
  );
}

export default AllRoutes;
