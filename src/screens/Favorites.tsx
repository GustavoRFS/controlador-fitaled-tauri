import { Button, Icon, Paper, Fab, Zoom } from "@mui/material";
import { useState } from "react";
import { ScreenBase } from "./ScreenBase";

type FavoriteColorProps = {
  color: string;
  isRemoving: boolean;
  onRemove?: () => void;
  onClick?: () => void;
};

const FavoriteColor = ({
  color,
  isRemoving,
  onRemove,
  onClick,
}: FavoriteColorProps) => (
  <Paper
    style={{ marginLeft: 10, marginRight: 10, marginTop: 8, marginBottom: 8 }}
    elevation={8}
  >
    <div className="relative">
      <Button
        style={{
          maxWidth: 50,
          maxHeight: 50,
          minWidth: 50,
          minHeight: 50,
        }}
        sx={{
          backgroundColor: color,
          ":hover": { backgroundColor: color },
        }}
      />
      <Zoom in={isRemoving} timeout={300}>
        <div
          onClick={onRemove}
          className="absolute flex justify-center items-center -right-2 -top-2 w-5 h-5 bg-red-600 rounded-full cursor-pointer"
        >
          <Icon style={{ fontSize: 15, color: "#fff" }}>clear</Icon>
        </div>
      </Zoom>
    </div>
  </Paper>
);

export const FavoritesScreen = () => {
  const colors = [
    "#00ffba",
    "#ff00ba",
    "#00baff",
    "#baff00",
    "#baffff",
    "#ffbaff",
    "#baffbaff",
    "#f00",
    "#0f0",
    "#00f",
    "#f0f",
    "#ff0",
    "#0ff",
    "#fff",
    "#000",
  ];

  const [isRemovingColors, setIsRemovingColors] = useState(false);

  const switchRemovingColors = () => setIsRemovingColors(!isRemovingColors);

  return (
    <ScreenBase>
      <div className="flex h-fit justify-evenly py-4 flex-wrap">
        {colors.map((color) => (
          <FavoriteColor
            key={color}
            color={color}
            isRemoving={isRemovingColors}
            onRemove={() => window.alert("kkkk")}
          />
        ))}
        <div className="absolute bottom-8 right-5">
          <Fab onClick={switchRemovingColors}>
            <Icon>{isRemovingColors ? "done" : "delete"}</Icon>
          </Fab>
        </div>
      </div>
    </ScreenBase>
  );
};
