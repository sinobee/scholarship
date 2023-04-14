import React from 'react'
import style from "../../styles/footer.module.css";


function Footerlink() {
  return (
    <>
    <div>
    <footer class={style.footerdistributed}>
    
    <div class={style.footerleft}>
        <h3>Scholarship<span>_Villa</span></h3>
    
        <p class={style.footerlinks}>
            <a href="#">Home</a>
            |
            <a href="#">About</a>
            |
            <a href="#">Contact</a>
            |
            <a href="#">Blog</a>
        </p>
    
        <p class={style.footercompanyname}>Copyright © 2023 <strong>thebarabariproject</strong> All rights reserved</p>
    </div>
    
    <div class={style.footercenter}>
        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>Telangana</span>
                Hydrabad</p>
        </div>
    
        <div>
            <i class="fa fa-phone"></i>
            <p>+91 74**9**258</p>
        </div>
        <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:thebarabariproject@gmail.com">thebarabariproject@gmail.com</a></p>
        </div>
    </div>
    <div class={style.footerright}>
        <p class={style.footercompanyabout}>
            <span>About the Organization</span>
            <strong>The barabari project</strong> is a NGO where more than 22 candidates are IN TRAINING 
            Students Here trained by Mentor Of Top IT Companies
            and 6 people are placed in MNC companies
            from "4 Different STATES"
        </p>
        
        <div class={style.footericons}>
           <div class={style.icons1}> <a href="#"><i class="fa-brands fa-facebook"></i></a></div>
           <div class={style.icons2}> <a href="https://www.instagram.com/thebarabariproject/"><i class="fa-brands fa-instagram" ></i></a></div>
           <div class={style.icons3}> <a href="https://www.linkedin.com/company/the-barabari-project/"><i class="fa-brands fa-linkedin"></i></a></div>
           <div class={style.icons5}> <a href="#"><i class="fa-brands fa-youtube"></i></a></div>
           <div class={style.icons4}> <a href="https://twitter.com/BarabariProject"><i class="fa-brands fa-twitter"></i></a></div>
        </div>
        
    </div>
    </footer>
    </div>
    </>
  )
}

export default Footerlink
