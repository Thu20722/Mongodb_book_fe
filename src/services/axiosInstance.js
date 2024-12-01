import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Đường dẫn API
  withCredentials: true, // Đảm bảo cookie được gửi cùng yêu cầu
});

// Interceptor cho request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor cho response
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Nếu lỗi là do token hết hạn (401) và chưa thử refresh
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // Đánh dấu yêu cầu này đã thử refresh

      try {
        // Gửi yêu cầu làm mới token
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/user/refresh-token`,
          {}, // Không cần body
          {
            withCredentials: true, // Gửi cookie chứa refresh token
          }
        );

        const newAccessToken = res.data.access_token;

        // Lưu lại access token mới vào localStorage
        localStorage.setItem("access_token", newAccessToken);

        // Cập nhật header Authorization cho yêu cầu ban đầu
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        // Gửi lại yêu cầu ban đầu với access token mới
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);
        // Chuyển hướng người dùng đến trang đăng nhập nếu refresh thất bại
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
