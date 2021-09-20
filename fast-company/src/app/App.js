import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import Users from './layouts/users'
import Login from './layouts/login'
import Main from './layouts/main'
import Navbar from './components/navBar'

function App() {
    return <div className='container'>
        <Navbar/>
        <Switch>
            <Route path='/users/:userId?' component={Users} />
            <Route path='/login' component={Login} />
            <Route path='/' exact component={Main} />
            <Redirect to='/' />
        </Switch>
    </div>
}

export default App
