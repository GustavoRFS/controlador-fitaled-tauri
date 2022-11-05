import "react-color-palette/lib/css/styles.css";
import { ColorPicker, useColor } from "react-color-palette";
import { Button, Icon, Typography } from "@mui/material";
import { ScreenBase } from "./ScreenBase";

// @ts-ignore
const { invoke } = window.__TAURI__;

const renderController = (name: string) => (
  <div className="flex flex-row items-center w-60 justify-between ">
    <Button variant="contained">
      <Typography>-</Typography>
    </Button>
    <Typography>{name}</Typography>
    <Button variant="contained">
      <Typography>+</Typography>
    </Button>
  </div>
);

export const ColorPickerScreen = () => {
  const [color, setColor] = useColor("hex", "#00ffba");

  const renderColorPicker = (
    <ColorPicker
      width={230}
      height={160}
      color={color}
      onChange={(color) => {
        const { r, g, b } = color.rgb;

        try {
          invoke("set_led_color", { r, g, b });
          // invoke("set_led_color", { r, g, b });
        } catch (err) {
          console.error(err);
        }

        setColor(color);
      }}
      hideHSV
      hideRGB
      hideHEX
      dark
    />
  );

  const renderAddFavorite = (
    <Button variant="contained">
      <Icon style={{ color: color.hex }}>star</Icon>
    </Button>
  );

  return (
    <ScreenBase className="flex-col justify-evenly items-center py-8">
      {renderColorPicker}
      {renderAddFavorite}
      {renderController("Brilho")}
      {renderController("Velocidade")}
    </ScreenBase>
  );
};
