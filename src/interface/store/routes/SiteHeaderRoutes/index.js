/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* ------------------------- External Dependencies -------------------------- */
import headerRoutes from 'pages/header'
import Front from 'workshop/pages/header/Front'

const PageRoutes = []
_.forEach(headerRoutes, (parent, parentKey)=> {
  const path = `/${parentKey.split(/(?=[A-Z])/)[1].toLowerCase()}`
  const RouteChildren =[]; _.forEach(parent, (component, key)=> key === 'Root' 
  ? null : RouteChildren.push({component,path: `/${key.split(/(?=[A-Z])/).join('/').toLowerCase()}/`}))
  const RouteTree = ()=>(
  <Switch>
    {RouteChildren.reverse().map(route=><Route path={route.path} component={route.component} /> )}
    <Route path={path} component={parent.Root} />
  </Switch>)

  PageRoutes.push(<Route path={path} component={RouteTree} />)
})

export default () => (
  <div>
    <Switch>
      {PageRoutes.map(Route=>Route)}
      <Route exact path="/" component={Front} />w
    </Switch>
  </div>);

