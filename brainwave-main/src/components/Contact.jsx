import React from 'react'
import Button from "./Button";
import Heading from "./Heading";

import { check } from "../assets";

import  { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";
// import { slideIn } from "../utils/motion";

// import { styles } from "../styles";

import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_8xix5zq',
        'template_foc2fk8',
        {
          from_name: form.name,
          to_name: "Nick",
          from_email: form.email,
          to_email: "ny402353@gmail.com",
          message: form.message,
        },
        'B9mZ_xcJPNL-PaCWD'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="overflow-hidden content-center" id="footer">

    <div> <Heading title="Contact Us"/> </div>
    <div class="flex flex-row">
  
      <div
        // variants={slideIn("left", "tween", 0.2, 1)} p-8 removed
        className=' bg-white-100  w-1/2 p-8 pl-25 rounded-2xl border-separate'
      >
        <div className='content-center p-3 container relative z-2'> 
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=' flex flex-col gap-8 self-center ml-2'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline outline-2 outline-offset-2 border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline outline-2 outline-offset-2  border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline outline-2 outline-offset-2  border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline outline-2 outline-offset-2  w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        
        </form>
        </div>
      </div>
      <div className='w-1/2 py-12 px-4 xl:px-8'>
      
      <h6 className="h3 mb-4">What’s on your mind?</h6>
       
      <ul className="body-2">
                
      <li
            
        className="flex items-start py-6 border-t border-n-6"
      >
          <img src={check} width={24} height={24} alt="Check" />
           <p className="body-2 ml-4">Request for Service</p>
      </li>


      <li
            
            className="flex items-start py-6 border-t border-n-6"
          >
              <img src={check} width={24} height={24} alt="Check" />
               <p className="body-2 ml-4">Technology and Market Analyst Queries</p>
          </li>


          <li
            
            className="flex items-start py-6 border-t border-n-6"
          >
              <img src={check} width={24} height={24} alt="Check" />
               <p className="body-2 ml-4">Website Feedback</p>
          </li>

          <li
            
            className="flex items-start py-6 border-t border-n-6"
          >
              <img src={check} width={24} height={24} alt="Check" />
               <p className="body-2 ml-4">Services Around The World</p>
          </li>

          <li
            
            className="flex items-start py-6 border-t border-n-6"
          >
              <img src={check} width={24} height={24} alt="Check" />
               <p className="body-2 ml-4">Same day resolution to your Queries</p>
          </li>

          <li
            
            className="flex items-start py-6 border-t border-n-6"
          >
              <img src={check} width={24} height={24} alt="Check" />
               <p className="body-2 ml-4">Innovation is One Step Away</p>
          </li>

          <li
            
            className="flex items-start py-6 border-t border-n-6"
          > 
          </li>
                 
                 
               
      </ul>
      </div>

      </div>







 {/* <div className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
                    <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="#hero">Home</Button>
      </div>
        </div> */}






      

  
     <div/>
   </section>
   
  )
}

export default Contact