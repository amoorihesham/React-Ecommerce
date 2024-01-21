export const BaseUrl = "https://ecommerce.routemisr.com/api/v1";
export const headers = {
    headers: {
      token: localStorage.getItem("userToken"),
    },
  };