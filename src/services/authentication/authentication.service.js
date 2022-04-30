import { auth } from '../../../App';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const loginRequest = (email, password) =>
      signInWithEmailAndPassword(auth, email, password);