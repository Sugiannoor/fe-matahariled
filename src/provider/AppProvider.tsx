import { BrowserRouter as Router } from "react-router-dom";

import React from "react";
import { ErrorProvider } from "./ErrorProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyleProvider } from "./StyleProvider";
type props = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<props> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <ErrorProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <StyleProvider>
            {children}
          </StyleProvider>
        </Router>
      </QueryClientProvider>
    </ErrorProvider>
  );
};
