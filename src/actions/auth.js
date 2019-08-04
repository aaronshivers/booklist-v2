import { firebase } from '../db/firebase'

const login = () => {
  firebase.auth().signInAnonymously()
}

const logout = () => {
  firebase.auth().signOut()
}

export {
  login,
  logout
}
