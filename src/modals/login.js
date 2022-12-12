import { createModal } from "../utils/modal";
import Header from "./components/Header";

export default function LoginModal({ data, close }) {
  return (
    <div className="w-[500px]">
      <Header title="Giriş Yap" />
      <br />
     
      <button
        onClick={() => {
          createModal("register", { name: "Yasin", surname: "Çoban" });
        }}
      >
        Register Modal
      </button>
      <br />
      {/* <button onClick={destroyModal}>Kapat</button> */}
    </div>
  );
}
