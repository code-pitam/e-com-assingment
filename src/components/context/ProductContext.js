import { createContext, useContext } from "react";

export const ProductContext = createContext({
  ProductData: [],
});
export const ProductProvider = ProductContext.Provider;

// export const useProduct = useContext(ProductContext)
