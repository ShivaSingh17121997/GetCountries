import React, { useState } from 'react';

function CreateCard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div  >
      <div onClick={toggleMenu} style={{ width: "150px", height: "150px", backgroundColor: "green", cursor: 'pointer', top: "50%", left: "50%", position: "fixed", transition: "trasnlate(-50%, -50%)", borderRadius:"50%" }}>
        Click me to open dropdown
      </div>
      {isOpen && (
        <div style={{ border: '1px solid black',  top: "50%", left: "50%", position: "fixed", transition: "trasnlate(-50%, -50%)", borderRadius:"50%" }}>
          <div>
            <div>Option 1</div>
            <div> option 2 </div>
            <div> option 3 </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateCard;
