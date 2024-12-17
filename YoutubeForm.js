import React from 'react';
import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

export default function YoutubeForm() {
    const form= useForm();
    const {register , control , handleSubmit , formState}= form;
    const {errors}= formState;
    const onSubmit=(data)=> console.log("Form submitted", data)
  return (
    <>
    <div>Youtube Form</div>
    <form onSubmit={handleSubmit(onSubmit)}>

    <label htmlFor='username'>Username</label>
    <input type= "text" id="username" {...register("username",{required: 'Error! This field is required.'})}/>
    <p className='error'>{errors.username?.message}</p>
    
    <label htmlFor='email'>Email</label>
    <input type="email" id="email" {...register("email",{pattern:
        {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Invalid Email Format'


        }
    })}/>
    <p className='error'>{errors.email?.message}</p>
   

  
    <label htmlFor='channel'>Channel</label>
    <input type="text" id="channel" {...register("channel", {required: 'This field is required!'})}/>
    <p className='error'>{errors.channel?.message}</p>
 

    <button type="submit" className='btn-btn-primary'>Submit</button>

    </form>
    <DevTool control={control}/>
    </>
    
  )
}
