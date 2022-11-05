import { Icon, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";

export const Navigator = ({
  index,
  onChange,
}: {
  index: number;
  onChange: (index: number) => void;
}) => {
  return (
    <BottomNavigation
      value={index}
      showLabels
      onChange={(_, index) => {
        onChange(index);
      }}
    >
      <BottomNavigationAction
        className="w-full"
        label="Cores"
        icon={<Icon>color_lens</Icon>}
      />
      <BottomNavigationAction
        className="w-full"
        label="Efeitos"
        icon={<Icon>blur_on</Icon>}
      />
      <BottomNavigationAction
        className="w-full"
        label="Favoritos"
        icon={<Icon>star</Icon>}
      />
    </BottomNavigation>
  );
};
