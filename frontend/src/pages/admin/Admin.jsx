import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { getquizzes } from '../../actions/userActions'

const Admin = () => {
  const dispatch=useDispatch()
  const { quizzes } = useSelector(
    (state) => state.appInfo
  );
  useEffect(() => {
    dispatch(getquizzes())
  }, [])
  return (
    <>    
    <h3 className='text-center my-4'>Quizzes</h3>
    {quizzes.quizzes.map(quizz=><div className="container my-2">
    <ol class="list-group list-group">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{quizz.quizname}</div>
      {quizz.quizdescription}
    </div>
    <Link to={`/quizz/${quizz._id}`}><span class="badge bg-primary rounded-pill mx-2">View</span>
</Link>
<Link to={`/playQuizz/${quizz._id}`}><span class="badge bg-success rounded-pill">Play quizz</span>
</Link>
  </li>
</ol>
    </div>)}
    <div className="container">
    <Link to="/createQuizz" ><button class="btn btn-lg btn-primary my-2 mx-2" type="submit">Create quizz</button>
</Link>
    </div>
    
   </>
  )
}

export default Admin