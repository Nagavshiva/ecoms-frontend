import "./App.css";
import ProductList from "./components/products/ProductList";
import LoginForm from "./components/user/LoginForm";
import RegisterForm from "./components/user/RegisterForm";
import Header from "./components/Navbar";
// import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/reg" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
