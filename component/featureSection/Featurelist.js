import FilterItem from "./FilterItem"
import style from "../../styles/Card.module.css";

export default function Featurelist() {
  return (
    <>
    <h2>
      Section 1 Scholarshiop data
    </h2>
    <div  className={style.container}>
        <FilterItem/>
     </div>
     <h2>
      Section 2 Scholarshiop data
    </h2>
    <div className={style.container}>
    <FilterItem/>

    </div> 
    <h2>
      Section 3 Scholarshiop data
    </h2>
    <div className={style.container}>
    <FilterItem/>

    </div> 
    </>
  )
}