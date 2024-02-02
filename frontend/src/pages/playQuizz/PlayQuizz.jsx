import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getQuizzD } from '../../actions/userActions'
import { useParams } from 'react-router-dom'
import Result from '../result/Result'

const Instructions= ({isO}) =>{
    return (
        <>
        <div class="modal modal-sheet position-static d-block  py-5" tabindex="-1" role="dialog" id="modalSheet">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header border-bottom-0">
        <h1 class="modal-title fs-5">Instructions</h1>
      </div>
      <div class="modal-body py-0">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis corrupti ducimus iure expedita voluptatibus eum sed rem? Veniam aperiam esse minus nobis facilis, minima porro. Adipisci ab accusantium doloremque. Nemo?.</p>
      </div>
      <div class="modal-footer flex-column border-top-0">
        <button type="button" class="btn btn-lg btn-primary w-100 mx-0" data-bs-dismiss="modal" onClick={isO} >Close</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
const PlayQuizz = () => {
  const {id}=useParams()
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getQuizzD(id))
  }, [id])
  const [difficultyLevel,setDifficultyLevel] = useState(1)
  const [result,setResult]=useState(false)
  const [message,setMessage]=useState("")
  const [score,setScore] = useState([0])
  const [ans,setAns]=useState([])
  const [isOpen,setIsOpen]=useState(true)

  const [checked, setChecked] = useState([]);
  const { quizzDetails } = useSelector(
    (state) => state.appInfo
  );
  if(quizzDetails === undefined) {return}
  function handleAns(event){
    var updatedList = [...checked];
    if (event.target.checked) {
    updatedList = [...checked,event.target.name];
  } else {
    updatedList.splice(checked.indexOf(event.target.name), 1);
  }
  setChecked(updatedList);
  }
  function isOpenn() {
    setIsOpen(false)
  }
  if (!quizzDetails.quizz){
    return null
  }
  const q=quizzDetails.quizz.questions[difficultyLevel]
  const correctAns=quizzDetails.quizz.questions[difficultyLevel].answers
  function Right(correctAns,checked){
    if (correctAns === checked) return true;
    if (correctAns == null || checked == null) return false;
    if (correctAns.length !== checked.length) return false;

    for (var i = 0; i < correctAns.length; ++i) {
      if (correctAns[i] !== checked[i]) return false;
  }
  return true;
  }
  const lastScore=score[score.length-1]
  const next=async(event)=>{
    event.preventDefault()
    if (Right(correctAns,checked)) {
      if (difficultyLevel===2) {
        setResult(true)
        setMessage("You passed the test !!!")
      }
      if (difficultyLevel<=1){
        setDifficultyLevel(difficultyLevel+1)
      }
      setScore([...score,lastScore+5])
    }
    else {
      if (difficultyLevel===0) {
        setResult(true)
        setMessage("You failed the test !")
      }
      if (difficultyLevel>=1) {
        setDifficultyLevel(difficultyLevel-1)
      }
      setScore([...score,lastScore-2])
    }
    
  }
  
  return (
    <>
    {isOpen && <Instructions isO={isOpenn} /> }
    {!result && <div className="container my-4">
        <div className="question">
            <h4>Q. {q.question} ?</h4>
            <b>Difficulty level : {difficultyLevel+1}</b>
        </div>
       

  <div class="form-check">
  <input class="form-check-input" type="checkbox" value={q.options[0]}  id="A" name="A" checked={ans.A} onChange={handleAns}/>
  <label class="form-check-label" for="A">
    {q.options[0]}
  </label>
</div>
<div class="form-check my-2">
  <input class="form-check-input" type="checkbox" value={q.options[1]} id="B" name="B" checked={ans.B} onChange={handleAns}/>
  <label class="form-check-label" for="B">
  {q.options[1]}
  </label>
</div>
<div class="form-check my-2">
  <input class="form-check-input" type="checkbox" value={q.options[2]} id="C" name="C" checked={ans.C} onChange={handleAns}/>
  <label class="form-check-label" for="C">
  {q.options[2]}
  </label>
</div>
<div class="form-check my-2">
  <input class="form-check-input" type="checkbox" value={q.options[3]} id="D" name="D" checked={ans.D} onChange={handleAns}/>
  <label class="form-check-label" for="D">
  {q.options[3]}
  </label>
</div>

        <button class=" btn btn-sm btn-danger" type="submit" onClick={next} >Next</button>
        <h3>Score : {lastScore}</h3>
    </div>}
    {result && <Result mess={message} sco={score} />}
    </>
  )
}

export default PlayQuizz
