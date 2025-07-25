import Author from "./components/Author";
import Content from "./components/Content";
import Logo from "./components/Logo";
import { CvContextProvider } from "./CvContext";

function App() {
  return (
    <CvContextProvider>
      <Logo />
      <Content />
      <Author />
    </CvContextProvider>
  );
}

export default App;
