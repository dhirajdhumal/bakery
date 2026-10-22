import { cookies } from "../../../data/products";
import ProductMenu from '../../../componenets/ProductMenu';

const CookiesMenu = () => {
  return <ProductMenu title="Cookies" product={cookies} />;
};

export default CookiesMenu;
