import FilterItem from "./FilterItem"
import style from "../../styles/Card.module.css";
import { useRef } from "react";

export default function Featurelist() {
  const right=">";
  const left ="<";
  const refSectionOne = useRef()
  const refSectionTwo = useRef()
  const refSectionThree= useRef()
  function leftScroll(ref){
    console.log(refSectionOne)
    ref.scrollBy(-350,0);
  }

  function rightScroll(ref){
    console.log(ref)
    ref.scrollBy(350,0);
  }
  return (
    <>
    <h2>
      Section 1 Scholarshiop data
    </h2>
    <div className={style.wrapper} >
      <button className={style.leftButton} onClick={()=>{leftScroll(refSectionOne.current)}}>{left}</button>
        <div className={style.cur}  ref={refSectionOne}>
        <FilterItem/>
        </div>
        <button style={{marginLeft:5}} className={style.rightButton} onClick={()=>{rightScroll(refSectionOne.current)}}>{right}</button>
    </div>
      <h2>
      Section 2 Scholarshiop data
    </h2>
    <div className={style.wrapper} >
      <button className={style.leftButton} onClick={()=>{leftScroll(refSectionTwo.current)}}>{left}</button>
        <div className={style.cur}  ref={refSectionTwo}>
        <FilterItem/>
        </div>
        <button style={{marginLeft:5}} className={style.rightButton} onClick={()=>{rightScroll(refSectionTwo.current)}}>{right}</button>
    </div>
    <h2>
      Section 3 Scholarshiop data
    </h2>
    <div className={style.wrapper} >
      <button className={style.leftButton} onClick={()=>{leftScroll(refSectionThree.current)}}>{left}</button>
        <div className={style.cur}  ref={refSectionThree}>
        <FilterItem/>
        </div>
        <button style={{marginLeft:5}} className={style.rightButton} onClick={()=>{rightScroll(refSectionThree.current)}}>{right}</button>
    </div>
    </>
  )
}





