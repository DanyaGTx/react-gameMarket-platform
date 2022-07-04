import React, { useState } from 'react'
import { login } from '../../auth/base';
import MyButton from '../MyButton/MyButton'

const LoginModal = ({setActive}) => {
    const [loading, setLoading] = useState(false);

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function handleLogin(){
        setLoading(true);
        try{
          await login(email,password)
          setActive(false);
        }catch(e){
          alert(e)
        }
        setLoading(false);
      }
    return (
        <form action="">
            <h1 style={{ marginBottom: 10 }}>Login</h1>
            <div>
                <input className='myInput' placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} type='text' />
            </div>
            <div>
                <input className='myInput' placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} type='password' />
            </div>
            <MyButton disabled={loading} handle={handleLogin}>Login</MyButton>
        </form>
    )
}

export default LoginModal