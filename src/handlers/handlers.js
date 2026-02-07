
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from './../firebase/firebase.init';

const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const googleLoginHandler=()=>{
        signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
}

export const githubLoginHandler =()=>{
    signInWithPopup(auth, githubProvider).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
}

export const signoutHandler = ()=>{
    signOut(auth).then(()=>{

    }).catch((error)=>{

    })
}
