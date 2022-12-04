import { Component } from "react";
import CatCard from "./CatCard";

class ProductosInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3050/productsRoutes")
      .then((response) => response.json())
      .then((productos) => {
    
        this.setState({
          productos: productos.data,
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
             LISTADO DE PRODUCTOS
            </h5>
          </div>
          <div className="card-body fondoCaja">
            <div className="row">
              {this.state.productos.map((producto, index) => (
                <CatCard key={index + producto.nombre} categorias={producto.nombre} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductosInDb;
