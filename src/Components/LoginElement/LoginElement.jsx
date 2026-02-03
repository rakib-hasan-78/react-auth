import React from 'react';
import { googleLoginHandler } from '../../handlers/handlers';

const Login = () => {
    return (
        <div>
            
            <button
            onClick={googleLoginHandler}
             style={{margin:'10px'}}
              type="button"
              >
              sign with Google
              </button>
        </div>
    );
};

export default Login;