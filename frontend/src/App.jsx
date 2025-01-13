import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ProductEntryPage from './Pages/ProductEntryPage';
import UpdateForm from './Pages/UpdateForm';
// import navbar from './components/Navbar/navbar';
import SinglePageProduct from './Pages/SingleProductPage';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-entry-page" element={<ProductEntryPage />} />
        <Route path="/update-form/:id" element={<UpdateForm />} />
        <Route path="/product-details/:id" element={<SinglePageProduct />} />
      </Routes>
    </>
  );
}

export default App;