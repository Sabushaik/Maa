import React from 'react'
import { useLocation  ,useNavigate} from 'react-router-dom';

function LoginSuccessful() {
   const location = useLocation();
   const navigate=useNavigate();
  const receivedData = location.state?.data;
 
  return (
    <div>
    
      <h3> hey {receivedData?.name} login Successful welcome back click to here to continue with home page</h3>
      {alert("Login Successful" +receivedData?.name)}

      
     
    </div>
  )
}

export default LoginSuccessful
