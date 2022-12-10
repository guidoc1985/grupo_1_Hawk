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

class TableCategorias extends Component {
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
        this.setState({
         categorias: categorias.total,
        });
      });
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>CATEGORIAS TOTAL:</th>
            <tbody>
        <td>{this.state.categorias}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
          </tbody>
          </tr>
        </thead>
       
      </table>
    );
  }
}

export default TableCategorias;
