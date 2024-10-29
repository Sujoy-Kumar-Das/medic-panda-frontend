import React from "react";

interface SkeletonsProps {
  length?: number;
  Component: React.ComponentType<any>;
  componentProps?: object;
}

export default function Skeletons({
  length = 3,
  Component,
  componentProps = {},
}: SkeletonsProps) {
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <Component key={index} {...componentProps} />
      ))}
    </>
  );
}
