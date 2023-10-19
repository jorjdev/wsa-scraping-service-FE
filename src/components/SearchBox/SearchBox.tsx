import SearchIcon from "../shared/SearchIcon";
import AutocompleteIcon from "../shared/Autocompleteicon";
import SubmitButton from "../shared/SubmitIcon";
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
  useEffect(() => {
    updateTargetURL(targetURL);
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
      if (response.ok) {
        const responseData: ApiResponse[] = await response.json();
        setResult(responseData);
      }
    } catch (error) {
    } finally {
      handleUserInput("");
      handleProcessedTargetURL();
    }
  }

  return (
    <div className={className}>
      <div className="absolute mt-[1rem] ml-3">
        <SearchIcon size={30} />
      </div>
      <input
        className="pl-12 text-2xl placeholder:text-[#cdcdcd] sm:text-lg text-black border-[1px] h-[100%] w-[100%] rounded-3xl border-solid border-black"
        type="text"
        value={targetURL}
        onChange={(event) => setTargetURL(event?.target.value)}
        placeholder={placeholder}
      />
      <div
        className="absolute right-4 top-4"
        onClick={
          targetURL ? () => submitUserInput() : () => handleAutocompleteClick()
        }
      >
        {targetURL ? (
          <SubmitButton size={30} />
        ) : (
          <AutocompleteIcon size={35} />
        )}
      </div>
    </div>
  );
};

export default SearchBox;
