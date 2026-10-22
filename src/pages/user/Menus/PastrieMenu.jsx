import { pastries } from '../../../data/products';
import ProductMenu from '../../../componenets/ProductMenu';

const PastrieMenu = () => {
  return <ProductMenu title="Pastries" product={pastries} />;
};

export default PastrieMenu;
