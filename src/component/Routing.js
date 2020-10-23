import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Post from './Post';
import Profile from './Profile';
import Home from './Home';
import PostDetails from './postDetails';

const Routing=()=>{
    return(

        <BrowserRouter>
        <div>
        <Header/>
        <Route exact path='/' component={Home}/>
            <Route path='/Profile' component={Profile}/>
            <Route exact path='/Post' component={Post}/>
            <Route path='/Post/:id' component={PostDetails}/>
        <Footer/>
        </div>
        </BrowserRouter>
    )
}


export default Routing;
