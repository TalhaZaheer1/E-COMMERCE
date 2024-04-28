import { forwardRef,useState } from "react";

const Input = forwardRef(function input({ type = "text", className = "", label, watch,watchName, ...props }, ref) {
  const watchInput = watch(watchName,"");
  return (
    <>
      <label data-label={label + "*"} className={`transition-all
      inputBottom inputLabel relative ${watchInput.length > 0 && "inputBottomActive"} 
       duration-500 ${watchInput.length > 0 ? "inputLabelUp" : "inputLabelDown"}`} htmlFor={label}>
        <input
          id={label}
          placeholder={label}
          type={type}
          className={`block outline-none bg-gray-50 border-b-[1px] w-full py-1 placeholder:opacity-60 text-lg border-slate-400 ${className}`}
          ref={ref}
          {...props}
          />
          </label>
    </>
  );
})



export default Input;
