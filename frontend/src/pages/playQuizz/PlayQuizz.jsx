import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getQuizzD } from '../../actions/userActions'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Instructions= () =>{
    return (
        <>
        <div class="modal modal-sheet position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSheet">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header border-bottom-0">
        <h1 class="modal-title fs-5">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body py-0">
        <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.</p>
      </div>
      <div class="modal-footer flex-column border-top-0">
        <button type="button" class="btn btn-lg btn-primary w-100 mx-0 mb-2">Save changes</button>
        <button type="button" class="btn btn-lg btn-light w-100 mx-0" data-bs-dismiss="modal">Close</button>
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
  const navigate=useNavigate()
  useEffect(() => {
    dispatch(getQuizzD(id))
  }, [id])
  const [difficultyLevel,setDifficultyLevel] = useState(2)
  const [score,setScore] = useState([0])
  const [ans,setAns]=useState([])
  const [checked, setChecked] = useState([]);
  const { quizzDetails } = useSelector(
    (state) => state.appInfo
  );
  function handleAns(event){
    var updatedList = [...checked];
    if (event.target.checked) {
    updatedList = [...checked,Number(event.target.value)];
  } else {
    updatedList.splice(checked.indexOf(event.target.value), 1);
  }
  setChecked(updatedList);
  }
  const q=quizzDetails.quizz.questions[difficultyLevel-1]
  const correctAns=quizzDetails.quizz.questions[difficultyLevel-1].ans
  function Right(correctAns,checked){
    if (correctAns === checked) return true;
    if (correctAns == null || checked == null) return false;
    if (correctAns.length !== checked.length) return false;

    for (var i = 0; i < correctAns.length; ++i) {
      if (correctAns[i] !== checked[i]) return false;
  }
  return true;
  }
  const next=async(event)=>{
    event.preventDefault()
    if (Right(correctAns,checked)) {
      if (difficultyLevel==2) {
        navigate("/result")
      }
      setDifficultyLevel(difficultyLevel+1)
      setScore([...score,score[score.length-1]+5])
    }
    else {
      if (difficultyLevel==0) {
        navigate("/result")
      }
      setDifficultyLevel(difficultyLevel-1)
      setScore([...score,score[score.length-1]-2])
    }
    
  }
  console.log(score,"score")
  return (
    <>
    <div className="container my-4">
        <div className="question">
            <h4>Q. {q.question} ?</h4>
            <b>Difficulty level : {difficultyLevel}</b>
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
    </div>
    </>
  )
}

export default PlayQuizz