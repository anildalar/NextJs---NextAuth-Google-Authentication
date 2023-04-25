import React from 'react'

import { useSession,signIn,signOut } from 'next-auth/react';

export default function login() {
    const {data:session} = useSession();

    if(session){
        return (
            <>  
                <h1>Welcome {session.user.email}</h1>
                <button onClick={()=>{ signOut() }}>Sign Out</button>
            </>
        )
    }else{
        return (
            <> 
                <h1>login</h1>
                <button onClick={()=>{ signIn() }}>Sign In</button>
            </>
        )
    }
    
}
