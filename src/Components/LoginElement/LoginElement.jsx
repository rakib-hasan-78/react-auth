import React, { useState } from 'react';
import { githubLoginHandler, googleLoginHandler, signoutHandler } from '../../handlers/handlers';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const loginUser = onAuthStateChanged(auth, (loginUser)=>{
            setUser(loginUser);
        });

        return ()=> loginUser();
        
    },[]);

    return (
        <div>
            {
                user ? 
                <div>
                    <p>{user?.email}</p>
                    <img
                     style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                    src={user?.photoURL} 
                    alt={user?.displayName}
                     />
                     <p>{user?.displayName}</p>

                     <button
                     onClick={signoutHandler}
                      type="button"
                      >
                      log out
                      </button>

                </div> : 
                <div>
                    <button
                    onClick={googleLoginHandler}
                    style={{margin:'10px'}}
                    type="button"
                    >
                    sign with Google
                    </button>
                    <button
                    onClick={githubLoginHandler}
                    style={{margin:'10px'}}
                    type="button"
                    >
                    sign with GitHub
                    </button>

                </div>
            }
        </div>
    );
};

export default Login;