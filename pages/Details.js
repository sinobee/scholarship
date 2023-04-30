import React from 'react'
import style from "../styles/Detail.module.css"

const Details = () => {
  return (
  <>
    <div className={style.wrap}>
<div className={style.note}>Based on this</div>
<article className={style.card}>
  <div className={style.thumb}></div>
  <div className={style.infos}>
    <h2 className={style.title}>Scholarship Name<span className={style.flag}></span></h2>
    <h3 className={style.date}>Last Date: 02-04-2023</h3>
    <h3 className={style.seats}>No. of Students Applied: 20</h3>
    <p className={style.txt}>
    "offer_by": "",<br></br>
        "publish_date": "",<br></br>
        "main_page_link": "",<br></br>
        "document_req": "",<br></br>
        "religion_eligibility": [],<br></br>
        "education_criteria": "",<br></br>
        "other_criteria": 
    </p>
    <h3 className={style.details}>event details</h3>
  </div>
</article>
    
    
<div className={style.note}>Based on this</div>
<article className={style.card}>
  <div className={style.thumb}></div>
  <div className={style.infos}>
    <h2 className={style.title}>Schoalrship 2<span className={style.flag}></span></h2>
    <h3 className={style.date}>november 2 - 4</h3>
    <h3 className={style.seats}>seats remaining: 2</h3>
    <p className={style.txt}>
      Join us for our Live Infinity Session in
      beautiful New York City. This is a 3 day
      intensive workshop where you'll learn
      how to become a better version of...
    </p>
    <h3 className={style.details}>event details</h3>
  </div>
</article>
    
    <div className={style.note}>Based on this</div>
<article className={style.card}>
  <div className={style.thumb}></div>
  <div className={style.infos}>
    <h2 className={style.title}>new york city<span className={style.flag}></span></h2>
    <h3 className={style.date}>november 2 - 4</h3>
    <h3 className={style.seats}>seats remaining: 2</h3>
    <p className={style.txt}>
      Join us for our Live Infinity Session in
      beautiful New York City. This is a 3 day
      intensive workshop where you'll learn
      how to become a better version of...
    </p>
    <h3 className={style.details}>event details</h3>
  </div>
</article>
  </div>

  
    </>
  )
}

export default Details


