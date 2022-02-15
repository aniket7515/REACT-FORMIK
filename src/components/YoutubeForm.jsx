import React from 'react'
import  {useFormik} from 'formik'

function YoutubeForm() {

    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            channel:""
        },
        onSubmit: values=>{
            console.log('Form Data', values)
        }
    })
    // console.log('Form Values',formik.values);
  return (
    <div>
        <form action="" onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name='name' onChange={formik.handleChange} value={formik.values.name}/>

            <label htmlFor="email">E-mail</label>
            <input type="email" id='email' name='email'onChange={formik.handleChange} value={formik.values.email} /> 

            <label htmlFor="channel" >Channel</label>
            <input type="text" id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm


// step 1 in managing form state    
// fist give initial value to the input form fiels and then give onchange event to formik.handlechange and then assign value as formik.values.nameofinputfield  

// step2  handling form submission    
// int the form tag apply onSubmit={formik.handleSubmit}   
// and then 
// onSubmit: values=>{
//     console.log('Form Data', values)
// }

