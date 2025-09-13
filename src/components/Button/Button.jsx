import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
function Button() {
  const [showPanel, setShowPanel] = useState(false);

  const handleOnClick = () => {
    setShowPanel(!showPanel);
  }

  return (
    <div>
      <button onClick={handleOnClick}>최신순 {showPanel ? <ChevronDown /> : <ChevronUp/>}</button>

      {showPanel && (
        <div>
          <div>최신순</div>
          <div>좋아요 순</div>
        </div>
      )}
    </div>
  )

}

export default Button;