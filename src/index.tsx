import React from 'react';
import ReactDOM from 'react-dom';
import './Core/Imports.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './Core/GlobalStyle';
import Home from './App/Views/Home.views';
import NotFound404 from './App/Views/NotFound404.view';
import EditorsListView from './App/Views/EditorsList.views';
import PostCreateView from './App/Views/PostCreateView';
import EditorProfile from './App/Features/EditorProfile'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/editores" exact component={EditorsListView} />
        <Route path="/editores/:id" exact component={EditorProfile} />
        <Route path="/posts/criar" exact component={PostCreateView} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();