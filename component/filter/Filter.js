import style from "../../styles/Filter.module.css"
import Select from 'react-select';
import { useState } from "react";
import options from "./state.json";
function Filter(){
    const [state ,setState] = useState("States..");
    const [age,setAge] = useState(false);
    const [cast,setcast] = useState(false);
    const [income,setIncome] = useState(false);
    const [gender,setGender] = useState(false);

    function handleState({label,value}){
        console.log(value   )
        setState(value)
    }
    return(
        <div className={style.mainCon}>
            <div className={style.innerCon}>
                <div className={style.filterCon}>
                    <div className={style.fiterTitle}>
                        <div><p>State :</p></div>
                        <div><p>Age :</p></div>
                        <div><p>Gender :</p></div>
                        <div><p>Cast :</p></div>
                        <div><p>Income :</p></div>
                    </div>
                    <div className={style.fiterItemCon}>
                        <div className={style.stateCon}>
                        <Select
                         defaultValue={state}
                          onChange={handleState}
                          options={options}
                          
                        />
                        </div>
                        <div className={`${style.ageCon} ${style.common}`}>
                            <button onClick={()=>{setAge(true)}}>11-20</button>
                            <button onClick={()=>{setAge(true)}}>21-30</button>
                            <button onClick={()=>{setAge(true)}}>31-35</button>
                            <button onClick={()=>{setAge(true)}}>Above 35</button>
                        </div>
                        <div className={`${style.gender} ${style.common}`}>
                            <button>Male</button>
                            <button>Female</button>
                            <button style={{width: 167}}>tran</button>
                        </div>
                        <div className={`${style.cast} ${style.common}`}>
                            <button>General</button>
                            <button>OBC</button>
                            <button>EWS</button>
                            <button>ST</button>
                        </div>
                        <div className={`${style.income} ${style.common}`}>
                        <button>10K-1L</button>
                            <button>1L-3L</button>
                            <button>4L-6L</button>
                            <button>7L-9L</button>
                            <button>Above 10L </button>
                        </div>
                    </div>
                </div>
                <div className={style.fiterResult}></div>
            </div>
        </div>
    )
}

export default Filter;