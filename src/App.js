import MarkdownEditor from "./components/MarkdownEditor";

function App() {
  return (
    <div className="container">
      <h1 className="title">Markdown Editor</h1>
      <ul>
        <li>
          <span>h1 = </span>#
        </li>
        <li>
          <span>h2 = </span>##
        </li>
        <li>
          <span>Bold = </span>** **
        </li>
        <li>
          <span>Italic = </span>*** ***
        </li>
      </ul>
      <MarkdownEditor />
    </div>
  );
}

export default App;
