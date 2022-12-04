// import { Component } from "react";
// import RowItem from "./RowItem";


// class ContentRowCategorias extends Component {
 
//   constructor(props) {
//     super(props);
//     this.state = {
//       usuarios: [],
//       productos:[],
//       categorias: []
    
//     };
//   }
//   componentDidMount() {
//       fetch("http://localhost:3050/usersRoutes")
//       .then((response) => response.json())
//       .then((usuarios) => {
//         console.log(usuarios)
//         this.setState({
//           usuarios: usuarios.data.total,
//         });
//       });
    
//     }
  
  
//   render(){
//     return (
//       <div className="row">
//       {this.state.usuarios}
//       <RowItem
     
//           />
  
//       </div>
    
//     );
//   }
// }


// export default ContentRowCategorias;
