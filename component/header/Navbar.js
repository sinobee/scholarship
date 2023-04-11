// import { useState } from "react"; 

// import React from "react";
// import style from "../../styles/headerNav.module.css";
// import Link from "next/link";


// function Navbar(){
//     const [check,setCheck] = useState(false);
    
//      const  handleClick = ()=>{
//         setCheck(!check)
//     };
    
//     return (
//         <>
//             <nav className={style.NavbarItem}>
            

//             <div className={style.menuIcons} onClick={handleClick}> 
//             <i className={check ? "fas fa-times" : "fas fa-bars"} style={{color: "#fff"}}></i>
//             </div>
            
           
         
//            <li>
//             <Link href="/Registration">
//             {/* <i className="fa-solid fa-house-chimney" style="{{color: #f5f9ff;}}"></i> */}
//             Login/Sign Up
//             </Link>
//            </li>
          
          
           

          
//             </nav>
//         </>
//     )
    
//     }


// export default Navbar