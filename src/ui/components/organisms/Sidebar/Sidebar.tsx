"use cleint";

import { SidebarBorder, SidebarWrapper } from "@components/atoms";
// import { SearchPages, SidebarNavigation, CategoriesFill } from "@components/molecules";

export const Sidebar = () => {
    return (
        <SidebarWrapper>
            <SidebarBorder />
            {/* <SearchPages />
            <SidebarNavigation />
            <CategoriesFill /> */}
        </SidebarWrapper>
    );
};