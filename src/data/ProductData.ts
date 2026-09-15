import { StaticImageData } from 'next/image';

import product_panel from '@/assets/images/resource/service1.png';
import product_inverter from '@/assets/images/resource/service2.png';

interface ProductData {
  id: number;
  category: 'Panels' | 'Inverters';
  image: StaticImageData;
  title: string;
  link: string;
}

const product_data: ProductData[] = [
  {
    id: 1,
    category: 'Panels',
    image: product_panel,
    title: 'Panels',
    link: '/product-details/panels',
  },
  {
    id: 2,
    category: 'Inverters',
    image: product_inverter,
    title: 'Inverters',
    link: '/product-details/inverters',
  },
];

export default product_data;