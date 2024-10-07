
import Home from "./components/Home/Home";
import Login from "./components/login/login";
import Signup from "./components/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* home page or route */}
          <Route index element={<Home />} />
          {/* login page or route */}
          <Route path="/login" element={<Login />} />
          {/* signup page or route */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
