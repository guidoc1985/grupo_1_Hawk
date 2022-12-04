import { Component } from "react";
import CatCard from "./CatCard";

class CategoriasInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3050/categoryRoutes")
      .then((response) => response.json())
      .then((categorias) => {
        console.log(categorias)
        this.setState({
          categorias: categorias.data,
        });
      });
  }

  setColor() {
    const cardGenres = document.querySelector(".fondoCaja");
    cardGenres.classList.add("bg-secondary");
  }
  clearColor() {
    const cardGenres = document.querySelector(".fondoCaja");
    cardGenres.classList.remove("bg-secondary");
  }

  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5
              onMouseOver={() => this.setColor()}
              onMouseLeave={() => this.clearColor()}
              className="m-0 font-weight-bold text-gray-800"
            >
              CATEGORIAS
            </h5>
          </div>
          <div className="card-body fondoCaja">
            <div className="row">
              {this.state.categorias.map((categoria, index) => (
                <CatCard key={index + categoria.nombre} categorias={categoria.nombre} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriasInDb;
