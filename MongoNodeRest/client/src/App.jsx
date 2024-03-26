import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageRegister } from "./pages/Register.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>Home page</p>} />
          <Route path="/login" element={<p>Login</p>} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="/tasks" element={<p>Proyecto</p>} />
          <Route path="/add-task" element={<p>add-task</p>} />
          <Route path="/tasks/:id" element={<p>tasks:id</p>} />
          <Route path="/profile" element={<p>profile</p>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
