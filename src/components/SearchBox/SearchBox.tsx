import SearchIcon from "../shared/SearchIcon";
import AutocompleteIcon from "../shared/Autocompleteicon";
import SubmitButton from "../shared/SubmitIcon";
import ErrorIcon from "../shared/ErrorIcon";
import CONSTANTS from "../../constants/constants";
import { useEffect, useState } from "react";
import { ApiResponse } from "../SearchAndResultsContainer/Container";
interface ISearchBoxProps {
  className: string;
  updateTargetURL: (input: string) => void;
  processedTargetURL: string;
  handleProcessedTargetURL: () => void;
  setResult: (input: ApiResponse[]) => void;
}

const SearchBox: React.FunctionComponent<ISearchBoxProps> = ({
  className,
  updateTargetURL,
  processedTargetURL,
  handleProcessedTargetURL,
  setResult,
}) => {
  const placeholder = "Enter targetURL or click the wand to autofill";
  const defaultURL = "https://wsa-test.vercel.app";
  const baseURL = "http://localhost:3002/scraper";
  const [targetURL, setTargetURL] = useState("");
  const [isErrorState, setIsErrorState] = useState(false);
  useEffect(() => {
    updateTargetURL(targetURL);
    if (!CONSTANTS.SUPPORTED_DOMAINS.has(targetURL) && targetURL.length > 0) {
      setIsErrorState(true);
    } else setIsErrorState(false);
  }, [targetURL]);

  function handleAutocompleteClick() {
    setTargetURL(defaultURL);
    updateTargetURL(defaultURL);
  }
  function handleUserInput(searchTerm: string) {
    setTargetURL(searchTerm);
    updateTargetURL(searchTerm);
  }
  async function submitUserInput() {
    try {
      const response = await fetch(
        `${baseURL}?targetURL=${processedTargetURL}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData: ApiResponse[] = await response.json();
      setResult(responseData);
    } catch (fetchError) {
      console.error("Fetch error:", fetchError);
      setIsErrorState(true);
    } finally {
      handleUserInput("");
      handleProcessedTargetURL();
    }
  }
  return (
    <div className={className}>
      <div className="absolute mt-[1rem] ml-3">
        <SearchIcon size={30} />
        {targetURL && (
          <span className="text-black absolute mt-5 mr-5 w-[25rem] sm:top-[-3.8rem] sm:left-[-2.2rem] sm:text-sm">
            {isErrorState
              ? CONSTANTS.ERROR_STATE_MESSAGE
              : CONSTANTS.ALL_FILTERS_MESSAGE}
          </span>
        )}
      </div>
      <input
        className={`pl-12 text-2xl placeholder-[#cdcdcd] sm:text-sm text-black border-[1px] h-[100%] w-[100%] rounded-3xl border-solid border-2 ${
          isErrorState
            ? "border-red-500 focus:border-red-500 focus:outline-none"
            : ""
        }`}
        type="text"
        value={targetURL}
        onChange={(event) => setTargetURL(event?.target.value)}
        placeholder={placeholder}
      />
      <div className="absolute right-4 top-4">
        <button
          disabled={isErrorState}
          onClick={
            targetURL
              ? () => submitUserInput()
              : () => handleAutocompleteClick()
          }
        >
          {isErrorState ? (
            <ErrorIcon size={30} />
          ) : targetURL ? (
            <SubmitButton size={30} color={"grey"} />
          ) : (
            <AutocompleteIcon size={35} />
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
