import { Component } from "react";




class LastUserInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3050/usersRoutes/lastUser")
      .then((response) => response.json())
      .then((usuario) => {
        console.log(usuario)
        this.setState({
          apellido: usuario.data.last_name,
          nombre: usuario.data.first_name,
          image: usuario.data.url_img
          
        });
      });
      console.log(this.state.image)
  }

render() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Ultimo usuario creado:<tr></tr>
          {this.state.apellido}, 
          {this.state.nombre}
          </h5>
        </div>
        <div className="card-body">
        
          <div className="text-center">
            
          <img src=
             {this.state.image} alt= "foto ultimo usuario"
            ></img>
         
           
          </div>
          <p>
      
          
          </p>
          
        </div>
      </div>
    </div>
  );
}
}
export default LastUserInDb;


