import { ProductButtonsProps } from '../components/ProductButtons';
import { ProductCardProps } from '../components/ProductCard';
import { ProductImageProps } from '../components/ProductImage';
import { ProductTitleProps } from '../components/ProductTitle';

export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: ( value: number ) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Buttons: (Props: ProductButtonsProps ) => JSX.Element
    Image: (Props: ProductImageProps ) => JSX.Element,
    Title: (Props: ProductTitleProps ) => JSX.Element,
}

export interface onChangeArgs {
    product: Product,
    count: number,
}

export interface ProductInCart extends Product {
    count: number;
}