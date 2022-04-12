import { useState } from "react";
import BottomArrowIcon from "../../icons/BottomArrowIcon";

export default function MultipleDropDown() {
  const [isOpenList, setIsOpenList] = useState(false);

  return (
    <div className={`${isOpenList ? 'dropdown__wrapper active__dropDown__wrapper' : 'dropdown__wrapper'}`}>
      <div
        className="dropdown__wrapper__button"
        onClick={() =>
          isOpenList ? setIsOpenList(false) : setIsOpenList(true)
        }
      >
        <div className="dropdown__wrapper__button__text">Select</div>{" "}
        <BottomArrowIcon />
      </div>
      {isOpenList && (
        <div className="dropdown__wrapper__lists">
          <div className="dropdown__wrapper__lists__list"><input type="checkbox" /> Text One</div>
          <div className="dropdown__wrapper__lists__list"><input type="checkbox" /> Text Two</div>
          <div className="dropdown__wrapper__lists__list"><input type="checkbox" /> Text Three</div>
          <div className="dropdown__wrapper__lists__list"><input type="checkbox" /> Text Four</div>
        </div>
      )}
    </div>
  );
}
