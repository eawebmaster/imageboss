import Header from "@/components/header";
import React from "react";

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <div className=" gradient-bg">
        <div className="max-w-screen-2xl mx-auto">
          <Header />
        </div>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
