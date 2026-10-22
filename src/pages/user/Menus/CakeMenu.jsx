import { cakes } from "../../../data/products";
import ProductMenu from '../../../componenets/ProductMenu';

const CakeMenu = () => {
  return <ProductMenu title="Cakes" product={cakes} />;
};

export default CakeMenu;
