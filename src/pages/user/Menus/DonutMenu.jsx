import { donuts } from "../../../data/products";
import ProductMenu from '../../../componenets/ProductMenu';

const DonutMenu = () => {
  return <ProductMenu title="Donuts" product={donuts} />;
};

export default DonutMenu;
