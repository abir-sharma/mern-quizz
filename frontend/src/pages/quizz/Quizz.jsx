import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getQuizzD } from '../../actions/userActions';
import { useEffect } from 'react';

const Quizz = () => {
  const {id}=useParams()
  const { quizzDetails } = useSelector(
    (state) => state.appInfo
  );
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getQuizzD(id))
  }, [id])
  return (
    <>
    <div className="container my-4">
      <h3 className='text-center'>{quizzDetails.quizz.quizname}</h3>
      <p className='text-center'>{quizzDetails.quizz.quizdescription}</p>
      {quizzDetails.quizz["questions"].map(question=><ol class="list-group list-group my-2">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Q. {question.question}</div> 
       A. {question.options[0]} <br /> 
       B. {question.options[1]} <br />
       C. {question.options[2]} <br />
       D. {question.options[3]} <br />
       {question.ans.map(a=><b>correct ans : {a}</b>)}
     </div>
    <span class="badge bg-primary rounded-pill">difficulty : {question.difficulty}</span>
  </li> 
</ol>)} 
    
    </div>
    </>
  )
}

export default Quizz