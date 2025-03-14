import React, { useState } from "react";
import styled from "styled-components";
import cart2 from "../../../../assets/cart2.png";
import jeans from "../../../../assets/jeans.png";
import { NextButtonUI } from "../../../../components";
import { Modal } from "../../../../utils";

const Container = styled(NextButtonUI)`
  display: flex;
  flex-direction: column; /* 수직 방향으로 배치 */
  position: relative;
  width: 250px;
  height: 250px;
  background-color: white;
  border: 0.5px solid #ccc; /* 스크린샷에 맞춘 경계선 색상 */
  margin: 30px;
  justify-content: space-between; /* 상단 이미지와 하단 텍스트 사이에 공간 분배 */
  overflow: hidden; /* 내용이 넘치면 숨김 */
`;

const JeansImage = styled.img`
  width: 100%; /* 컨테이너 너비에 맞춤 */
  height: 200px; /* 이미지 높이 고정 */
  object-fit: cover; /* 이미지가 컨테이너에 맞게 조정 */
`;

const CartButton = styled.button`
  position: absolute;
  top: 10px; /* 상단 여백 */
  right: 10px; /* 우측 여백 */
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  z-index: 2; /* 버튼이 텍스트 위에 위치 */
`;

const CartImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  width: 100%;
  font-size: 14px;
  color: #333;
  background-color: rgba(255, 255, 255, 0.8); /* 반투명 배경 */
  text-align: center;
  white-space: wrap; 
  z-index: 1; /* 텍스트가 이미지 아래에 위치 */
`;

// 해시태그 스타일을 위한 컴포넌트 (선택 사항)
const Hashtag = styled.span`
  color: #1e90ff; /* 해시태그 파란색 */
  margin: 0 2px; /* 간격 조정 */
`;

export default function Profile({ text = " #청바지 #스키니진 #와이드진",  }) {
  const handleClick = () => {
    alert("카트 버튼이 클릭되었습니다!");
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 텍스트를 해시태그로 분리 (간단한 예시)
  const renderText = () => {
    const parts = text.split(" ");
    return parts.map((part, index) =>
      part.startsWith("#") ? (
        <Hashtag key={index}>{part}</Hashtag>
      ) : (
        <span key={index}>{part} </span>
      )
    );
  };

  return (
    <Container onClick={() => setIsModalOpen(true) }>
      <JeansImage src={jeans} alt="jeans" />
      <CartButton onClick={handleClick}>
        <CartImage src={cart2} alt="cart" />
      </CartButton>
      <Text>{renderText()}</Text>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </Container>

  );
}