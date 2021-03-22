import { observable, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import { StackActions, NavigationActions } from 'react-navigation';
import database from '@react-native-firebase/database';

const resetAction = StackActions.reset({
    index: 0, // <-- currect active route from actions array
    actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
    ],
});


class MainStore {

    @action signUp(email, password, username, props) {

        if (email != "" && password != "" && username != "") {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    //sdsdf
                    auth().signInWithEmailAndPassword(email, password)
                        .then((firebaseUser) => {
                            firebaseUser.user.updateProfile({
                                displayName: username
                            })
                            props.navigation.dispatch(resetAction);
                            console.log(firebaseUser);

                            database()
                                .ref('Users')
                                .push({
                                    UserName: username
                                });
                        })
                        .catch((error) => {
                            // Error Handling
                        });
                    console.log('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
        } else {
            alert("Please do not leave blank space!")
        }

    }

    @action signIn(email, password, props) {

        if (email != "" && password != "") {
            auth().signInWithEmailAndPassword(email, password)
                .then((firebaseUser) => {
                    props.navigation.dispatch(resetAction);
                    console.log(firebaseUser);
                })
                .catch((error) => {
                    console.log(error)
                });
        } else {
            alert("Please do not leave blank space!")
        }
    }



}

export default new MainStore();