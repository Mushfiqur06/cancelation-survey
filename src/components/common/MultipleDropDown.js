import { useEffect, useState } from "react";
import BottomArrowIcon from "../../icons/BottomArrowIcon";

export default function MultipleDropDown({ dropDownList }) {
  const [isOpenList, setIsOpenList] = useState(false);
  const [checkedState, setCheckedState] = useState(new Array(dropDownList.length).fill(false));
  const [data, setData] = useState([])

  useEffect(() => {
    setData(dropDownList);
  }, [dropDownList])

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

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
        <div className="dropdown__wrapper__button__text">
          {checkedState.filter(Boolean).length
            ? `${checkedState.filter(Boolean).length} Products Selected`
            : "Select Products"}
        </div>{" "}
        <BottomArrowIcon />
      </div>
      {isOpenList && (
        <div className="dropdown__wrapper__lists">
          {data?.map((item, index) => (
            <label
              className="dropdown__wrapper__lists__list"
              htmlFor={item.id}
            >
              <input
                type="checkbox"
                id={item.id}
                checked={checkedState[item.id - 1]}
                onChange={() => handleOnChange(item.id - 1)}
              />{" "}
              {item.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
