import React from "react";

interface CustomContainerProps {
  children: React.ReactNode[];
  title: string;
}

export const CustomContainer = (props: CustomContainerProps) => {
  return (
    <div>
      <p style={{ fontSize: "25px" }}>{props.title}</p>
      {...props.children}
    </div>
  );
};
