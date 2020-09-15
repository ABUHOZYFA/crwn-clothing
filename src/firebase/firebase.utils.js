import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {

        apiKey: "AIzaSyDz49j-5nS3bu9NeAplGQRGbDqLAM0kbg0",
        authDomain: "crow-clothing.firebaseapp.com",
        databaseURL: "https://crow-clothing.firebaseio.com",
        projectId: "crow-clothing",
        storageBucket: "crow-clothing.appspot.com",
        messagingSenderId: "732075652637",
        appId: "1:732075652637:web:afe662cdb9aa264e8f38f4",
        measurementId: "G-0CT8JY0BS4"

};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {

        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();
        if (!snapShot.exists) {

                const { displayName, email } = userAuth;
                const createdAt = new Date();
                try {
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        });
                } catch (error) {
                        console.log('error creating user', error.message);
                }
        }

        return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

