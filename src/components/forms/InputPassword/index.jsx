import { forwardRef, useState } from "react";
import { FaRegEyeSlash,FaRegEye }  from "react-icons/fa";
import style from "./style.module.scss";



export const InputPassword = forwardRef(({label,error, ...rest}, ref) => {
    const [isHidden, setIsHidden] = useState(false);
    

   return (
    <div  className={style.container}>
        <label > {label}</label>
        <div className={style.inputGrid}>
            <input 
            className="headline" 
            type={isHidden ? "text" : "password" } 
            ref={ref} 
            {...rest}/>
            
            <button type="button" onClick={() => setIsHidden(!isHidden)}> 
            {isHidden ? <FaRegEye size={18}/> : <FaRegEyeSlash size={18} />}
            </button>
        </div>
        {error ? <p>{error.message}</p> : null}
    </div>
   )
});