import './App.css'
import React from 'react'
import first from './assets/first.jpg'
import second from './assets/second.jpg'
import third from './assets/third.jpg'

const App = () => {
  const [curImg, setCurImg] = React.useState('first')

  const showImgMap = {
    'first': () => <img src={first} onClick={() => setCurImg('second')} alt='' />,
    'second': () => <img src={second} onClick={() => setCurImg('third')} alt=''/>,
    'third': () => <img src={third} onClick={() => setCurImg('second')} alt=''/>
  }

  return (
    <main>
      <section>
        <div>
          {showImgMap[curImg]()}
        </div>
      </section>
    </main>
  )
}

export default App
