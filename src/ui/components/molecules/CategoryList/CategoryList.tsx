"use client";

interface CategoryListProps {
  list: {
    name: string;
    link: string;
    pages: {
      name: string;
      link: string;
    };
  };
}
export const CategoryList = ({ list }: CategoryListProps) => {
  return <div></div>;
};
