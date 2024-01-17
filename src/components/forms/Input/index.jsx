import { forwardRef } from "react";
import style from "./style.module.scss";

export const Input = forwardRef(
  ({ error, label, id, placeholder, ...rest }, ref) => {
    return (
      <div className={style.containerInput}>
        <label htmlFor={id}>{label}</label>
        <input 
        className={style.input}
        placeholder={placeholder} 
        ref={ref} 
        {...rest}  />
        {error ? <p>{error.message}</p> : null}
      </div>
    );
  }
);
