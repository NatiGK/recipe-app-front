import './App.css';
import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';
import RecipePage from './pages/RecipePage';
import NavBar from './Components/NavBar/NavBar';

//temp import
import img1 from './bg.png';
import img2 from './bg2.png';

const recipe={
  pubDate:new Date(),
  userName:"NatnaelGashu",
  rating:2,
  ratingAmount:10020,
  title:"I don't care about the title right now.",
  description:" the thing is that there is a powelaksdjflk ajsdlkfdj lkjkasd f"+
              "in the ;lakjsd fl;kj sadflkj sdfdl;j af[osdcn[,da;loig sdj;sdd"+
              "in the ;lakjsd fl;kj sadflkj sdfdl;j af[osdcn[,da;loig sdj;sdd"+
              "in the ;lakjsd fl;kj sadflkj sdfdl;j af[osdcn[,da;loig sdj;sdd",
  prepTime:30,
  cookTime:10,
  servings:4,
  ingredients:[
    "athis ikjasd fja'ksjd fja djflka dffj laksdjf ajsldjf sieorkcv''k aa ",
    " jadsklfj jljasdjf jajlkdsjf jajlskdj jlaksjd fjlkja ddsfjlj asdffk ",
    " dfjajkdd fjaksdjdf jalsdkjf jasldkfj jlaksjdf kja dsjajs djl sdfjl "
  ],
  method:
    [
      {
        title:"Please yemawker ngr yelem",
        description:"in the ;lakjsd fl;kj sadflkj sdfdl;j af[osdcn[,da;loig sdj;sdd"+
                   "in the ;lakjsd fl;kj sadflkj sdfdl;j af[osdcn[,da;loig sdj;sdd"+
                   "in the ;lakjsd fl;kj sadflkj sdfdl;j af[osdcn[,da;loig sdj;sdd",
        imgs:
          [
            img1,
            img2,
            img1,
            img2
          ]
      },
      {
        title:"Ufffff, ahunem?! Please yemawker ngr yelem",
        description:"in the ;lakjsd fl;kj sadflkj sdfdl;j af[osdcn[,da;loig sdj;sdd"+
                   "in the ;lakjsd fl;kj sadflkj sdfdl;j af[osdcn[,da;loig sdj;sdd"+
                   "in the ;lakjsd fl;kj sadflkj sdfdl;j af[osdcn[,da;loig sdj;sdd",
        imgs:
          [
            img1,
            img2
          ]
      },
    ]
}

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/post">
            <PostPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/recipe/:id">
            <RecipePage recipe={recipe}/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
