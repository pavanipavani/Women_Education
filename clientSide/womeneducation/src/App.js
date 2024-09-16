// import HomepageBackend from'./Components/Home/HomeBackEnd';
//  import React from 'react';
//  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Welcomepage from './Components/Home/Welcomepage';


// function App() {
//   return (
//     <div className="App">
     
//       {/* <HomepageBackend/> */}
//       {/* <Welcomepage/> */}
//        <Router>
//         <Switch>
//           <Route path="/homepage" component={HomepageBackend} />
//           <Route path='/welcomepage' component={Welcomepage} />
//         </Switch>
//       </Router> 
//     </div> 
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomepageBackend from './Components/Home/HomeBackEnd';
import Welcomepage from './Components/Home/Welcomepage';

function App() {
  return (
    <div className="App">
      {/* Other components */}
      <Router>
        <Routes>
          <Route path="/homepage" element={<HomepageBackend />} />
          <Route path="/welcomepage" element={<Welcomepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;