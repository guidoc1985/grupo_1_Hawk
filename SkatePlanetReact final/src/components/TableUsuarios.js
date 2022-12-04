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

class TableUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3050/usersRoutes")
      .then((response) => response.json())
      .then((usuarios) => {
        this.setState({
         usuarios: usuarios.total,
        });
      });
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>USUARIOS TOTAL:</th>
            <tbody>
        <td>{this.state.usuarios}</td>
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

export default TableUsuarios;
