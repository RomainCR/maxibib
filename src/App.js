import './App.css';

// import { NestedEditableDemo } from './NestedEditableDemo'
import { Test } from './Test'
import { Description } from './Description'
import { News } from './News'

function App() {

  return (
    <>
      <div className="header">
        <h1>MaxiBib</h1>
      </div>

      <div className="global">
        <Description />
        <Test />
        <News />
      </div>
      {/* <NestedEditableDemo /> */}
    </>
  );
}

export default App;
