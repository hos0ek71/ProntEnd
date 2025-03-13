import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 223px;
  height: 400px;
  border: 1px solid #799fc4;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
`;

const TextInput = styled.input`
  width: 166px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
`;

const CheckBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  gap: 10px;

  input {
    cursor: pointer;
  }
`;

const ApplyButton = styled.button`
  width: 40px;
  height: 20px;
  border: 1px solid #799fc4;
  background-color: white;
  color: #799fc4;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #799fc4;
    color: white;
  }
`;

const DropdownContainer = styled.div`
  margin-top: 15px;
`;

const Select = styled.select`
  width: 166px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
`;

const SelectContainer2 = styled.div`
  display:flex;
  gap: 5px;
  align-items: center;
  font-size: 13px;
`;

export default function Search() {
  const [isSearchExcluded, setIsSearchExcluded] = useState(false); // 첫 번째 체크박스 상태
  const [isSexual, setIsSexual] = useState(false); // 두 번째 체크박스 상태
  const [isSexual2, setIsSexual2] = useState(false); // 두 번째 체크박스 상태
  const [selectedValue, setSelectedValue] = useState("option1"); // 드롭다운 선택값 상태

  // 첫 번째 체크박스 핸들러
  const handleSearchExcludedChange = () => {
    setIsSearchExcluded((prev) => !prev);
  };

  // 두 번째 체크박스 핸들러
  const handleSexualChange = () => {
    setIsSexual((prev) => !prev);
  };

  const handleSexualChange2 = () => {
    setIsSexual2((prev) => !prev);
  }

  // 드롭다운 핸들러
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Container>
      <h3>결과내 검색</h3>
      <TextInput placeholder="검색어 입력" />
      <CheckBox>
        <Label>
          <input
            type="checkbox"
            name="searchOption"
            checked={isSearchExcluded}
            onChange={handleSearchExcludedChange}
          />
          <p style={{ color: "#9A9292", fontSize: "18px" }}>검색어 제외</p>
          <ApplyButton>적용</ApplyButton>
        </Label>
      </CheckBox>
      <p style={{fontWeight: 'bold'}}>검색조건</p>
      <DropdownContainer>
      <span style={{ fontSize: '13px' , marginRight: '5px'}}>경력</span> 
        <Select value={selectedValue} onChange={handleDropdownChange}>
          <option value="option1"></option>
          <option value="option2">1년이하 </option>
          <option value="option3">1년이상 </option>
          <option value="option4">5년이상 </option>
        </Select>
      </DropdownContainer>

      
      <SelectContainer2>
        <p>성별</p>
      <Label>
      <p style={{ color: "#9A9292", fontSize: "18px" }}>남</p>
          <input
            type="checkbox"
            name="sexual"
            checked={isSexual}
            onChange={handleSexualChange}
          />
        </Label>
        <Label>
      <p style={{ color: "#9A9292", fontSize: "18px" }}>여</p>
          <input
            type="checkbox"
            name="sexual2"
            checked={isSexual2}
            onChange={handleSexualChange2}
          />
        </Label>
        </SelectContainer2>
        <DropdownContainer>
          <span style={{ fontSize: '13px' , marginRight: '5px'}}>평균가격</span> 
        <Select value={selectedValue} onChange={handleDropdownChange}>
          <option value="option1"></option>
          <option value="option2">10만원이하</option>
          <option value="option3">10만원이상</option>
        </Select>
      </DropdownContainer>
    </Container>

  );
}