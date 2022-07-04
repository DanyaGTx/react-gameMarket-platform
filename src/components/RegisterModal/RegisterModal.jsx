import React, { useState } from 'react'
import { signup,useAuth } from '../../auth/base';
import MyButton from '../MyButton/MyButton'
import MyInput from '../MyInput/MyInput'
import '../MyInput/MyInput.css'
const RegisterModal = ({setActive}) => {

  const [loading, setLoading] = useState(false);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  async function handleSignUp(){
    setLoading(true);
    try{
      await signup(email,password)
      setActive(false);
      setEmail('');
      setPassword('');
    }catch(e){
      alert(e)
    }
    setLoading(false);
  }
  return (
    <form action="">
    <h1 style={{ marginBottom: 10 }}>Registration</h1>
    <div>
        <input className='myInput' placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} type='text' />
    </div>
    <div>
        <input className='myInput' placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} type='password' />
    </div>
    <MyButton disabled={loading} handle={handleSignUp}>Registration</MyButton>
</form>
  )
}

export default RegisterModal