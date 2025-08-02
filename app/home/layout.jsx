import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex items-center gap-9">
        {["Home", "About Us", "Blogs", "Assessment"].map((text) => (
          <a
            key={text}
            href="#"
            className="text-sm font-medium text-[#111518] leading-normal"
          >
            {text}
          </a>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
