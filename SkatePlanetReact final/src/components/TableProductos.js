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

class TableProductos extends Component {
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
         productos: productos.total,
        });
      });
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>PRODUCTOS TOTAL:</th>
            <tbody>
        <td>{this.state.productos}</td>
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

export default TableProductos;
