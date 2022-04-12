import { useState } from "react";
import BottomArrowIcon from "../../icons/BottomArrowIcon";

export default function MultipleDropDown() {
  const [isOpenList, setIsOpenList] = useState(false);

  return (
    <div
      className={`${
        isOpenList
          ? "dropdown__wrapper active__dropDown__wrapper"
          : "dropdown__wrapper"
      }`}
    >
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
          <label
            className="dropdown__wrapper__lists__list"
            htmlFor="product_one"
          >
            <input type="checkbox" id="product_one" /> Product #1
          </label>
          <label
            className="dropdown__wrapper__lists__list"
            htmlFor="product_two"
          >
            <input type="checkbox" id="product_two" /> Product #2
          </label>
          <label
            className="dropdown__wrapper__lists__list"
            htmlFor="product_three"
          >
            <input type="checkbox" id="product_three" /> Product #3
          </label>
          <label
            className="dropdown__wrapper__lists__list"
            htmlFor="product_four"
          >
            <input
              type="radio"
              value="product_four"
              id="product_four"
              name="product_issue"
            />{" "}
            Product #4
          </label>
        </div>
      )}
    </div>
  );
}
