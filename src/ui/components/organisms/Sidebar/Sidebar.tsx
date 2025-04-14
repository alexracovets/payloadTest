"use cleint";

import { AtomImage, SidebarWrapper } from "@components/atoms";
import { SearchPages } from "@components/molecules";
// import { SearchPages, SidebarNavigation, CategoriesFill } from "@components/molecules";

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div className="absolute right-0 top-0 h-full w-[.8rem]">
        <AtomImage
          src="/pda/vertical_center.jpg"
          alt="border"
          sizes=".8rem"
          fill
          className="h-full w-[.8rem]"
        />
      </div>
      <div className="absolute left-0 top-0 h-full w-[.9rem]">
        <AtomImage
          src="/pda/left.jpg"
          alt="border"
          sizes=".9rem"
          fill
          className="h-full w-[.9rem]"
        />
      </div>
      <SearchPages />
      {/* 
            <SidebarNavigation />
            <CategoriesFill /> */}
    </SidebarWrapper>
  );
};
