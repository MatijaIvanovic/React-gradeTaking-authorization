import React from 'react'
import authStore from '../stores/authStore'
import {useNavigate} from 'react-router-dom';
export default function SingupForm() {
    const store = authStore();
    const navigate = useNavigate();
    const handleSignup = async (e) =>{
        e.preventDefault();
        await store.signup();
        navigate("/login");
    }
  return (
    <div>
        <form onSubmit={handleSignup}>
            <input 
                onChange={store.updateSignupForm} 
                value={store.singupForm.email} 
                type="email" 
                name="email"
                required = "true"
                />
            <input 
                onChange={store.updateSignupForm} 
                value={store.singupForm.password} 
                type="password" 
                name="password"
                required = "true"
            />

            <button type="submit">Signup</button>
        </form>
    </div>
  );
}
