/**
 * Created by prakashchandrabarnwal on 31/12/17.
 */
import React from "react";
import  User  from './User';
import  Main  from './Main';
import {connect} from 'react-redux'
import setName from '../actions/userActions'

class App extends React.Component {


    render() {
        return (
            <div className="container">
                <Main changeUsername={this.props.setName}/>
                <User username={this.props.name.name}/>
            </div>
        );
    }
}

const mapStateToProps=(store)=>{
    return {
        name:store.userReducer
    }
}



const mapDispatchToProps=(dispatch)=>{
    return{
        setName:(name)=>{
            dispatch(setName(name))
    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)




