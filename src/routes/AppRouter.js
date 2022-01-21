import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GIFSearch'
import NotFoundPage from '../components/NotFoundPage'
import DashboardPage from '../components/DashboardPage'
import Header from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
      <Switch>
        <Route path='/' component={DashboardPage} exact={true} />
        <Route path='/RandGif' component={GifList} exact={true} />
        <Route path='/GifSearch' component={GifSearch} />
        <Route component={NotFoundPage} />
      </Switch>
  </BrowserRouter>
)

export default AppRouter
