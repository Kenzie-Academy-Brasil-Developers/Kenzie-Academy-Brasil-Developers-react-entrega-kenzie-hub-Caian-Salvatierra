import { forwardRef } from "react";
import style from "./style.module.scss";

export const SelectForm = forwardRef(
  ({ children, id, label, error, placeholder, ...rest }, ref) => {
    return (
      <div className={style.containerSelect}>
        <label htmlFor={id}> {label}</label>
        <select placeholder={placeholder} ref={ref} {...rest}>
          {children}
        </select>
        {error ? <p>{error.message}</p> : null}
      </div>
    );
  }
);
