import { ReactNode } from "react";

interface BienvenueAventurierProps {
  title: string;
  children: ReactNode;
}

const BienvenueAventurier = ({ title, children }: BienvenueAventurierProps) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

export default BienvenueAventurier;
