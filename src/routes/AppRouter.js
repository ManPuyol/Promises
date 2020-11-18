import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import GifList from '../components/GifList'
import GifSearch from '../components/GIFSearch'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () =>(
    <BrowserRouter>
   <div>
   <Switch>
       {/* <Route path='/' component={DashboardPage} exact={true} /> */}
       <Route path='/public/GifSearch' component={GifList} exact={true}/>
       <Route path='/public/' component={GifSearch}/>
       <Route component={NotFoundPage}/>
   </Switch>
   </div>
   </BrowserRouter>
 );

export default AppRouter;