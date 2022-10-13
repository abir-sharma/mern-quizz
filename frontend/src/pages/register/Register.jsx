import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { registerUser } from '../../actions/userActions'
import  pic from "../../img/pic.webp"

const Register = () => {
  const dispatch=useDispatch()
  const { register } = useSelector(
    (state) => state.appInfo
  );
  const [formData,setFormData]=useState({name:"",email:"",password:""})
  const handleSubmit=async(event)=>{
    event.preventDefault()
    dispatch(registerUser(formData))
  }
  function handleChange(event){
    setFormData({...formData,[event.target.name]:event.target.value})
  }
  return (
    <div class="text-center my-4">
    
<main class="form-signin w-50 m-auto">
  <form>
    <img class="mb-4" src={pic} alt="" width="72" height="57"/>
    <h1 class="h3 mb-3 fw-normal">Please Register in</h1>

    <div class="form-floating">
      <input type="name" class="form-control my-2" id="floatingInput" placeholder="xyz"
      name="name"
      onChange={handleChange} />
      <label for="floatingInput">Name</label>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control my-2" id="floatingInput" placeholder="name@example.com"
      name="email"
      onChange={handleChange}
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control my-2" id="floatingPassword" placeholder="Password"
      name="password"
      onChange={handleChange}
      />
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    {register.success?<b className='text-success my-2'>Registered successfully you can log in now !!!</b>:<b className='text-danger my-2'>{register.message}</b>}
    <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit} >Sign in</button>
    <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
  </form>
</main>


    
  

</div>
  )
}

export default Register