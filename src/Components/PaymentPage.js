import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css'; // Import your CSS file for styling

const PaymentPage = () => {



  const [formData, setFormData] = useState({
    cardname: '',
    cardnumber: '',
    cardcvc: '',
    email: '',
  
  });

  
  const navigate=useNavigate();

  const[shikaris ,setStudents] =useState([])

  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

   

  };





  const handleSubmit = (e) => 
  {
   

    e.preventDefault();
    const shikari=formData;
    console.log(shikari);
    fetch("http://localhost:8080/shikari/sendemail" ,
    {
    method:"POST",
    headers:{"Content-Type":"application/json"}
    ,
    body:JSON.stringify(shikari)

    }
    ).then(()=>{console.log("New student Added") ;   navigate('/PayDone', { state: { data: shikari } });})

   
















   
      // Handle form submission (e.g., send data to server)
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      // Reset form fields
      setFormData({
        cardname: '',
        cardnumber: '',
        cardcvc: '',
        email: '',
       
      });
    
  };

  

 

  return (
    
   <>

<div className="form-group2sa">
      <form onSubmit={handleSubmit} className="payment-container2sa">
        <h2 className="title">Payment</h2>
        <div className="payment-container2sa">
          <label className="label2sa">cardName</label>
          <input
            type="text"
            name="cardname"
            className="input2sa"
            value={formData.cardname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="payment-container2sa">
          <label className="label2sa">cardnumber</label>
          <input
            type="tel"
            name="cardnumber"
            className="input2sa"
            value={formData.number}
            onChange={handleChange}
            required
          />
        
        </div>
       
        <div className="payment-container2sa">
          <label className="label2sa">Email</label>
          <input
            type="email"
            name="email"
            className="input2sa"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="payment-container2sa">
          <label className="label2sa">cardcvc</label>
          <input
            type="text"
            name="cardcvc"
            className="input2sa"
            value={formData.cvc}
            onChange={handleChange}
            required
          />
        </div>
       
        <button type="submit" className="button"  >BUY</button>
      </form>
    </div>

   </>
  );
};

export default PaymentPage;
