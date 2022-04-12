import { useState } from "react";
import CancellationModal from "./components/CancellationModal";

function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <h1 onClick={() => setShowModal(true)}>Cancellation Survey</h1>

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
