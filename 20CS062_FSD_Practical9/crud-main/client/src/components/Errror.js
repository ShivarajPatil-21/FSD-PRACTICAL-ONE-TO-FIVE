import React from 'react'
import { useHistory, useNavigate } from 'react-router-dom'

const Errror = () => {


    const history = useHistory();

  return (
    <>
            <div className='container'>
            <div className="error d-flex flex-column justify-content-lg-center align-items-center">
                <h4>ErrorPage Not Found</h4>
                <button className='btn btn-primary' onClick={()=>history.push("/")}>Go back to Signup Page</button>
            </div>

        </div>
    </>
  )
}

export default Errror