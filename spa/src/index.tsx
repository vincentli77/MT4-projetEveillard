import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { Home } from './view/Home/Home'
import { TestCustom } from './view/testCustom/TestCustom'
import { SingleCard } from './view/SingleCard/SingleCard'
import Error404 from './view/Error404'
import Header from './view/Header/Header'
import './index.css'

import createId from './dependencies/createId'
import TranslationStorageACL from './dependencies/storage/TranslationStorageACL'
import { Dependencies, Language } from './domain'
// import AllTranslations from './views/AllTranslations'

export const dependencies: Dependencies<Language> = {
  createId: createId,
  storage: new TranslationStorageACL<Language>(),
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/single_card/:id" component={SingleCard} />
        <Route exact path="/single_card" component={SingleCard} />
        <Route exact path="/test_custom" component={TestCustom} />
        <Route component={Error404} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
