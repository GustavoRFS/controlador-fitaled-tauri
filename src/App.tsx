import { useRef, useState } from "react";
import { Navigator } from "./components/Navigator";
import { ColorPickerScreen } from "./screens/ColorPicker";
import { EffectsScreen } from "./screens/Effects";
import { FavoritesScreen } from "./screens/Favorites";

export default () => {
  const screenContainerRef = useRef<HTMLDivElement>(null);

  const [pageIndex, setPageIndex] = useState(0);

  const handleTabChange = (index: number) => {
    if (screenContainerRef.current) {
      screenContainerRef.current.children[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setPageIndex(index);
  };

  return (
    <div className="h-full w-full flex flex-col">
      <div
        ref={screenContainerRef}
        className="flex flex-row flex-1 overflow-hidden"
      >
        <ColorPickerScreen />
        <EffectsScreen />
        <FavoritesScreen screenSelected={pageIndex === 2} />
      </div>
      <div className="w-full">
        <Navigator index={pageIndex} onChange={handleTabChange} />
      </div>
    </div>
  );
};
