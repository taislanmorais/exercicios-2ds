import "./styles/ProfileCSS.css"
import Profile from "./components/Profile"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

export default function App() {
  return(
    <div className="container">
      <div>
        <Header />
      </div>

      <div>
        <h1>Usuários do Sistema</h1>
        <p>Conheça os membros da nossa equipe</p>
      </div>

      <div className="cartoes">
        <div className="profile-card">
          <Profile 
            foto={"https://randomuser.me/api/portraits/women/51.jpg"}
            nome={"Mariana Silva"}
            idade={29}
            profissao={"Desenvolvedora Frontend"}
          />
        </div>

        <div className="profile-card">
          <Profile 
            foto={"https://randomuser.me/api/portraits/men/5.jpg"}
            nome={"João Santos"}
            idade={35}
            profissao={"Designer UX/UI"}
          />
        </div>

        <div className="profile-card">
          <Profile 
            foto={"https://randomuser.me/api/portraits/men/45.jpg"}
            nome={"Carlos Alberto"}
            idade={41}
            profissao={"Gerente de Projetos"}
          />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}