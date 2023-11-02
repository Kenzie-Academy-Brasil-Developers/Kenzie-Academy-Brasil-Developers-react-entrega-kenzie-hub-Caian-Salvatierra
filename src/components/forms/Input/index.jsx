import { forwardRef } from "react";

export const Input = forwardRef(({error, label, id,
  placeholder, ...rest}, ref) =>{
    return(
        <div>
          <label htmlFor={id}>{label}</label>  
          <input 
          placeholder={placeholder} 
          ref={ref} 
          {...rest} />
          {error ? <p>{error.message}</p> :null}
        </div>
    );
});