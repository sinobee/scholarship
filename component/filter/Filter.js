import style from "../../styles/Filter.module.css"
import Select from 'react-select';
import { useState } from "react";
import options from "./state.json";
function Filter(){
    const [state ,setState] = useState("States..");

    
    function handleState({label,value}){
        console.log(value   )
        setState(value)
    }

    function handleAge(e){
        console.log(e.target.textContent);
    }
    function handleGender(e){
        console.log(e.target.textContent);
    }
    function handleCast(e){
        console.log(e.target.textContent);
    }
    function handleIncome(e){
        console.log(e.target.textContent);
    }

    return(
        <div className={style.mainCon}>
            <div className={style.innerCon}>

                {/* Fiter  section start */}
                    <div className={style.fiterTitle}>
                        <div className="">
                            <p>State</p>
                            <div>
                              <Select
                              className={style.stateCon}
                               defaultValue={state}
                                onChange={handleState}
                                options={options}                      
                             />
                        </div>
                        </div>
                        <div><p>Age</p>
                        <div className={`${style.ageCon} ${style.common}`}>

                           <input type={"radio"} name={"age"} id="11-20"  />
                            <label for="11-20" onClick={(e)=>handleAge(e)}>11-20</label>

                           <input type={"radio"} name={"age"}  id="21-30" />
                           <label for="21-30" onClick={(e)=>handleAge(e)}>21-30</label>

                           <input type={"radio"} name={"age"}  id="31-35" />
                           <label for="31-35" onClick={(e)=>handleAge(e)}>31-35</label>

                           <input type={"radio"} name={"age"}    id=">35"/>
                           <label for=">35" onClick={(e)=>handleAge(e)}>{">"}35</label>
                           </div>
                        </div>
                        <div><p>Gender</p>
                          {/* Gender select radio input */}
                          <div className={`${style.gender} ${style.common}`}>

                             <input type={"radio"} name={"gender"}  id="male"  />
                             <label for="male" onClick={(e)=>handleGender(e)}>Male</label>

                             <input type={"radio"} name={"gender"}  id="female"  />
                             <label for="female" onClick={(e)=>handleGender(e)}>Female</label>

                            <input type={"radio"} name={"gender"}  id="tran"  />
                            <label for="tran" onClick={(e)=>handleGender(e)}>Tran</label>
                           </div>
                        </div>
                        <div><p>Cast</p>
                        {/* Cast select radio input */}
                        <div className={`${style.cast} ${style.common}`}>

                            <input type={"radio"} name={"cast"}  id="general"  />
                            <label for="general" onClick={(e)=>handleCast(e)}>General</label>

                            <input type={"radio"} name={"cast"}  id="OBC"  />
                            <label for="OBC" onClick={(e)=>handleCast(e)}>OBC</label>

                            <input type={"radio"} name={"cast"}  id="EWS"  />
                            <label for="EWS" onClick={(e)=>handleCast(e)}>EWS</label>

                            <input type={"radio"} name={"cast"}  id="ST"  />
                            <label for="ST" onClick={(e)=>handleCast(e)}>ST</label>
                        </div>
                        </div>
                        <div><p>Income</p>
                        {/* Income select radio input */}
                        <div className={`${style.income} ${style.common}`}>
                            <input type={"radio"} name={"income"}  id="10K-1L"  />
                            <label for="10K-1L" onClick={(e)=>handleIncome(e)}>10K-1L</label>

                            <input type={"radio"} name={"income"}  id="1L-3L"  />
                            <label for="1L-3L" onClick={(e)=>handleIncome(e)}>1L-3L</label>

                            <input type={"radio"} name={"income"}  id="4L-6L"  />
                            <label for="4L-6L" onClick={(e)=>handleIncome(e)}>4L-6L</label>

                            <input type={"radio"} name={"income"}  id="7L-9L"  />
                            <label for="7L-9L" onClick={(e)=>handleIncome(e)}>7L-9L</label>

                            <input type={"radio"} name={"income"}  id=">10L"  />
                            <label for=">10L" onClick={(e)=>handleIncome(e)}>{">"}10L</label>
                        </div>
                        </div>
                    </div>
                {/* Fiter title section end*/}


                {/* Filter result section start */}
                <div className={style.fiterResult}>

                </div>
            </div>
        </div>
    )
}

export default Filter;