import { useEffect, useState } from "react";
import CONSTANTS from "../../constants/constants";

interface ICheckBox {
  id: number;
  label: string;
  isChecked: boolean;
  query: string;
}

interface ICheckBoxGroupProps {
  className: string;
  targetURL: string;
  setQueryParameters: (input: string) => void;
}

const initialState: ICheckBox[] = [
  { id: 1, label: "titles", isChecked: false, query: "&includeTitles=true" },
  {
    id: 2,
    label: "descriptions",
    isChecked: false,
    query: "&includeDescriptions=true",
  },
  {
    id: 3,
    label: "pictures",
    isChecked: false,
    query: "&includesPicture=true",
  },
  { id: 4, label: "links", isChecked: false, query: "&includesAnchor=true" },
  {
    id: 5,
    label: "sentiment",
    isChecked: false,
    query: "&includesSentimentAnalysis=true",
  },
  {
    id: 6,
    label: "words count",
    isChecked: false,
    query: "&includesWordsCounter=true",
  },
];

const CheckBoxGroup: React.FunctionComponent<ICheckBoxGroupProps> = ({
  className,
  setQueryParameters,
  targetURL,
}) => {
  const [checkboxes, setCheckboxes] = useState<ICheckBox[]>(initialState);
  useEffect(() => {
    if (!targetURL) {
      setCheckboxes(
        [...checkboxes].map((checkbox) => {
          return { ...checkbox, isChecked: (checkbox.isChecked = false) };
        })
      );
      setQueryParameters("");
    }
  }, [targetURL]);

  function handleToggleCheckbox(checkbox: ICheckBox) {
    const updatedCheckboxes = checkboxes.map((item) =>
      item.id === checkbox.id ? { ...item, isChecked: !item.isChecked } : item
    );

    setCheckboxes(updatedCheckboxes);

    const newTargetURL = updatedCheckboxes
      .filter((item) => item.isChecked)
      .map((item) => item.query)
      .reduce((acc, query) => acc + query, "");

    setQueryParameters(newTargetURL);
  }

  return (
    <div className={className}>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-12 md:grid md:grid-cols-2 md:gap-x-12 lg:grid lg:grid-cols-2 lg:gap-x-12 flex flex-col gap-1">
        {checkboxes.map((checkbox) => (
          <div key={checkbox.id} className="text-black flex flex-row gap-1">
            <input
              className="w-[1.4rem] h-[1.4rem]"
              type="checkbox"
              disabled={!CONSTANTS.URL_REGEX.test(targetURL)}
              checked={checkbox.isChecked}
              onChange={() => {
                handleToggleCheckbox(checkbox);
              }}
            />
            <span className={`${targetURL || "text-[#cdcdcd]"}`}>
              {checkbox.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxGroup;
