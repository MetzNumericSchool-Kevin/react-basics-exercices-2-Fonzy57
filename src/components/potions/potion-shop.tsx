import { ReactNode } from "react";

interface PotionShopProps {
  title: string;
  children: ReactNode;
}

const PotionShop = ({ title, children }) => {
  return (
    <>
      <h2 className="mb-5">{title}</h2>
      {children}
    </>
  );
};

export default PotionShop;
