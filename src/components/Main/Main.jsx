import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import Editor from "../Editor/Editor";

export default function Main() {
  return (
    <main className="main">
      <Sidebar />
      <Editor />
    </main>
  );
}
