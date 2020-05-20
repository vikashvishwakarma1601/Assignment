import React,{useContext} from 'react';
import UserContext from '../../UserContext/UserContext';

const Main = ()=> {
    const {userDet} = useContext(UserContext)
    const renderContent=()=>{
      let {isLoggedIn} = userDet
      if(isLoggedIn){
        return <div>Welcome {userDet.UserEmail}</div>
      }
      else{
        return <div>Welcome Guest</div>
      }
    }

    return (
      <section class="main">
        <div class="container">
               { renderContent()}
            <p>Learn Free to Code Online</p>
        </div>
    </section>
    );
  }
  
  export default Main;