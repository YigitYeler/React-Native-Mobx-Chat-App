import auth from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react'

const useFirebaseAuthentication = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const unlisten = auth().onAuthStateChanged(
            authUser => {
                authUser
                    ? setAuthUser(authUser)
                    : setAuthUser(null);
            },
        );
        return () => {
            unlisten();
        }
    });

    return authUser
}

export default useFirebaseAuthentication;
