import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../../icons/backArrowIcon";
import BlackExclamationIcon from "../../icons/BlackExclamationIcon";
import ExclamationIcon from "../../icons/ExclamationIcon";
import LeftArrowIcon from "../../icons/LeftArrowIcon";
import MultipleDropDown from "../common/MultipleDropDown";
import {productsIssues} from './../../data/dropdownData'

export default function CancellationSuvey() {
  const navigate = useNavigate();
  const [selectCancellationSurvey, setSelectCancellationSurvey] = useState("");
  const [foundIssueTab, setFoundIssueTab] = useState("one-mejor-problem");

  
  return (
    <div className="cancellation-survey__body">
      <div className="cancellation-survey__container">
        <div className="cancellation-survey__header">
          <div
            onClick={() => navigate(-1)}
            className="cancellation-survey__header__icon"
          >
            <BackArrowIcon />
          </div>
          <h3 className="cancellation-survey__header__title">
            Cancellation Survey
          </h3>
        </div>
        <div className="cancellation-survey">
          <div className="cancellation-survey__sub-header">
            <h2 className="cancellation-survey__sub-header__title">
              We’re sad to see you go...{" "}
            </h2>
            <p className="cancellation-survey__sub-header__text">
              Can you tell us why you want to cancel your membership?
            </p>
          </div>
          <div className="cancellation__options">
            <label
              className="cancellation__options__info"
              onClick={() =>
                setSelectCancellationSurvey("recurring-membership")
              }
              htmlFor="recurring-membership"
            >
              <div
                className={`${
                  selectCancellationSurvey === "recurring-membership"
                    ? "cancellation__options__info__radio active"
                    : "cancellation__options__info__radio"
                }`}
              >
                <input
                  className="cancellation__options__info__input"
                  type="radio"
                  value="recurring-membership"
                  name="cancellation_survey"
                  id="recurring-membership"
                />{" "}
                I didn’t realize it was a recurring membership
              </div>
            </label>
            <label
              className="cancellation__options__info"
              onClick={() =>
                setSelectCancellationSurvey("found-better-solution")
              }
              htmlFor="found-better-solution"
            >
              <div
                className={`${
                  selectCancellationSurvey === "found-better-solution"
                    ? "cancellation__options__info__radio active"
                    : "cancellation__options__info__radio"
                }`}
              >
                <input
                  className="cancellation__options__info__input"
                  type="radio"
                  value="found-better-solution"
                  name="cancellation_survey"
                  id="found-better-solution"
                />{" "}
                Found a better solution
              </div>
              {selectCancellationSurvey === 'found-better-solution' && (
                <div className="cancellation__options__info__content">
                  <div className="issues__message">
                    <div className="issues__message__textarea">
                      <textarea placeholder="What is the better solution? If you don’t mind sharing. Your feedback is much appreaciated!" />
                    </div>
                  </div>
                </div>
              )}
            </label>
            <label
              className="cancellation__options__info"
              onClick={() => setSelectCancellationSurvey("too-expensive")}
              htmlFor="too-expensive"
            >
              <div
                className={`${
                  selectCancellationSurvey === "too-expensive"
                    ? "cancellation__options__info__radio active"
                    : "cancellation__options__info__radio"
                }`}
              >
                <input
                  className="cancellation__options__info__input"
                  type="radio"
                  value="too-expensive"
                  id="too-expensive"
                  name="cancellation_survey"
                />{" "}
                It’s too expensive
              </div>
            </label>
            <label
              className="cancellation__options__info"
              onClick={() =>
                setSelectCancellationSurvey("not-working-properly")
              }
              htmlFor="not-working-properly"
            >
              <div
                className={`${
                  selectCancellationSurvey === "not-working-properly"
                    ? "cancellation__options__info__radio active"
                    : "cancellation__options__info__radio"
                }`}
              >
                <input
                  className="cancellation__options__info__input"
                  type="radio"
                  value="not-working-properly"
                  id="not-working-properly"
                  name="cancellation_survey"
                />{" "}
                Bugs, things not working properly
              </div>
              {selectCancellationSurvey === "not-working-properly" && (
                <div className="cancellation__options__info__content">
                  <div className="dropdown">
                    <div className="dropdown__label">
                      <p>Which product(s) did you have an issue with?</p>{" "}
                      <BlackExclamationIcon />
                    </div>
                    <MultipleDropDown dropDownList={productsIssues} />
                  </div>
                  <div className="tabs">
                    <p>What was it?</p>
                    <div className="tabs__list">
                      <div
                        className={`${
                          foundIssueTab === "one-mejor-problem"
                            ? "tabs__list__single active"
                            : "tabs__list__single"
                        }`}
                        onClick={() => setFoundIssueTab("one-mejor-problem")}
                      >
                        One Major Problem
                      </div>
                      <div
                        className={`${
                          foundIssueTab === "various-things"
                            ? "tabs__list__single active"
                            : "tabs__list__single"
                        }`}
                        onClick={() => setFoundIssueTab("various-things")}
                      >
                        Various things
                      </div>
                    </div>
                  </div>
                  <div className="issues__message">
                    <div className="issues__message__label">
                      <p>What problem(s) did you encounter?</p>
                      <BlackExclamationIcon />
                    </div>
                    <div className="issues__message__textarea">
                      <textarea />
                    </div>
                  </div>
                </div>
              )}
            </label>
            <label
              className="cancellation__options__info"
              onClick={() => setSelectCancellationSurvey("single-plugin")}
              htmlFor="single-plugin"
            >
              <div
                className={`${
                  selectCancellationSurvey === "single-plugin"
                    ? "cancellation__options__info__radio active"
                    : "cancellation__options__info__radio"
                }`}
              >
                <input
                  className="cancellation__options__info__input"
                  type="radio"
                  value="single-plugin"
                  id="single-plugin"
                  name="cancellation_survey"
                />{" "}
                I just want to pay for a single plugin
              </div>
            </label>

            <label
              className="cancellation__options__info"
              onClick={() => setSelectCancellationSurvey("not-using-wordpress")}
              htmlFor="not-using-wordpress"
            >
              <div
                className={`${
                  selectCancellationSurvey === "not-using-wordpress"
                    ? "cancellation__options__info__radio active"
                    : "cancellation__options__info__radio"
                }`}
              >
                <input
                  className="cancellation__options__info__input"
                  type="radio"
                  value="not-using-wordpress"
                  id="not-using-wordpress"
                  name="cancellation_survey"
                />{" "}
                Not using WordPress anymore
              </div>
            </label>

            <label
              className="cancellation__options__info"
              onClick={() => setSelectCancellationSurvey("other")}
              htmlFor="other"
            >
              <div
                className={`${
                  selectCancellationSurvey === "other"
                    ? "cancellation__options__info__radio active"
                    : "cancellation__options__info__radio"
                }`}
              >
                <input
                  className="cancellation__options__info__input"
                  type="radio"
                  value="other"
                  id="other"
                  name="cancellation_survey"
                />{" "}
                Other
              </div>
            </label>
          </div>
          <div className="cancellation-survey__warning">
            <div className="cancellation-survey__warning__icon">
              <ExclamationIcon />
            </div>
            <div className="cancellation-survey__warning__text">
              <p>
                Are you absolutely sure you want to cancel? If you do you'll
                lose access to so many cool things. And you'll lose the chance
                to stay on this plan at the same cost ongoing (regardless of
                future price increases).
              </p>
            </div>
          </div>
          <div className="cancellation-survey__btns">
            <button className="btn" onClick={() => navigate(-1)}>
              <LeftArrowIcon /> Back
            </button>
            <button className="btn btn-secondary">Cancel Membership</button>
          </div>
        </div>
      </div>
    </div>
  );
}
