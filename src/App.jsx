import { LazyMotion, domAnimation } from "framer-motion";
import Home from "./Home";

// Components use the lightweight `m.*` elements; LazyMotion supplies the animation, hover and
// in-view features synchronously (no drag/layout code is bundled). `strict` makes any
// accidental `motion.*` usage throw in development.
function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen bg-[#030014] text-gray-100 relative">
        <Home />
      </div>
    </LazyMotion>
  );
}

export default App;
