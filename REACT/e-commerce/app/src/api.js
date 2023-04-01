import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    const { origin } = new URL(config.url);

    const allowedOrigins = [process.env.REACT_APP_BASE_ENDPOINT];
    const token = localStorage.getItem("access-token");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

//FETCHS ALL PRODUCTS WITH PAGINATION
export const fetchProductList = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/product?page=${pageParam}`
  );

  return data;
};

//FETCH PRODUCT DETAILS BY ID
export const fetchProduct = async (product_id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/product/${product_id}`
  );

  return data;
};

//REGISTER USER
export const fetchRegister = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`,
    input
  );

  return data;
};
//LOGIN USER
export const fetchLogin = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/login`,
    input
  );

  return data;
};

//REFRESH LOGIN
export const fetchMe = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/me`
  );

  return data;
};

//LOGOUT
export const fetchLogout = async () => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/logout`,
    {
      refresh_token: localStorage.getItem("refresh-token"),
    }
  );

  return data;
};

//POSTS ORDERS
export const postOrder = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/order`,
    input
  );

  return data;
};

// FETCHS ORDERS
export const fetchOrders = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/order`
  );

  return data;
};

// DELETE ITEM
export const deleteProduct = async (product_id) => {
  const { data } = await axios.delete(
    `${process.env.REACT_APP_BASE_ENDPOINT}/product/${product_id}`
  );

  return data;
};

//UPDATE PRODUCT
export const updateProduct = async (input, product_id) => {
  const { data } = await axios.put(
    `${process.env.REACT_APP_BASE_ENDPOINT}/product/${product_id}`,
    input
  );

  return data;
};
