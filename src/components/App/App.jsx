import css from './App.module.css'

import Profile from '../Profile/Profile.jsx'
import FriendsList from '../FriendList/FriendsList.jsx'

import userData from "../../data/userData.json" 
import friends from "../../data/friends.json"


const App = () => 
    (<>
    <div className={css.container}>
    <Profile {...userData} />
        <FriendsList friends={friends} />
    </div>
    </>)
  


export default App
