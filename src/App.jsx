import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SideNavBar from "./components/SideNavBar";
import FormDetailPage from "./pages/FormDetailPage";
import RankingPage from "./pages/RankingPage";
import TalentoPage from "./pages/TalentoPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <>
      <div className="container-fluid px-2 py-0 ">
        <div className="row">
          <header className="col-2">
            <SideNavBar />
          </header>
          <main className="col-10 ml-auto">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/form-detail" element={<FormDetailPage />} />
                <Route path="/ranking" element={<RankingPage />} />
                <Route path="/talento" element={<TalentoPage />} />
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
          </main>
        </div>
        <footer className="bg-light text-center py-3">
          {/* Contenido del pie de página */}
        </footer>
      </div>
    </>
  )
}

export default App
