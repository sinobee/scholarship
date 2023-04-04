import style from "../../styles/Card.module.css";
import data from "./data.json"
function FilterItem(){
   function handleStr(name){
    if(name.length> 56){
        name = name.slice(0,56);
        name = name + "...";
        return name
     }
     return name;
   }
   function handleCast(cast){
      let str = "";
      let pre=""
     for(let num=0;num<cast.length;num++){
        if(num==0){
            str=cast[num];
        }else{
            str=pre+"/"+cast[num];
        }
        pre=str;
     }
     return str;
   }
   function handleGender(gen){
        let str = "";
        let pre=""
       for(let num=0;num<gen.length;num++){
          if(num==0){
              str=gen[num];
          }else{
              str=pre+"/"+gen[num];
          }
          pre=str;
       }
       return str;
     }
    return(
       
       <>
       
       {
          data.map((value)=>{
              return (
                <div className={style.box}>
                    <div className={style.banner}>
                        <div className={style.shadow}></div>
                        <img src={value.image} width={300} height={152} className={style.imageHeading} />
                       <h4 className={style.heading}>{handleStr(value.name)}</h4>
                    </div>
                 <div className={style.content}>
                     <div>
                         <h3>Age</h3>
                         <p>{value.age}</p>
                     </div>
                     <div className={style.cast}>
                         <h3>Cast</h3>
                         <p>{handleCast(value.cast)}</p>
                     </div>
                     <div >
                         <h3>State</h3>
                         <p>{value.state}</p>
                     </div>
                     <div>
                         <h3>Income</h3>
                         <p>{value.income}</p>
                     </div>
                     <div  >
                         <h3>Gender</h3>
                         <p >{handleGender(value.gender)}</p>
                     </div>
                     <div  >
                         <h3>Last Date</h3>
                         <p >{value.last_date}</p>
                     </div>
                 </div>
                <button>Click Here</button>
            </div>
              )
          })
       }
    </>
    )
}

export default FilterItem;