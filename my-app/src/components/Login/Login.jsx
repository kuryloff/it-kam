import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text"
                       placeholder={'Email'}
                       name={"email"}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={"password"}
                       component={Input}
                       validate={[required]}
                       type={"password"}
                />
            </div>
            <div>
                <Field type="checkbox"
                       name={"rememberMe"}
                       component={Input}
                /> remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }


    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
    })
};

export default connect(mapStateToProps, {login})(Login);


// Email: free@samuraijs.com
//
// Password: free