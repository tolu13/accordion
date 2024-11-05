import { useRef, useState } from "react";
import UseOutsideClick from "./index";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);

  const ref = useRef();
  UseOutsideClick(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div  ref={ref}>
          <h2>This is a random content</h2>
          <p>
            please Click outside of this to close this. otherwise it wont close
            when you click this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
