import { ComponentProps } from "react";

export default function Loader({ color }: ComponentProps<any>): JSX.Element {
  return (
    <div className="flex justify-center items-center my-10">
      <div
        className={`animate-spin rounded-full h-8 w-8 border-b-2 ${color}`}
      ></div>
    </div>
  );
}
