"use client";

import { Main, Sidebar, Content, Header, Footer } from "@components/organisms";
import { ChildrenType } from "@types";

export const SectionTemplate = ({ children }: ChildrenType) => {
  return (
    <>
      <Header />
      {/* <Main>
        <Sidebar />
        <Content>{children}</Content>
      </Main> */}
      {/* <Footer /> */}
    </>
  );
};
