import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Nav";
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import UsersContainer from "./components/Users/Users-container";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    };
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className='wrapper'>
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
    }
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);



