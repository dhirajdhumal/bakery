import { brownies } from "../../../data/products";
import ProductMenu from '../../../componenets/ProductMenu';

const BrownieMenu = () => {
  return <ProductMenu title="Brownies" product={brownies} />;
};

export default BrownieMenu;
