import { create } from "zustand";

export const useStore = create((set) => ({
  files: [
    {
      id: 1,
      fileName: "Ordner 1",
      fileType: "folder",
    },
    {
      id: 2,
      fileName: "Ordner 2",
      fileType: "folder",
    },
    {
      id: 3,
      fileName: "Ordner 3",
      fileType: "folder",
    },
    {
      id: 4,
      fileName: "Neuer Text",
      fileType: "text",
      textContent: "Hello this is a test",
    },
  ],
  activeFileId: 4,
  editorState: "",
  setActiveFile: (id) => set({ activeFileId: id }),
  saveActiveFile: (content) =>
    set((state) => {
      console.log(content);
      const file = state.files.find((file) => file.id === state.activeFileId);
      file.textContent = content;
      return { files: [...state.files] };
    }),
}));
