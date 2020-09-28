import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Category from './pages/Category';
import Landing from './pages/Home';
import Login from './pages/About';


import Ebooks from './pages/ListCategoryBook/Ebooks';
import Academicos from './pages/ListCategoryBook/Academicos';
import Escolares from './pages/ListCategoryBook/Escolares';
import Ti from './pages/ListCategoryBook/Ti';
import Romance from './pages/ListCategoryBook/Romance';
import Fcientifica from './pages/ListCategoryBook/Fcientifica';
import Artigos from './pages/ListCategoryBook/Artigos';
import Outros from './pages/ListCategoryBook/Outros';



function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/category" component={Category}/>
            <Route path="/Sobre" component={Login}/>

            <Route path="/listbooks/Ebooks" component={Ebooks}/>
            <Route path="/listbooks/academicos" component={Academicos}/>
            <Route path="/listbooks/Escolares" component={Escolares}/>
            <Route path="/listbooks/Ti" component={Ti}/>
            <Route path="/listbooks/Romance" component={Romance}/>
            <Route path="/listbooks/Fcientifica" component={Fcientifica}/>
            <Route path="/listbooks/Artigos" component={Artigos}/>
            <Route path="/listbooks/Outros" component={Outros}/>

        </BrowserRouter>
    )
}

export default Routes;