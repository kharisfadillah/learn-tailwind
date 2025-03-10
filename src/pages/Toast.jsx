import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const notifySukses = () => toast.success("Sukses! Data telah disimpan.");
  const notifyGagal = () => toast.error("Gagal! Data gagal disimpan.");

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <input
        className="p-2 border border-gray-400 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none"
        type="text"
        name="Nama"
      />
      <button
        onClick={notifySukses}
        className="p-2 bg-green-500 text-white rounded"
      >
        Tampilkan Notifikasi Sukses
      </button>
      <button
        onClick={notifyGagal}
        className="p-2 bg-red-500 text-white rounded"
      >
        Tampilkan Notifikasi Gagal
      </button>
      <ToastContainer />
    </div>
  );
};

export default Toast;
