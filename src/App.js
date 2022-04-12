import { useState } from "react";
import CancellationModal from "./components/CancellationModal";

function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button style={{margin: '50px'}} type="sumit" className="btn btn-secondary" onClick={() => setShowModal(true)}>Cancel Membership?</button>

      {showModal && (
        <CancellationModal
          showModal={showModal}
          modalClosed={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default Home;
