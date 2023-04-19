import logo from "../assets/imagiflix.png";
import placeholderUser from "../assets/user.jpg";

const Navbar = () => (
  <nav>
    <div>
      <h1>Imagiflix</h1>
      <img src={logo} alt="Imagiflix" />
    </div>

    <ul>
      <li>Início</li>
      <li>
        <a href="#series">Séries</a>
      </li>
      <li>
        <a href="#movies">Filmes</a>
      </li>
    </ul>

    <div>
      <form>
        <input type="text" placeholder="Titulos, gente e gênero" />
        <button>
          <i></i>
        </button>
      </form>
      <div>
        <img src={placeholderUser} alt="Foto do usuário" />
        <button>
          <i></i>
        </button>
        <ul>
          <li>
            <a href="#account">Minha conta</a>
          </li>
          <li>
            <a href="#logout">Sair</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
