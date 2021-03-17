import { observable, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import { StackActions, NavigationActions } from 'react-navigation';

const resetAction = StackActions.reset({
    index: 0, // <-- currect active route from actions array
    actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
    ],
});


class MainStore {
    @observable name = 'Yiğit'

    @action getName() {
        return this.name;
    }

    @action signUp(email, password, username, props) {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                auth().signInWithEmailAndPassword(email, password)
                    .then((firebaseUser) => {
                        firebaseUser.user.updateProfile({
                            displayName: username
                        })
                        props.navigation.dispatch(resetAction);
                        console.log(firebaseUser);
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
    }

    @action signIn(email, password, props) {
        auth().signInWithEmailAndPassword(email, password)
            .then((firebaseUser) => {
                props.navigation.dispatch(resetAction);
                console.log(firebaseUser);
            })
            .catch((error) => {
                console.log(error)
            });
    }


}

export default new MainStore();