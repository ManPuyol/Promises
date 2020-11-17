import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AppRouter = () =>(
    <BrowserRouter>
   <div>
   <Header/>
   <Switch>
       <Route path='/' component={DashboardPage} exact={true} />
       <Route path='/RandGif' component={GifList}/>
       <Route path='/GifSearch' component={GifList}/>
       <Route component={NotFoundPage}/>
   </Switch>
   </div>
   </BrowserRouter>
 );

export default AppRouter;