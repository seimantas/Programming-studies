import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export const ManeRoutes = (props: any) => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/asdasd">Something</Link>
      </header>

      {props.children}

      <Routes>
        <Route path="/" element={props} />
        <Route path="*" element={<p>Puslapis nerastas</p>} />
      </Routes>
    </BrowserRouter>
  );
};
