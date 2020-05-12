import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Nav";
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import UsersContainer from "./components/Users/Users-container";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";

const App = (props) => {
    useEffect(() => {
        props.initializeApp()
    }, [props.initialized]);

    if (!props.initialized) {
        return <Preloader/>
    } else {
        return (<div className='wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='content'>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/login'} render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
};

// class App extends React.Component {
//     componentDidMount() {
//         this.props.initializeApp()
//     };
//
//     render() {
//         if (!this.props.initialized) {
//             return <Preloader/>
//         } else {
//             return (
//                 <div className='wrapper'>
//                     <HeaderContainer/>
//                     <Navbar/>
//                     <div className='content'>
//                         <Route path={'/dialogs'}
//                                render={() => <DialogsContainer/>}/>
//                         <Route path={'/profile/:userId?'}
//                                render={() => <ProfileContainer/>}/>
//                         <Route path={'/news'} render={() => <News/>}/>
//                         <Route path={'/music'} render={() => <Music/>}/>
//                         <Route path={'/users'} render={() => <UsersContainer/>}/>
//                         <Route path={'/settings'} render={() => <Settings/>}/>
//                         <Route path={'/login'} render={() => <LoginPage/>}/>
//                     </div>
//                 </div>
//             );
//         }
//     }
// };
//

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = connect(mapStateToProps, {initializeApp})(App);
const GeneralAPP = (props) => {
    return (
        <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
    )
};

export default GeneralAPP;