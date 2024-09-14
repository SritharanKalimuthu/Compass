import Sidebar from "../components/profile_components/Sidebar";
import { ubuntu } from "../components/fonts";

export default function Layout({ children }) {
  return (
      <>
        <div className={` ${ubuntu.className} antialiased bg-gray-200 flex h-screen flex-col md:flex-row md:overflow-hidden`}>
          <div className="w-full flex-none md:w-64">
            <Sidebar />
          </div>
          <div className="flex-grow md:overflow-y-auto">{children}</div>
        </div>
      </>
    );
  }