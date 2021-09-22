import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>ReactTrack</p>
        <p id="wh">Dave</p>
        <p>SIGNOUT</p>
      </header>
      <section className="container">
        <div className="search-bar">
          <div>
            <p>X</p>
          </div>
          <div className="ad">
            <label htmlFor="search">
              <input type="text" placeholder="Search all tracks" />
            </label>
          </div>
          <div>
            <p>S</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
