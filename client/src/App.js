import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import MyNotes from "./pages/MyNotes/MyNotes";
import SingleNote from "./pages/SingleNote/SingleNote";
import CreateNote from "./pages/SingleNote/CreateNote";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
//import CreateNote from "./pages/CreateNote/CreateNote";
import { useState } from "react";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import LoginPage from "./pages/LoginPage/LoginPage";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <div>
        <Header setSearch={setSearch} />
      </div>
      <main className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/app/dashboard" element={<Dashboard />} exact />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/note/:id" element={<SingleNote />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <div className="hidden">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
