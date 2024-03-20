import React from "react";
import Calendar from "./Calendar";
import Subjectlist from "./Subjectlist";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SimpleFooter from "./SimpleFooter";
import styled from "styled-components";

// Styled component for the subject container
const StyledSubjectContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Subject = ({ subjectName }) => {
  return (
    <>
      {/* Apply styled component */}
      <div className="flex items-center h-screen">
      <StyledSubjectContainer className="p-6">
        {/* Apply Tailwind CSS classes */}
        <h2 className="text-3xl font-bold text-center mb-8">{subjectName}</h2>
        <div className="flex justify-center ">
          <Calendar subject={subjectName} />
        </div>
      </StyledSubjectContainer>
      </div>
    </>
  );
};

export default Subject;
