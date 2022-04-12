import CloseIcon from "../../../icons/CloseIcon";

export default function Modal(props) {
  return (
    <div
      className="modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      <div className="modal__body">
        {props.show ? (
          <div className="modal__body__close-icon" onClick={props.modalClosed}>
            <CloseIcon />
          </div>
        ) : null}

        {props.children}
      </div>
    </div>
  );
}
