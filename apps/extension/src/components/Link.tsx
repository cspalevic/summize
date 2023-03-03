import React from "react";

export type LinkProps = {
  href: string;
  text: string;
};

export const Link = ({ href, text }: LinkProps) => (
  <a
    className="text-slate-200 text-base transition duration-75 border-b-[1px] border-blue-400 hover:border-b-2"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {text}
  </a>
);
