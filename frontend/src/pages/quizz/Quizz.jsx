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
  if (!quizzDetails.quizz) {
    return null
  }  
  return (
    <>
    <div className="container my-4">
      <h3 className='text-center'>{ quizzDetails.quizz.quizname}</h3>
      <p className='text-center'>{quizzDetails.quizz.quizdescription}</p>
      {quizzDetails.quizz.questions.map(quest=><ol class="list-group list-group my-2">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">
        Q. {quest.question}
        </div> 
       A. {quest.options[0]} <br /> 
       B. {quest.options[1]} <br />
       C. {quest.options[2]} <br />
       D. {quest.options[3]} <br />
       <b>correct ans : </b>{quest.answers.map(a=><b>,{a}</b>)}
     </div>
    <span class="badge bg-primary rounded-pill">difficulty : {quest.difficulty}</span>
  </li> 
</ol>)}
    
    </div>
    </>
  )
}

export default Quizz