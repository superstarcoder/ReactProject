// import React, {useState} from "react";


// const App = () => {
//   // const [{count, count2}, setCount] = useState({count:10, count2: 20});
//   const [count, setCount] = useState(20); 
//   const [count2, setCount2] = useState(20); 

//   return (
//     <div>
//       <button
//         onClick={() => {
//           // setCount(currentState => ({
//           //   count2: currentState.count2,
//           //   count: currentState.count + 1
//           //   }) )

//           setCount(c => c+1);
//           setCount2(c => c+2);
//           }
//         }>
//         +
//       </button>

//       <div>count1: {count}</div>
//       <div>count2: {count2}</div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (

    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default App;