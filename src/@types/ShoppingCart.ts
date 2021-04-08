interface ShoppingCartProps {
  id: number;
  name: string;
  // retailPrice: string;
  // retailPromotionPrice: string;
  // image: ProductImage;
  // offer?: boolean;
  // promotion?: boolean;
  url: string;
  quantity: number;
}

interface ProductImage {
  id: string;
  name?: string;
  url: string;
}

export type { ShoppingCartProps, ProductImage };
