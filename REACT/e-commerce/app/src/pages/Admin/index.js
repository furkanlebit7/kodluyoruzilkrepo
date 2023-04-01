import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import "./styles.css";
import { Box } from "@chakra-ui/react";
import Home from "./Home";
import Products from "./Products";
import Orders from "./Orders";
import ProductDetail from "./ProductDetail";

const Admin = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to={url}>Home</Link>
          </li>
          <li>
            <Link to={`${url}/orders`}>Orders</Link>
          </li>
          <li>
            <Link to={`${url}/products`}>Products</Link>
          </li>
        </ul>
      </nav>
      <Box mt="10">
        <Switch>
          <Route exact path={path} component={Home} />
          <Route path={`${path}/orders`} component={Orders} />
          <Route exact path={`${path}/products`} component={Products} />
          <Route
            path={`${path}/products/:product_id`}
            component={ProductDetail}
          />
        </Switch>
      </Box>
    </div>
  );
};

export default Admin;
