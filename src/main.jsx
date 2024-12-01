import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
    {/* // </StrictMode> */}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
