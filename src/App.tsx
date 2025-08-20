import React from 'react'

const ComponentA = React.lazy(() => import('./components/ComponentA'))
const ComponentB = React.lazy(() => import('./components/ComponentB'))

const App = () => {
  return (
    <div>
        <h1>Webpack code splitting with typescript</h1>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ComponentA />
          <ComponentB />
        </React.Suspense>
    </div>
  )
}

export default App