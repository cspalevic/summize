import React from "react";

export type ButtonProps = {
  text: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ text, ...rest }: ButtonProps) => (
  <button
    {...rest}
    className="text-white px-8 py-1 rounded-lg bg-gradient-to-r from-[var(--color-primary-teal)] to-[var(--color-primary-blue)]"
  >
    {text}
  </button>
);
