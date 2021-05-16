import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const portalroot = document.getElementById("modal-root");

  return ReactDOM.createPortal(children, portalroot);
};

export default Portal;
