import "./style.css";
import Trash from "./../../assets/Trash.svg";

function Home() {
  const users = [
    {
      id: "12",
      nome: "Joe",
      idade: "33",
      email: "joe@email.com",
    },

    {
      id: "17",
      nome: "Maria",
      idade: "20",
      email: "maria@email.com",
    },
    {
      id: "13",
      nome: "Paulo",
      idade: "20",
      email: "maria@email.com",
    },

    {
      id: "1",
      nome: "Adriano",
      idade: "33",
      email: "adriano@email.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input type="text" name="nome" placeholder="Nome"/>
        <input type="number" name="idade" placeholder="Idade" />
        <input type="email" name="email" placeholder="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.nome}</span></p>
            <p>Idade: <span>{user.idade}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
