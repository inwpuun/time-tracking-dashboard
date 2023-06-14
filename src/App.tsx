// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { DetailedBox } from './mainPage/DetailedBox'
import { MainBox } from './mainPage/MainBox'
import { Attribution } from './mainPage/Attribution'
import "./../css/App.css"

import {Daily} from './mainPage/type/Daily'
import {Weekly} from './mainPage/type/Weekly'
import {Monthly} from './mainPage/type/Monthly'

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
          <Route path="/" Component={Daily} />
          <Route path="/weekly" Component={Weekly} />
          <Route path="/monthly" Component={Monthly} />
      </Routes>

      {/* <body>
      <div className="mainBox">
        <MainBox type="Week" />
      </div>
      <div className="Boxes">
        <DetailedBox title="Work" type="Week" previous={10} present={20} />
        <DetailedBox title="Play" type="Week" previous={10} present={20} />
        <DetailedBox title="Study" type="Week" previous={10} present={20} />
        <DetailedBox title="Exercise" type="Week" previous={10} present={20} />
        <DetailedBox title="Social" type="Week" previous={10} present={20} />
        <DetailedBox title="Self Care" type="Week" previous={10} present={20} />
      </div>
      </body>
      <Attribution /> */}
    </>
  )
}

export default App
