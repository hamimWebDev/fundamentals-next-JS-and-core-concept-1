import Footer from "@/Components/Shared/Footer";
import React from "react";

const dashboardLayout = ({ children }: any) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default dashboardLayout;
