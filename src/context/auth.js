import React, {createContext, useReducer} from 'react';
import jwtDecode from 'jwt-decode'

const initialState = {
    user: null
}

if (localStorage.getItem("jwtToken")) {

    const decodedToken = jwtDecode(localStorage.getItem("jwtToken"));

    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("jwtToken");
    } else {
        initialState.user = decodedToken;
    }

}

const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {}
});

function authReducer(state, action) {
    switch(action.type) {
        case 'LOGIN':
            return{
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return{
                ...state,
                user: null    
            }
        default:
            return state;
        
    }
}

function AuthProvider(props) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (userData) => {
        localStorage.setItem("jwtToken", userData.token)
        dispatch({type: 'LOGIN', payload: userData});
    }

    const logout = () => {
        localStorage.removeItem("jwtToken");
        dispatch({type: 'LOGOUT'});
    }

    return (
        <AuthContext.Provider value={{user: state.user, login, logout}} {...props} />
    )
}

function useUser() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a AuthProvider');
    }
    return context;
}

export { AuthProvider, useUser };