import Sidebar from "./SideBar";
import ContentWrapper from "./ContentWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LastUserInDb from "./LastUserInDb";
import CategoriasInDb from "./CategoriasInDb";
import ProductosInDb from "./ProductosInDb";
import ContentRowCategorias from "./contentRowCategorias/ContentRowCategorias";


function RouterApp() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <Routes>
          <Route path={"/"} element={<ContentWrapper />} />
          <Route path={"/ultima"} element={<LastUserInDb />} />
          <Route path={"/categoryRoutes"} element={<CategoriasInDb />} />
          <Route path={"/productosRoutes"} element={<ProductosInDb />} />
          <Route path={"/peliculas"} element={<ContentRowCategorias />} />
          <Route path={"*"} element={<ContentWrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RouterApp;
