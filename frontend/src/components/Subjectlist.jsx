import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight } from 'react-icons/hi';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledSidebar = styled(Sidebar)`
  width: 400px;
  background-color: #fff; /* White background */
  border-radius: 10px;
  border: 2px solid #ccc; /* Light gray border */
  margin: 0 auto; /* Center the sidebar horizontally */
  padding: 20px; /* Add padding */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
`;

const StyledItem = styled(Sidebar.Item)`
  padding: 15px 20px;
  color: #333;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    background-color: #f0f0f0; /* Light gray on hover */
    transform: translateX(5px);
  }
`;

const StyledHeading = styled.h2`
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const colors = ['#FF5733', '#FFC300', '#33FF57', '#33A7FF', '#FF3366', '#FF5733']; // Array of different colors

function SubjectList() {
  const navigate = useNavigate();

  return (
    <div className='flex items-center h-screen'>
      <StyledSidebar aria-label="Subject sidebar">
      <StyledHeading className='font-bold'>Subjects</StyledHeading>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {/* Map through each item and assign a different color */}
          {['Signal and System', 'Discrete Mathematics', 'Numerical Analysis and Probability', 'Software Engineering', 'Design and Analysis of Algorithm', 'Computer Architecture'].map((subject, index) => (
            <StyledItem
              key={index}
              style={{
                background: `linear-gradient(135deg, ${colors[index % colors.length]}, #fff)`,
                border: `2px solid ${colors[index % colors.length]}`
              }}
              onClick={() => {
                navigate(`/${subject}`);
              }}
            >
              {subject}
              <HiArrowSmRight />
            </StyledItem>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </StyledSidebar>
    </div>
  );
}

export default SubjectList;
