import React from "react";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout(props: PublicLayoutProps) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: "1", backgroundColor: "red" }}></div>
      <div style={{ flex: "1", alignContent: "center" }}>{props.children}</div>
    </div>
  );
}
