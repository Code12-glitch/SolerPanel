
'use client'
import React from 'react';
import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';


interface FormData {
  name: string;  
  email: string; 
  phone: string;
  service: string;
  massage: string;  
}

const schema = yup
  .object({
    name: yup.string().required().label("Name"), 
    email: yup.string().required().email().label("Email"), 
    phone: yup.string().required().label("Phone"),
    service: yup.string().required().label("Service"),
    massage: yup.string().required().label("Massage"), 
  })
  .required();

const AppointmentForm = () => {

  const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
  const onSubmit = (data: FormData) => {   
    const notify = () => toast("Message send successful");
    notify();
    reset();
    console.log(data);
  };
  


  return (
    <>
      <form id="it-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-box faq">
              <input type="text" {...register("name")} placeholder="Name" />
              <i className="bi bi-person"></i>
              <p className="form_error">{errors.name?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box faq">
              <input type="text" {...register("email")} placeholder="Email*" />
              <i className="bi bi-envelope"></i>
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box faq">
              <input type="tel" {...register("phone")} placeholder="Phone Number*" />
              <i className="bi bi-telephone"></i>
              <p className="form_error">{errors.phone?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box faq">
              <select {...register("service")} defaultValue="">
                <option value="" disabled>Select Service*</option>
                <option value="Residential Solar PV System">Residential Solar PV System</option>
                <option value="Commercial Solar PV System">Commercial Solar PV System</option>
                <option value="Hybrid Battery Backup Solar PV System">Hybrid Battery Backup Solar PV System</option>
              </select>
              <p className="form_error">{errors.service?.message}</p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-box faq">
              <textarea {...register("massage")} id="massage" cols={30} rows={10} placeholder="write somethings"></textarea>
              <i className="bi bi-chat-left-text-fill"></i>
              <p className="form_error">{errors.massage?.message}</p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-box-button faq">
              <button type="submit">Send Request</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AppointmentForm;