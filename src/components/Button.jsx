// import { className } from "../utils/utils";
import { cva } from "class-variance-authority";

const buttonStyle = cva(
   "shadow-xl hover:shadow-none font-semibold rounded-full transition-all duration-300",
   {
      variants: {
         color: {
            primary: "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-300",
            danger: "bg-red-500 hover:bg-red-600 text-white shadow-red-300",
         },
         size: {
            small: "py-1 px-2",
            medium: "py-2 px-4",
         },
      },
      defaultVariants: {
         color: "primary",
         size: "medium",
      },
   }
);

function Button({ text, color, size }) {
   return <button className={buttonStyle({ color, size })}>{text}</button>;
}

export default Button;
