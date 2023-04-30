import React from 'react'
import Image from 'next/image';
import style from "../styles/About.module.css";
import Footerlink from '@/component/header/Footerlink';


const About = () => {
  return (
    <>
      <div ><h1 class={style.read}><center> About Us</center></h1>
        <br></br>
        <div class={style.img}>

          <Image src={"/No_4image.png"} width={450} height={250} />
          <Image src={"/No_2image.png"} width={450} height={250} padding={10} />
          <Image src={"/No_1image.png"} width={450} height={250} padding={10} />
        </div>
        
      </div>
      <section class={style.aboutsection}>
        <div class={style.container}>
          <div class={style.row}>
            <div class={style.contentcolumn}>
              <div class={style.innercolumn}>
                <div class={style.sectitle}>
                  <span class={style.title}>The Barabari Project Org.</span>
                  <h2>It is a non-profit Org. We are working to provide quality training and mentorship to candidates from low-income categories, rural backgrounds, underprivileged caste sections, and underrepresented gender backgrounds. We provide training and mentorship and help candidates get jobs in Service or Product based Tech companies.</h2>
                </div>
                <div class={style.btnbox}>
                  <a href="#" class={style.btnstyleone}>Get in Touch</a>
                </div>
              </div>
            </div>

            <div class={style.imagecolumn}>
              <div class={style.innercolumn}>
                <div class={style.authordesc}>
                  <h2>The Barabari Project Organization</h2>
                  <span>Beyond IT! A source of innovation and excellence </span>
                </div>
                <figure class={style.image1}><a href="#" class={style.lightboximage} data-fancybox="images"><img title="The Barabari Project" src="/No_3image.png" alt=""/></a></figure>

              </div>
            </div>
          </div>
          <br></br>
         <br></br><br/>
         <br></br><br/>
         <br></br><br/>
          <div class={style.sectitle}>
            <span class={style.title}></span>
            <h2>We want to Train and Provide Universal Access To Quality Jobs</h2>
          </div>
          <div class={style.text}>
          We want to become a gateway for candidates who lack access to these opportunities, to up-skill themselves, get well-paying jobs, and become self-sufficient to take ownership of their careers.

As a mentor, you get to connect, guide and train one or more underprivileged candidates in their journey to finding high-quality jobs.
As a candidate, you would be mentored by industry experts toward an eventual goal of getting jobs at top companies

Candidate Mentorship Program
<br></br>
1.Get a personalized mentor from an industry professional working in the job sector you are preparing in<br></br>
2.Daily/weekly doubt-clearing sessions and monthly level interview preparation sessions<br></br>
3.Resume and Linkedin profile preparation workshops<br></br>
4.Referrals through extended mentorship network and help in applying through Linkedin and Naukri Portals<br></br>

This entire program is free, all we need from you is dedication :) 

          </div>
         
        </div>
      </section>
      


      <Footerlink />
    </>

  )
}

export default About


