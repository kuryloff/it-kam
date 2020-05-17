import React, {Suspense, useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
// import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/Dialogs-container'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import("./components/Users/Users-container"));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const News = React.lazy(() => import('./components/News/News'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));



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
                           render={withSuspense(DialogsContainer)}/>
                    <Route path={'/profile/:userId?'}
                           render={withSuspense(ProfileContainer)}/>

                    <Route path={'/news'}
                           render={withSuspense(News)}/>
                    <Route path={'/music'}
                           render={withSuspense(Music)}/>
                    <Route path={'/users'}
                           render={withSuspense(UsersContainer)}/>
                    {/*<Route path={'/users'} render={() => <UsersContainer/>}/>*/}
                    <Route path={'/settings'}
                           render={withSuspense(Settings)}/>
                    <Route path={'/login'}
                           // render={() => <LoginPage/>}/>
                           render={withSuspense(LoginPage)}/>
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