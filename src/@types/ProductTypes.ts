interface ProductProps {
  id: string | number;
  name: string;
  shortName?: string;
  integrator_id?: string;
  productDescription?: string;
  barCode?: string;
  unitMeasure?: string;
  stock?: string;
  purchaseLimit?: number;
  retailPrice: string;
  retailPromotionPrice: string;
  wholesalePrice?: string;
  wholesalePromotionPrice?: string;
  minimumWholesale?: number;
  promotionOrderLimit?: number;
  excluido?: boolean;
  image: ProductImage;
  offer?: boolean;
  promotion?: boolean;
}

interface ProductImage {
  id: string;
  name?: string;
  url: string;
}

interface ResponseProductProps {
  errors: Record<string, string>[];
  message: string;
  data: ProductProps;
}

interface ResponseProductListProps {
  page?: number;
  pageSize?: number;
  totalCount?: number;
  data: ProductProps[];
}

interface IProductInterface {
  data: ProductProps;
}

interface SendProductByCategoryProps {
  id: string;
}

interface SendProductsByParams {
  name?: string;
  barCode?: string;
  hasImage?: string;
  hasCategory?: string;
  category_id?: string;
  section_id?: string;
  excluido?: string;
}

export type {
  IProductInterface,
  ProductProps,
  ResponseProductProps,
  SendProductByCategoryProps,
  SendProductsByParams,
  ResponseProductListProps,
};
