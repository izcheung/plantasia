import { RemoveScroll } from "react-remove-scroll";
import { useRef } from "react";

const ModalWrapper = (props) => {
  const { children, isOpen, onClose } = props;
  const backgroundRef = useRef();
  if (!isOpen) return null;

  return (
    <RemoveScroll>
      <div
        ref={backgroundRef}
        className="fixed top-0 left-0 items-start w-full h-full bg-black/30 backdrop-blur-sm flex justify-end font-lato"
        onClick={(e) => {
          if (e.target === backgroundRef.current) {
            onClose();
          }
        }}
      >
        <button
          className="absolute top-0 right-0 text-emerald-400 text-3xl p-2"
          onClick={onClose}
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
        {children}
      </div>
    </RemoveScroll>
  );
};
export default ModalWrapper;
