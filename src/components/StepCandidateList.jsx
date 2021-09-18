import React from "react";

import CandidateCard from "./CandidateCard.jsx";
import { includesIgnoreCase } from "../utilities/helpers.js";

import { Row } from "react-bootstrap";
import ErrorDisplay from "./ErrorDisplay";

const StepCandidateList = ({ candidates, searchText }) => {
  let searchResult;
  if (searchText === "") {
    searchResult = candidates;
  } else {
    searchResult = candidates.filter((c) => {
      return includesIgnoreCase(c.name, searchText);
    });
  }
  

  return searchResult.length !== 0 ? (
    <Row className="g-4 m-5">
      {searchResult.map((item) => (
        <CandidateCard key={item.id} candidate={item} />
      ))}
    </Row>
  ) : (
    <ErrorDisplay message="No result" />
  );
};

export default StepCandidateList;