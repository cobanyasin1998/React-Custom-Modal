import { destroyModal, createModal } from "../utils/modal";
import Header from "./components/Header";

export default function RegisterModal({ data, close }) {
  return (
    <div className="w-[500px]">
      <Header title="Kayıt Ol" />
      <br />
      {data.name} - {data.surname}
     
   
      {/* <button onClick={destroyModal}>Kapat</button> */}
    </div>
  );
}
