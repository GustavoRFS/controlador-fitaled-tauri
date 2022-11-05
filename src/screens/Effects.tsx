import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";
import { ScreenBase } from "./ScreenBase";

type EffectCardProps = {
  title?: string;
  children?: ReactNode;
};

const EffectCard = ({ title, children }: EffectCardProps) => (
  <Card sx={{ width: 250 }}>
    <CardActionArea onClick={() => window.alert("Efeito")}>
      <CardContent>
        <Typography align="left" className="break-all">
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{children}</Typography>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  // <Button
  //   variant="contained"
  //   style={{
  //     width: 250,
  //     alignItems: "flex-start",
  //     justifyContent: "flex-start",
  //   }}
  // >
  //
  // </Button>
);

export const EffectsScreen = () => {
  return (
    <ScreenBase className="h-full flex-row flex-wrap justify-evenly items-center py-20">
      <EffectCard title="Efeito 1">
        Efeito carlos porra asdasdasdasdasdasdasdasdasdasdasdasdsa kkkkk
      </EffectCard>
      <EffectCard title="Efeito 2">Efeito carlos porra kkkkk</EffectCard>
      <EffectCard title="Efeito 3">Efeito carlos porra kkkkk</EffectCard>
      <EffectCard title="Efeito 4">Efeito carlos porra kkkkk</EffectCard>
      <EffectCard title="Efeito 4">Efeito carlos porra kkkkk</EffectCard>
    </ScreenBase>
  );
};
