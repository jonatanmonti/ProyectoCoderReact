import { MenuButton } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">
      <button>Volver al inicio</button>
      </Link>
      <Link to="/catalogue">
      <button>Catalogo</button>
      </Link>

      
      
    </>
  );
};

export default NavBar;
