import "./assets/css/index.css";
import Modal from "./modals";
import { createModal, useModals } from "./utils/modal";
function App() {
  const modals = useModals();

  console.log(modals);
  return (
    <div className="App">
      <>
        {modals.length > 0 && <Modal />}
        <button
          onClick={() => {
            createModal("login");
          }}
        >
          Modal Aç
        </button>
      </>
    </div>
  );
}

export default App;
