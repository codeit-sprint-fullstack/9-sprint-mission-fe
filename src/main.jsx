import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import './styles/global.css';
import './styles/index.css';
=======
import './styles/global.css'
import './styles/index.css'
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
=======
import './styles/global.css';
import './styles/index.css';
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
<<<<<<< HEAD
<<<<<<< HEAD
);
=======
)
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
=======
);
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
