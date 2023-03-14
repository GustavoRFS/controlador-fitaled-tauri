import { useRef, useState } from "react";
import { Navigator } from "./components/Navigator";
import { ColorPickerScreen } from "./screens/ColorPicker";
import { EffectsScreen } from "./screens/Effects";
import { FavoritesScreen } from "./screens/Favorites";

export default () => {
  const screenContainerRef = useRef<HTMLDivElement>(null);

  const [pageIndex, setPageIndex] = useState(0);

  const screens = [
    <ColorPickerScreen />,
    <EffectsScreen />,
    <FavoritesScreen />,
  ];

  return (
    <div className="h-full w-full flex flex-col">
      <div ref={screenContainerRef} className="flex flex-row flex-1">
        {screens[pageIndex]}
      </div>
      <div className="w-full">
        <Navigator
          index={pageIndex}
          onChange={(index: number) => {
            setPageIndex(index);
          }}
        />
      </div>
    </div>
  );
};
