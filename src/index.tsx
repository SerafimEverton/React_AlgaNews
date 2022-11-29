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
import http from './Core/http';

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


async function getDataFromApi(){
  try {

    const response =await http.get('http://localhost:8080/posts')
    const post = response.data
    console.log(post)
    
  } catch (error) {
    console.log('Houve um erro: ', error)
  }
}

// async function getDataFromApi() {
//   try {
//     const response = await fetch('http://localhost:8080/posts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         title: 'Olá, mundo',
//         body: 'Lorem Ipsum dolor sit amet'
//       })
//     })
//     const posts = await response.json()
//     console.log('Sucesso')
//     console.log(posts)
//   } catch (error) {
//     console.log('Houve erro')
//     console.log(error)
//   }

//   fetch('http://localhost:8080/posts')
//   .then(res=> res.json())
//   .then(posts=> {
//     console.log(posts)
//   })
//   .catch(error=> {
//     console.log(error.message)
//   })
//  }

getDataFromApi()

reportWebVitals();