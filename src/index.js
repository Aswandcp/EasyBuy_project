import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context,{FirebaseContext} from './store/Context'
import firebase from './firebase/config'
import {Provider} from "react-redux";
import store from "./redux/store";




ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
 <Context>
 <Provider store = {store}>   
 <App />
 </Provider>
</Context>   

</FirebaseContext.Provider>

, document.getElementById('root'));





