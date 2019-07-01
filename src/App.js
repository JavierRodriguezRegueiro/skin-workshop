import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import MainApp from './mainApp/js/mainApp';
import CSSNamingApp from './cssNaming/js/cssnamingApp';

import './App.css';

const applications =
{
  'mainApp':
  {
    path: '/mainApp',
    component: MainApp
  },
  'flexAndGrid':
  {
    path: '/flexAndGridWorkshop',
    component: MainApp
  },
  'cssNaming':
  {
    path: '/cssNamingWorkshop',
    component: CSSNamingApp
  } 
};



class RouterApp extends React.Component {
  render() {
      return (
          <Router>
            {Object.keys(applications).map(key => <Route key={key} exact path={applications[key].path} component={applications[key].component}/>)}
            {/* Force the application to navigate to mainApp on localhost:3000 */}
            <Redirect to={applications.mainApp.path} push />
          </Router>
      );
  }
}

function App() {
  return (
    <div className="app">
      <RouterApp/>
    </div>
  );
}

export default App;
