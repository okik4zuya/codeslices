import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import MyNotes from "./pages/MyNotes/MyNotes";
import SingleNote from "./pages/SingleNote/SingleNote";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
//import CreateNote from "./pages/CreateNote/CreateNote";
import { useState } from "react";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mynotes" element={<MyNotes />} />
          {/**<Route
        path="/mynotes"
        element={({ history }) => (
          <MyNotes search={search} history={history} />
          )}
        />
        <Route path="/createnote" element={CreateNote} />**/}
          <Route path="/note/:id" element={<SingleNote />} />

          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
