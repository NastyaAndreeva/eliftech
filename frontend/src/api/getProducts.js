import { apiInstance } from "./apiInstance";

export const getProducts = async (setProducts) => {
  try {
    const { data } = await apiInstance.get();
    setProducts(data);
  } catch (error) {
    console.log("error: ", error);
  }
};
