import style from "../../styles/Filter.module.css"
import Select from 'react-select';
import data from "../cardSection/data.json";
import { useEffect, useState } from "react";
import options from "./state.json";
import ResultCard from "./ResultCard";
function Filter(){
    const [state ,setState] = useState(data);
    const [selectedState,setSelectedState]=useState([]);
    function handleState({label,value}){
        const filterState = state?.filter((scholarship) => scholarship.state === value);
        console.log(filterState);
        setSelectedState(filterState);
    }

    function handleAge(e){
    //     const [selMin,selMax]= e.target.textContent.split('-');
    //     console.log(selMin,selMax);
    //    const filterage = selectedState?.filter((item)=>{
    //         let agedata=null;
    //         const [min, max] = item.age.split('-');
    //         if(selMin>=min && max<=selMax){
    //           agedata=item
    //         }
    //         return agedata;
    //     })
        // console.log(filterage);

    }
    function handleGender(e){
        const genderFilter= e.target.textContent;

        const filteredGender = selectedState.filter(scholarship => {
            return scholarship.gender.includes(genderFilter.toLowerCase());
          });
         setSelectedState(filteredGender)
    }
    function handleCast(e){
        const selectedCast = e.target.textContent;
        const filterCast = selectedState.filter(scholarship => scholarship.cast.includes(selectedCast));
        setSelectedState(filterCast)
    }
    function handleIncome(e){
        const selectedIncome = e.target.textContent;
        const filteredIncome =selectedState.filter(item => {
            switch (selectedIncome) {
              case "10K-1L":
                return item.income >= 10000 && item.income <= 100000;
              case "1L-3L":
                return item.incomes >= 100000 && item.income <= 300000;
              case "4L-6L":
                return item.income >= 400000 && item.income <= 600000;
              case "7L-9L":
                return item.income >= 700000 && item.income <= 900000;
              case ">10L":
                return item.income > 1000000;
            }
          });

          setSelectedState(filteredIncome);
    }

    return(
        <div className={style.mainCon}>
            <div className={style.innerCon}>

                {/* Fiter  section start */}
                    <div className={style.fiterTitle}>
                        <div className="">
                            <p><b><i>State</i></b></p>
                            <div>
                              <Select
                              className={style.stateCon}
                               defaultValue={state}
                                onChange={handleState}
                                options={options}                      
                             />
                        </div>
                        </div>
                        <div><p><b><i>Age</i></b></p>
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
                        <div><p><b><i>Gender</i></b></p>
                          {/* Gender select radio input */}
                          <div className={`${style.gender} ${style.common}`}>

                             <input type={"radio"} name={"gender"}  id="male"  />
                             <label for="male" onClick={(e)=>handleGender(e)}>Male</label>

                             <input type={"radio"} name={"gender"}  id="female"  />
                             <label for="female" onClick={(e)=>handleGender(e)}>Female</label>

                            <input type={"radio"} name={"gender"}  id="tran"  />
                            <label for="tran" onClick={(e)=>handleGender(e)}>Other</label>
                           </div>
                        </div>
                        <div><p><b><i>Cast</i></b></p>
                        {/* Cast select radio input */}
                        <div className={`${style.cast} ${style.common}`}>

                            <input type={"radio"} name={"cast"}  id="general"  />
                            <label for="general" onClick={(e)=>handleCast(e)}>Gen</label>

                            <input type={"radio"} name={"cast"}  id="OBC"  />
                            <label for="OBC" onClick={(e)=>handleCast(e)}>OBC</label>

                            <input type={"radio"} name={"cast"}  id="EWS"  />
                            <label for="EWS" onClick={(e)=>handleCast(e)}>EWS</label>

                            <input type={"radio"} name={"cast"}  id="ST"  />
                            <label for="ST" onClick={(e)=>handleCast(e)}>ST</label>
                        </div>
                        </div>
                        <div><p><b><i>income</i></b></p>
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
                    {/* <ResultCard/> */}
                </div>
            </div>
        </div>
    )
}

export default Filter;