
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from './../firebase/firebase.init';

const provider = new GoogleAuthProvider();

export const googleLoginHandler=()=>{
        signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
}

export const signoutHandler = ()=>{
    signOut(auth).then(()=>{

    }).catch((error)=>{
        
    })
}
