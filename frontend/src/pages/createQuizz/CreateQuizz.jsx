import React from 'react'
import { useDispatch} from 'react-redux'
import { useState } from 'react'
import { createquizz } from '../../actions/userActions'
import { useNavigate } from 'react-router-dom'

const CreateQuizz = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [formData,setFormData]=useState({title:"",description:""})
  const [question,setQuestion]=useState("")
  const [questions,setQuestions]=useState([])
  const [option,setOption]=useState({A:"",B:"",C:"",D:""})
  const [ans,setAns]=useState([])
  const [difficulty,setDifficulty]=useState(1)
  const [checked, setChecked] = useState([]);
  const handleSubmit=async(event)=>{
    event.preventDefault()
    dispatch(createquizz(finalObjet))
    navigate("/admin")
  }
  function handleChange(event){
    setFormData({...formData,[event.target.name]:event.target.value})
  }
  function handleQuestion(event) {
    setQuestion(event.target.value)
  }
  function handleOption(event) {
    setOption({...option,[event.target.name]:event.target.value})
  }
  function handleAns(event) {
    var updatedList = [...checked];
    if (event.target.checked) {
    updatedList = [...checked,event.target.name];
  } else {
    updatedList.splice(checked.indexOf(event.target.name), 1);
  }
  setChecked(updatedList);
  }
  function iDifficulty(){
    setDifficulty(difficulty+1)
    setQuestions([...questions,quest])
    setQuestion("")
    setOption({A:"",B:"",C:"",D:""})
    setAns([])
  }
  // const answers=Object.values(ans)
  const answers=checked
  const options=Object.values(option)
  const quizname=formData.title
  const quizdescription=formData.description
  const quest={question,options,answers,difficulty}
  const finalObjet={quizname,quizdescription,questions}
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
<div className="container">
{questions.map(question=><ol class="list-group list-group my-2">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Q. {question.question}</div> 
       A. {question.options[0]} <br /> 
       B. {question.options[1]} <br />
       C. {question.options[2]} <br />
       D. {question.options[3]} <br />
       <b>Correct ans : {question.answers.map(a=><b>{a},</b>)}</b>
     </div>
    <span class="badge bg-primary rounded-pill">difficulty : {question.difficulty}</span>
  </li> 
</ol>)} 
</div>
  <span class="input-group-text">Question</span>
  <textarea class="form-control" aria-label="With textarea" name='question' onChange={handleQuestion}></textarea>
</div>
<h6>Options</h6>
<div className="container">
<div class="input-group my-2">
  <span class="input-group-text">A</span>
  <input type="text" aria-label="First name" class="form-control" name="A"
    onChange={handleOption}/>
</div>
<div class="input-group my-2">
  <span class="input-group-text">B</span>
  <input type="text" aria-label="First name" class="form-control" name="B"
    onChange={handleOption}/>
</div>
<div class="input-group my-2">
  <span class="input-group-text">C</span>
  <input type="text" aria-label="First name" class="form-control" name="C"
    onChange={handleOption}/>
</div>
<div class="input-group my-2">
  <span class="input-group-text">D</span>
  <input type="text" aria-label="First name" class="form-control" name="D"
    onChange={handleOption}/>
</div>
</div>

<h6>Answers</h6>
{/* <div className="container">
<div class="input-group my-2">
  <input type="text" aria-label="First name" class="form-control" name="A" 
    onChange={handleAns}/>
</div>
<div class="input-group my-2">
  <input type="text" aria-label="First name" class="form-control" name="B"
    onChange={handleAns}/>
</div>
<div class="input-group my-2">
  <input type="text" aria-label="First name" class="form-control" name="C"
    onChange={handleAns}/>
</div>
<div class="input-group my-2">
  <input type="text" aria-label="First name" class="form-control" name="D"
    onChange={handleAns}/>
</div>
</div> */}
 <div class="form-check">
  <input class="form-check-input" type="checkbox"  id="A" name="A" checked={ans.A} onChange={handleAns}/>
  <label class="form-check-label" for="A">
    A
  </label>
</div>
<div class="form-check my-2">
  <input class="form-check-input" type="checkbox"  id="B" name="B" checked={ans.B} onChange={handleAns}/>
  <label class="form-check-label" for="B">
  B
  </label>
</div>
<div class="form-check my-2">
  <input class="form-check-input" type="checkbox"  id="C" name="C" checked={ans.C} onChange={handleAns}/>
  <label class="form-check-label" for="C">
  C
  </label>
</div>
<div class="form-check my-2">
  <input class="form-check-input" type="checkbox"  id="D" name="D" checked={ans.D} onChange={handleAns}/>
  <label class="form-check-label" for="D">
  D
  </label>
</div>





<b>Difficulty : {difficulty}</b><br />
 <button class="btn btn-outline-danger my-2" type="submit" onClick={iDifficulty}>Add</button> <br />
 <button class="btn btn-outline-primary my-2" type="submit" onClick={handleSubmit}>Create quizz</button>


    </div>
    </>
  )
}

export default CreateQuizz