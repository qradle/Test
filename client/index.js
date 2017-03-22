import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import thunk from 'redux-thunk'

import app_reducer from './reducer'
import Sidebar from './components/Sidebar'
import Employees from './components/Employees'
import Employee from './components/Employee'
import Departments from './components/Departments'
import Department from './components/Department'

const store = createStore(
  app_reducer,
  applyMiddleware(thunk)
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div style={{minHeight: '100%', height: '100%'}}>
            <Grid fluid>
              <Col xs={2}>
                <Sidebar />
              </Col>
              <Col xs={10}>
                <Switch>
                  <Route exact path="/" render={ () => <div>Main page. choose on the left navigation bar</div>} />
                  <Route path="/employees/:id" component={Employee} />
                  <Route path="/employees" component={Employees} />
                  <Route path="/departments/:id" component={Department} />
                  <Route path="/departments" component={Departments} />
                  <Route path="*" render={ () => <div>404</div>} />
                </Switch>
              </Col>
            </Grid>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
