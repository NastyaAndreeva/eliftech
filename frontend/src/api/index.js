import { NotificationManager } from "react-notifications";
import { apiInstance } from "./apiInstance";

export const getProducts = async (setProducts) => {
  try {
    const { data } = await apiInstance.get("/");
    setProducts(data);
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getOrders = async (setOrders) => {
  try {
    const { data } = await apiInstance.get("/orders");
    setOrders(data);
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getOrderById = async (id, setOrder) => {
  try {
    const { data } = await apiInstance.get(`/orders/${id}`);
    setOrder(data);
  } catch (error) {
    console.log("error: ", error);
  }
};

export const addOrder = async (body) => {
  try {
    await apiInstance.post("/orders", body);
    NotificationManager.success(
      "The order was successfully sent",
      "Success :)"
    );
  } catch (error) {
    console.log("error: ", error);
    NotificationManager.error("There is an error, try again :(", "Error");
  }
};
