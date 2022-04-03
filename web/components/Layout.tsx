import Head from "next/head";
import { ReactNode } from "react";
import Link from "next/link";

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
      <nav className="flex justify-end">
        <Link href="/login">
          <a className="text-neutral-500 mr-8 mt-2">Login</a>
        </Link>
        <Link href="/register">
          <a className="text-neutral-500 mr-12 mt-2">Register</a>
        </Link>
      </nav>
      {children}
    </>
  );
}

export default Layout;
