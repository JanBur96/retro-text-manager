import { useRef } from "react";
import { useStore } from "../../store";
import "./Editor.css";

export default function Editor() {
  const files = useStore((state) => state.files);
  const activeFile = useStore((state) => state.activeFileId);
  const textContent = files[3].textContent;
  const outputRef = useRef();
  const saveActiveFile = useStore((state) => state.saveActiveFile);

  const bold = () => {
    console.log(String(document.execCommand));
    document.execCommand("bold");
  };

  const italic = () => {
    document.execCommand("italic");
  };

  const saveFile = () => {
    console.log(outputRef.current.innerHTML);
    saveActiveFile(outputRef.current.innerHTML); // Use innerHTML instead of innerText
  };

  return (
    <main className="editor">
      <section className="editor__options">
        <div>
          <button onClick={bold}>
            <strong>B</strong>
          </button>
          <button onClick={italic}>
            <em>I</em>
          </button>
        </div>
        <div>
          <button onClick={saveFile}>Save</button>
        </div>
      </section>
      <div className="editor__textarea-wrapper">
        <div
          className="output"
          contentEditable
          ref={outputRef}
          dangerouslySetInnerHTML={{ __html: textContent }}
        ></div>
      </div>
    </main>
  );
}
