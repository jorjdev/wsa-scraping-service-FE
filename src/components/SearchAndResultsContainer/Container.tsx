import * as React from "react";
import Results from "../Results.tsx/Results";
import SearchBox from "../SearchBox/SearchBox";
import CheckBoxGroup from "../CheckBoxGroup/CheckBoxGroup";
import { useEffect, useState } from "react";

interface IContainerProps {
  className: string;
}
export interface ApiResponse {
  title: string;
  short_description: string;
  image: string;
  href: string;
  sentiment: string;
  words: number;
}

const Container: React.FunctionComponent<IContainerProps> = ({ className }) => {
  const [typedTargetURL, setTypedTargetURL] = useState("");
  const [queryParameters, setQueryParameters] = useState("");
  const [combinedValue, setCombinedValue] = useState("");
  const [result, setResult] = useState<ApiResponse[]>([]);

  useEffect(() => {
    setCombinedValue(typedTargetURL + queryParameters);
  }, [typedTargetURL, queryParameters]);
  function clearProcessedTargetURL() {
    setCombinedValue("");
    setQueryParameters("");
  }

  return (
    <div className={className}>
      <div className="flex sm:flex-col sm:items-center gap-3 md:flex-col flex-row">
        <SearchBox
          updateTargetURL={(input) => {
            setTypedTargetURL(input);
          }}
          setResult={(input) => setResult(input)}
          handleProcessedTargetURL={clearProcessedTargetURL}
          processedTargetURL={combinedValue}
          className="xl:ml-32 2xl:ml-32 mt-2 sm:w-[22rem] w-[32rem] 2xl:w-[40rem] h-[4rem] relative sm:rounded-3xl absolute"
        />
        <CheckBoxGroup
          targetURL={typedTargetURL}
          setQueryParameters={(input) => setQueryParameters(input)}
          className="flex flex-row items-center right-[45rem]"
        />
      </div>
      <Results
        fetchedResult={result}
        className="flex flex-col items-center gap-6"
      />
    </div>
  );
};

export default Container;
