import TableProductos from "./TableProductos";
import TableUsuarios from "./TableUsuarios";
import TableCategorias from "./TableCategorias";
// import ContentRowCategorias from "./contentRowCategorias/ContentRowCategorias";
import CategoriasInDb from "./CategoriasInDb";
import ProductosInDb from "./ProductosInDb";
import LastUserInDb from "./LastUserInDb";

function ContentRowTop() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Skate Planet Dashboard</h1>
      </div>
{/* 
      <ContentRowCategorias /> */}

      <div className="row">
        <LastUserInDb />
        <CategoriasInDb />
        <ProductosInDb />
        <TableUsuarios />
        <TableProductos />
        <TableCategorias />
      </div>
    </div>
  );
}

export default ContentRowTop;
