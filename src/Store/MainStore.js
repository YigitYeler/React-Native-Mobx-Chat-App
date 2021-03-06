import { observable, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import { StackActions, NavigationActions } from 'react-navigation';
import database from '@react-native-firebase/database';


const resetAction = StackActions.reset({
    index: 0, // <-- currect active route from actions array
    actions: [
        NavigationActions.navigate({
            routeName: 'Home'
        }),
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

                            console.log(firebaseUser);
                            props.navigation.dispatch(resetAction);

                        })
                        .catch((error) => {
                            // Error Handling
                            console.log(error);
                        });
                    console.log('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        alert('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        alert('That email address is invalid!');
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
                .then(() => {
                    props.navigation.dispatch(resetAction);
                })
                .catch((error) => {
                    console.log(error)
                });
        } else {
            alert("Please do not leave blank space!")
        }
    }

    @action createMyRoom(roomName, user) {


        if (user) {

            /* database().ref("Users").orderByKey()
                 .once('value', snapshot => {
                     snapshot.forEach((dbUsers) => {
                         console.log(dbUsers.key)
                         if (dbUsers.val().UserID == user.uid) {
                             database()
                                 .ref('Users').child(dbUsers.key).child('MyRooms')
                                 .push({
                                     MyRoomsArray: [userid]
                                 });
                         }
                     })
                 })*/

            database()
                .ref('Rooms')
                .push({
                    RoomName: roomName,
                    Users: {
                        userIdArray: [user.uid]
                    },
                    Usernames: user.displayName

                });


        } else {
            // No user is signed in.
        }


    }

    @action joinRoomById(roomId) {

        var userIdArray = [];
        var isEntry = false;
        auth().onAuthStateChanged((user) => {
            if (user) {
                var userid = user.uid;
                var username = user.displayName;
                userIdArray.push(userid);
                if (roomId.length == 20) {
                    database().ref("Rooms").child(roomId).orderByKey()
                        .once("value", (snapshot) => {

                            if (snapshot.val().Users.userIdArray != null) {

                                for (var i = 0; i < snapshot.val().Users.userIdArray.length; i++) {
                                    userIdArray.push(snapshot.val().Users.userIdArray[i])
                                    if (snapshot.val().Users.userIdArray[i] == userid) {
                                        isEntry = true
                                    }
                                }
                            }

                            var firstUsername = snapshot.val().Usernames;

                            if (isEntry == false) {

                                database()
                                    .ref('Rooms').child(roomId).child("Users")
                                    .set({
                                        userIdArray
                                    });

                                database()
                                    .ref('Rooms').child(roomId).child("Usernames")
                                    .push({
                                        firstUsername
                                    });

                                database()
                                    .ref('Rooms').child(roomId).child("Usernames")
                                    .push({
                                        username
                                    });
                            }
                            else if (isEntry) {
                                alert("You have been already in this room")
                            }

                            if (roomId != snapshot.key) {
                                alert("Wrong RoomID")
                            }

                        });
                } else {
                    alert("Wrong RoomID")
                }

                /*database()
                    .ref('Rooms')
                    .push({
                        RoomName: roomName,
                        Users: {
                            User: user.uid
                        }
                    });*/

            } else {
                // No user is signed in.
            }
        });
    }

    @action filterRoomArray(myRoomsArray) {
        for (var i = 0; i < myRoomsArray.length; i++) {

            for (var j = 0; j < myRoomsArray.length; j++) {
                if (i != j && myRoomsArray[i].roomId == myRoomsArray[j].roomId) {

                    return false;

                }
            }
        }
        return true;
    }

    @action filterMessagesArray(messagesArray) {
        for (var i = 0; i < messagesArray.length; i++) {

            for (var j = 0; j < messagesArray.length; j++) {
                if (i != j && messagesArray[i].message == messagesArray[j].message) {

                    return false;

                }
            }
        }
        return true;
    }

    @action getMyRooms() {

    }
}

export default new MainStore();