import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserDashBoard from './pages/UserDashBoard';
import PrivateRoute from './auth/PrivateRoute';
import AdminDashboard from './pages/AdminRoutes/AdmitDashBoard';
import CategoryDashboard from './pages/AdminRoutes/CategoryDashboard';
import ProductDashboard from './pages/AdminRoutes/ProductDashboard';
import GestDashboard from './pages/GestDashboard';
import ProductDetails from './pages/ProductDetails';
import Card from './pages/Card';
import Shipping from './pages/Shipping';
function App() {
  return (
    <Routes>
      <Route path="/" element={<GestDashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/:productId" element={<ProductDetails />} />
      {/* Privet routed  */}
      <Route
        path="/user-dashboard"
        element={
          <PrivateRoute>
            <UserDashBoard />
          </PrivateRoute>
        }
      />
      {/* admin routes */}
      <Route
        path="/admin-dashboard"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/category-dashboard"
        element={
          <PrivateRoute>
            <CategoryDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/product-dashboard"
        element={
          <PrivateRoute>
            <ProductDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/card/:productId/:quantity"
        element={
          <PrivateRoute>
            <Card />
          </PrivateRoute>
        }
      />
      <Route
        path="/Shipping/:userID"
        element={
          <PrivateRoute>
            <Shipping />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
