"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProp {
  pathName: string;
  path: string;
  children: ReactNode;
}


export default function NavLink({ pathName, path, children }: NavLinkProp) {
  const navPath = usePathname();

  return (
    <Link
      href={{ pathname: path }}
      data-currentpage={path === navPath ? "true" : "false"}
      className='group relative flex cursor-pointer gap-3 transition hover:text-gray-100 data-[currentPage=true]:font-bold data-[currentPage=true]:text-gray-100'
    >
      <span className='absolute -left-5 h-full rounded-lg bg-gradient-vertical group-data-[currentPage=true]:w-1'></span>
      {children}
      {pathName}
    </Link>
  );
}
