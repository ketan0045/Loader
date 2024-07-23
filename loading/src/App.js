import "./App.css";
import React, { useState, useEffect } from "react";
import Loading from "./component/Loading";
import Modal from "./component/Modal";
import ToggleMode from "./component/ToggleMode";

function App() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  useEffect(() => {
    setShowModal(true);
  }, []);

  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {/* <button onClick={handleOpenModal}>Open Modal</button> */}
          {showModal && <Modal onClose={handleCloseModal} /> }
          <ToggleMode/>
        </div>
      )}
    </div>
  );
}

export default App;


// import React from 'react'
// import "./App.css";
// import ToggleMode from './component/ToggleMode'

// const App = () => {
//   return (
//     <div>
//       <ToggleMode/>
//     </div>
//   )
// }

// export default App


