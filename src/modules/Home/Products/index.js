import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { basketballProducts } from "./data";
function IndividualProduct({ product }) {
    return (_jsxs("a", { href: product.href, className: "group", children: [_jsx("div", { className: "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7", children: _jsx("img", { src: product.imageSrc, alt: product.imageAlt, className: "h-full w-full object-cover object-center group-hover:opacity-75" }) }), _jsx("h3", { className: "mt-4 text-sm", children: product.name }), _jsx("p", { className: "mt-1 text-lg font-medium", children: product.price })] }, product.id));
}
const Products = () => {
    return (_jsxs("div", { className: "mx-auto max-w-2xl px-4 py-16 sm:px6 sm:sm-24 lg:max-w-7xl lg:px-9", children: [_jsx("h2", { className: "sr-only", children: "Products" }), _jsx("div", { className: "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6", children: basketballProducts.map((product) => (_jsx(IndividualProduct, { product: product }))) })] }));
};
export default Products;
