import { breads } from "../../../data/products";
import ProductMenu from '../../../componenets/ProductMenu';

const BreadMenu = () => {
  return <ProductMenu title="Breads" product={breads} />;
};

export default BreadMenu;
