import { Component } from "react";

// const tableRowsData = [
//   {
//     title: "Billy Elliot ",
//     length: "123",
//     rating: "5",
//     categories: ["Drama", "Comedia"],
//     awards: 2,
//   },
//   {
//     title: "Alicia en el país de las maravillas",
//     length: "142",
//     rating: "4.8",
//     categories: ["Drama", "Acción", "Comedia"],
//     awards: 3,
//   },
// ];

class TableProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableRowsData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3050/productsRoutes")
      .then((response) => response.json())
      .then((productos) => {
        this.setState({
          tableRowsData: productos.data,
        });
      });
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {this.state.tableRowsData.map((row) => {
            return (
              <tr key={row.nombre}>
                <td>{row.nombre}</td>
                <td>{row.descripcion}</td>
                <td>{row.price}</td>
                <td>{row.id_categorias}</td>
                {/* <td>
                  <ul>
                    {row.categories.map((name) => {
                      return <li key={name}>{name}</li>;
                    })}
                  </ul>
                </td> */}
                {/* <td>{row.categorias.nombre || "---------"}</td> */}
                
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
        
            
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default TableProducts;
