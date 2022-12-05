// import { Component } from "react";

import React, { useEffect, useState } from "react";


function LastUserInDb() {

  const [lastUser, setLastUser] = useState({});
  useEffect(() => {
    const getLastUser = async () => {
      try {
        const response = await fetch("http://localhost:3050/usersRoutes/lastUser");
        const json = await response.json();
        //console.log(json.data);
        //return json.total;
        setLastUser(json.data);
} catch (error) {
        console.log("error", error);
        // return 0;
        setLastUser({});
      }
    };

    getLastUser();
  }, []);
console.log(lastUser.url_img)
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Ultimo usuario en la DB
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "40rem" }}
              src={"http://localhost:3050" + lastUser.url_img}
              alt="imagen usuario"
            
            />
          </div>
          
          <h4>
            {lastUser.first_name + ' ' + lastUser.last_name}
          </h4>
         
        </div>
      </div>
    </div>
  );
}


// class LastUserInDb extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       usuario: [],
//     };
//   }

//   componentDidMount() {
//     fetch("http://localhost:3050/usersRoutes/lastUser")
//       .then((response) => response.json())
//       .then((usuario) => {
//         console.log(usuario)
//         this.setState({
//           apellido: usuario.data.last_name,
//           nombre: usuario.data.first_name,
//           image: usuario.data.url_img,
          
//         });
//       });
//       console.log(this.state.image)
//   }

// render() {
//   return (
//     <div className="col-lg-6 mb-4">
//       <div className="card shadow mb-4">
//         <div className="card-header py-3">
//           <h5 className="m-0 font-weight-bold text-gray-800">
//             Ultimo usuario creado:<tr></tr>
//           {this.state.apellido}, 
//           {this.state.nombre}
//           </h5>
//         </div>
//         <div className="card-body">
        
//           <div className="text-center">
            
//           <img 
//           className="img-fluid px-3 px-sm-4 mt-3 mb-4"
//           style={{ width: "40rem" }}
//           src={ this.state.image} 
//           alt= "foto ultimo usuario"
//             />
         
           
//           </div>
//           <p>
      
          
//           </p>
          
//         </div>
//       </div>
//     </div>
//   );
// }
// }


export default LastUserInDb;


