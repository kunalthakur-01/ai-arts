import { Route, Switch } from 'react-router-dom';

import './App.css';
import Authentication from './components/authentication page/Authentication';
import Categories from './components/category page/Categories';
import Create from './components/create page/Create';
import Explore from './components/explore page/Explore';
import HomePage from './components/homepage/HomePage';
import Layout from './components/Layout';
import Editing from './components/others/Editing';
import License from './components/others/License';
import TermsAndCondition from './components/others/TermsAndCondition';
import Pricing from './components/pricing page/Pricing';

function App() {
  return (
    <div className='app'>
      <Layout>
        <Switch>
          <Route path={'/'} exact>
            <HomePage />
          </Route>

          <Route path={'/explore'}>
            <Explore />
          </Route>

          <Route path={'/category/:categories'}>
            <Categories />
          </Route>

          <Route path={'/create'}>
            <Create />
          </Route>

          <Route path={'/pricing'}>
            <Pricing />
          </Route>

          <Route path={'/license'}>
            <License />
          </Route>

          <Route path={'/editing'}>
            <Editing />
          </Route>

          <Route path={'/terms&condition'}>
            <TermsAndCondition />
          </Route>

          <Route path={'/signup'}>
            <Authentication />
          </Route>

          <Route path={'/login'}>
            <Authentication />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
