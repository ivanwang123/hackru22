import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  title?: string;
  children?: ReactNode;
};

function Layout({ title = "WELLBEAN", children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}

export default Layout;
