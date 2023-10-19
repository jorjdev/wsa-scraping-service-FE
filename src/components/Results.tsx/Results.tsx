import React from "react";
import { ApiError, ApiResponse } from "../SearchAndResultsContainer/Container";

interface IResultsProps {
  className: string;
  fetchedResult: ApiResponse[] | ApiError;
}

const Results: React.FunctionComponent<IResultsProps> = ({
  className,
  fetchedResult,
}) => {
  const renderResults = () => {
    if ("error" in fetchedResult) {
      return (
        <div className="error-message">
          An error occurred: {fetchedResult.error}
        </div>
      );
    } else if (Array.isArray(fetchedResult) && fetchedResult.length > 0) {
      return (
        <div className="ml-5 mt-4">
          {"["}
          {fetchedResult.map((result, index) => (
            <div key={index} className="ml-8">
              {"{"}
              {result.title && (
                <div key="title">"title": "{result.title},"</div>
              )}
              {result.short_description && (
                <div key="short_description">
                  "short_description": "{result.short_description},"
                </div>
              )}
              {result.image && (
                <div key="image">"Image": "{result.image}",</div>
              )}
              {result.href && <div key="href">"href": "{result.href}",</div>}
              {result.sentiment && (
                <div key="sentiment">"sentiment": "{result.sentiment}",</div>
              )}
              {result.words && <div key="words">"words": "{result.words}"</div>}
              {"}"}
              {index < fetchedResult.length - 1 && <span>,</span>}
            </div>
          ))}
          {"]"}
        </div>
      );
    } else {
      return <div>No results to display.</div>;
    }
  };

  return (
    <div className={className}>
      <span className="text-black text-4xl sm:text-3xl font-semibold text-left">
        Results
      </span>
      <div className="sm:w-[90vw] overflow-y-auto max-height-[60vh] text-black md:w-[90vw] 2xl:w-[40vw] text-left items-left flex flex-col w-[80vw] sm:h-[50vh] h-[60vh] bg-[#ebebeb] border-2 border-black border-solid rounded-xl">
        {renderResults()}
      </div>
    </div>
  );
};

export default Results;
