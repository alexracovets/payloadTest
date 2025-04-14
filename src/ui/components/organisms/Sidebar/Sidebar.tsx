"use cleint";

import { SidebarWrapper } from "@components/atoms";
import {
  SearchPages,
  CategoriesNavigation,
  SidebarBorder,
} from "@components/molecules";
// import {CategoriesFill } from "@components/molecules";

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarBorder />
      <SearchPages />
      <CategoriesNavigation />
      {/* <CategoriesFill /> */}
    </SidebarWrapper>
  );
};
