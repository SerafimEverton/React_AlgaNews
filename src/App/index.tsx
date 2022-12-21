import { info } from "console";
import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditorProfile from "./Features/EditorProfile";
import EditorsListView from "./Views/EditorsList.views";
import Home from "./Views/Home.views";
import NotFound404 from "./Views/NotFound404.view";
import PostCreateView from "./Views/PostCreateView";

export default function App(){

    useEffect(()=>{

       window.onunhandledrejection = function(error: PromiseRejectionEvent){

        info({
            title: error.reason.response?.data.title || 'Erro',
            description: error.reason.response?.data.detail || error.reason.message
        })

       } 

    }, [])

return<BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/editores" exact component={EditorsListView} />
        <Route path="/editores/:id" exact component={EditorProfile} />
        <Route path="/posts/criar" exact component={PostCreateView} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>

}