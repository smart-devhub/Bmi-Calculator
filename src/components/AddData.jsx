import React from 'react'
import Swal from 'sweetalert2'

const AddData = () => {
  const [userData,setUserData]=React.useState({
    weight:"",
    height:"",
    data:new Date().toJSON().slice(0,10).replace(/-/g,'/')
  })
  const [loader,setLoader]=React.useState(false)
  const [bmi,setBmi]=React.useState(null)
  const handleChange=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
     
      if(!userData.weight ){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Enter Weight....',
          
        })
  
      }
    
      else if(!userData.height){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Enter Height...',
          
        })
                      
    }else{
      let bmi=(userData.weight/((userData.height)/100 * (userData.height)/100)).toFixed(2)
      setBmi(bmi)
      setLoader(true)
    }
  
  }
  
  return (
    <div className='Container'>
      <form action="" className='form'>
        <div className='formContainer'>
          <label >Weight(In kg)</label>
          <input type="number" placeholder='Weight(kg)' name='weight' value={userData.weight} onChange={handleChange}  />
        </div>
        <div className='formContainer'>
          <label >Height(In cm)</label>
          <input type="number" placeholder='Height(cm)' name='height' value={userData.height} onChange={handleChange}  />
        </div>
        <div className='btnContainer'>
          <button onClick={handleSubmit} className="btn">Calculate</button>
        </div>
      </form>
      {
            loader ?(
              <div className='resultContiner'>
                <h4>Your Weight:{userData.weight} kg</h4>
                <h4 style={{margin:"1rem 0"}}>Your Height:{userData.height} cm</h4>
                 <h2 style={{color:"teal"}}>Your BMI: {bmi}</h2>
                 <p style={{marginTop:"10px"}}>Date:{userData.data}</p>
              </div>
            ):(<></>)
      }
    </div>
  )
}

export default AddData