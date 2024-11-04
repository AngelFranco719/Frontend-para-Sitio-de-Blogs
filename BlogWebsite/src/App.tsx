import "./App.css";
import { BlogEditor } from "./Views/BlogEditor/BlogEditor";
import { BlogProvider } from "./BlogContext";

function App() {
  return (
    <>
      <BlogProvider>
        <div id="App">
          <BlogEditor></BlogEditor>
        </div>
      </BlogProvider>
    </>
  );
}

export default App;
