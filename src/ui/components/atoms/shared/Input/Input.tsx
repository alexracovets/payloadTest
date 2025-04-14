"use client";

import { cn } from "@utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  ...props
}: InputProps) => {
  return (
    <label
      className={cn(
        "relative block w-full",
        "before:content-[''] before:absolute before:left-[1.6rem] before:top-[1.2rem]",
        "before:bg-[url(/svg/search.svg)] before:bg-cover before:w-[3.2rem] before:h-[3.2rem]"
      )}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          "block w-full bg-gray text-destructive border-border",
          "text-[2.5rem] font-[500] font-roboto_condensed px-[1.6rem] pl-[6.4rem] py-[1.2rem] rounded-[.4rem] border-[.1rem]",
          className
        )}
        {...props}
      />
    </label>
  );
};
