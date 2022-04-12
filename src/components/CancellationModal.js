import Modal from "./common/modal";
import TagIcon from "../icons/TagIcon";
import { useNavigate } from "react-router-dom";

export default function CancellationModal({ showModal, modalClosed }) {
  const navigate = useNavigate();
  return (
    <Modal show={showModal} modalClosed={modalClosed}>
      <div className="membership-wrapper">
        <div className="membership-wrapper__icon">
          <TagIcon />
        </div>
        <div className="membership-wrapper__info">
          <h2 className="membership-wrapper__info__title">
            Before You Go... <br />
            Would 50% Off For 6 Months Help?
          </h2>
          <p>
            We know things REALLY suck in the world right now - and many
            businesses and freelancers are struggling to stay afloat during this
            COVID-19 crisis.
          </p>
          <p style={{ fontWeight: "700" }}>
            So if you could use the extra cushion, grab 50% off for 6 months.
          </p>
          <p>We hope you’re staying safe and healthy!</p>
          <div className="membership-btns">
            <a href="https://wpmudev.com/" target="_blank" rel="noreferrer" className="btn btn-primary">50 % OFF For 6 Months</a>
            <button
              className="btn membership-btns__cancel"
              onClick={() => navigate("/cancellation-survey")}
            >
              No, thanks! I’ll cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
