import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { registerUser } from '../../actions/userActions'

const CreateQuizz = () => {
  const dispatch=useDispatch()
  const { success } = useSelector(
    (state) => state.appInfo
  );
  const [formData,setFormData]=useState({title:"",description:""})
  const [question,setQuestion]=useState("")
  const [option,setOption]=useState({A:"",B:"",C:"",D:""})
  const [ans,setAns]=useState([])
  const [difficulty,setDifficulty]=useState(1)
  const handleSubmit=async(event)=>{
    event.preventDefault()
    console.log(formData)
    dispatch(registerUser(formData))
  }
  function handleChange(event){
    setFormData({...formData,[event.target.name]:event.target.value})
    setQuestion({[event.target.name]:event.target.value})
    setOption({...option,[event.target.name]:event.target.value})
    setAns({...ans,[event.target.name]:event.target.value})
  }
  function iDifficulty(){
    setDifficulty(difficulty+1)
  }
  const fAns=Object.values(ans)
  const fOption=Object.values(option)
  console.log({formData,question,fOption,fAns,difficulty},"final object")
  return (
    <>
    <div className="container w-50">
    <div class="input-group w-50 my-2">

    <div class="input-group my-2">
  <span class="input-group-text">Quizz title</span>
  <input type="text" aria-label="First name" class="form-control" name="title"
    onChange={handleChange}/>
</div>

<div class="input-group my-2">
  <span class="input-group-text">Quizz description</span>
  <input type="text" aria-label="First name" class="form-control" name='description' onChange={handleChange}/>
</div>

  <span class="input-group-text">Question</span>
  <textarea class="form-control" aria-label="With textarea" name='question' onChange={handleChange}></textarea>
</div>
<h6>Options</h6>
<div className="container">
<div class="input-group my-2">
  <span class="input-group-text">A</span>
  <input type="text" aria-label="First name" class="form-control" name="A"
    onChange={handleChange}/>
</div>
<div class="input-group my-2">
  <span class="input-group-text">B</span>
  <input type="text" aria-label="First name" class="form-control" name="B"
    onChange={handleChange}/>
</div>
<div class="input-group my-2">
  <span class="input-group-text">C</span>
  <input type="text" aria-label="First name" class="form-control" name="C"
    onChange={handleChange}/>
</div>
<div class="input-group my-2">
  <span class="input-group-text">D</span>
  <input type="text" aria-label="First name" class="form-control" name="D"
    onChange={handleChange}/>
</div>
</div>

<h6>Answers</h6>
<div className="container">
<div class="input-group my-2">
  <span class="input-group-text">A</span>
  <input type="text" aria-label="First name" class="form-control" name="A"
    onChange={handleChange}/>
</div>
<div class="input-group my-2">
  <span class="input-group-text">B</span>
  <input type="text" aria-label="First name" class="form-control" name="B"
    onChange={handleChange}/>
</div>
<div class="input-group my-2">
  <span class="input-group-text">C</span>
  <input type="text" aria-label="First name" class="form-control" name="C"
    onChange={handleChange}/>
</div>
<div class="input-group my-2">
  <span class="input-group-text">D</span>
  <input type="text" aria-label="First name" class="form-control" name="D"
    onChange={handleChange}/>
</div>
</div>




<b>Difficulty : {difficulty}</b><br />
 <button class="btn btn-outline-danger my-2" type="submit" onClick={iDifficulty}>Add</button> <br />
 <button class="btn btn-outline-primary my-2" type="submit" onClick={iDifficulty}>Create quizz</button>


    </div>
    </>
  )
}

export default CreateQuizz