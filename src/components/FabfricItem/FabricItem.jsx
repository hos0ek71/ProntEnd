// FabricItem 선택 함수 컴포넌트 
import React from "react";
import "./FabricItem.css";


function FabricItem({ fabricItemsData, selectedIds, onClickItem }) {
  return (
    <div className="fabric-select">
      {fabricItemsData.map((item) => {
        const isSelected = selectedIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`fabric-item ${isSelected ? "selected" : ""}`}
            onClick={() => onClickItem(item.id)}
          >
            <div className="fabric-image">
              <img src="/image/cotton.png" alt="원단 이미지" />
            </div>
            <p className="fabric-name">{item.name}</p>
            {/* <ColorPicker
              initialColor={item.initialColor}
              onColorChange={(newColor) =>
                console.log(`Fabric item ${item.id} 새 색상: ${newColor}`)
              }
            /> */}
            <p className="fabric-desc">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FabricItem;
