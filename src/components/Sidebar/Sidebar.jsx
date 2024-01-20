import "../Sidebar/Sidebar.css";
import iconFolder from "../../assets/icon-folder.png"; // Make sure the path is correct
import iconTextFile from "../../assets/icon-text-file.png"; // Make sure the path is correct
import { useStore } from "../../store";

export default function Sidebar() {
  const files = useStore((state) => state.files);
  const activeFile = useStore((state) => state.activeFileId);
  const setActiveFile = useStore((state) => state.setActiveFile);

  return (
    <div className="sidebar">
      <div className="sidebar__options">
        Files
        <button className="sidebar__button">+</button>
      </div>
      <ul className="sidebar__list">
        {files.map((file) => (
          <li
            onClick={() => {
              setActiveFile(file.id);
            }}
            className={`sidebar__item ${
              activeFile === file.id ? "sidebar__item--active" : ""
            }`}
            key={file.id}
          >
            <img
              className="sidebar__item-icon"
              src={file.fileType === "folder" ? iconFolder : iconTextFile}
              alt="folder"
            />
            {file.fileName}
          </li>
        ))}
      </ul>
    </div>
  );
}
