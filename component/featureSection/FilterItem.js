import style from "../../styles/Card.module.css";
import data from "./data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard , faUsersViewfinder,
      faHospitalUser,faMapLocationDot,
      faHandHoldingDollar,faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

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
                         {/* <h3>Age</h3> */}
                         <FontAwesomeIcon icon={faHospitalUser} size="xl" style={{color: "#010409",}} />
                         <p>{value.age}</p>
                     </div>
                     <div className={style.cast}>
                         {/* <h3>Cast</h3> */}
                         <FontAwesomeIcon icon={faIdCard} size="xl" style={{color: "#080808",}} />
                         <p>{handleCast(value.cast)}</p>
                     </div>
                     <div >
                         {/* <h3>State</h3> */}
                         <FontAwesomeIcon icon={faMapLocationDot} size="xl" style={{"--fa-primary-color": "#0c0d0d", "--fa-secondary-color": "#051024",}} />
                         <p>{value.state}</p>
                     </div>
                     <div>
                         {/* <h3>Income</h3> */}
                         <FontAwesomeIcon icon={faHandHoldingDollar} size="xl" style={{color: "#010204",}} />
                         <p>{value.income}</p>
                     </div>
                     <div  >
                         {/* <h3>Gender</h3> */}
                         <FontAwesomeIcon icon={faUsersViewfinder} size="xl" style={{color: "#0a0a0a",}} />
                         <p >{handleGender(value.gender)}</p>
                     </div>
                     <div  >
                         {/* <h3>Last Date</h3> */}
                         <FontAwesomeIcon icon={faCalendarWeek} size="xl" style={{color: "#020203",}} />
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