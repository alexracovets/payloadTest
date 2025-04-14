"use client";

import { useState } from "react";

import {
  ArmorIco,
  MaskIco,
  СompositeIcon,
  KitsIco,
  PistolIco,
  AutomaticsIco,
  ShotgunsIco,
  ExplosivesIco,
  SnipersIco,
  ModsIco,
  AmmoIco,
  LocationsIco,
  AnomaliesIco,
  ArtefactsIco,
  DetectorsIco,
} from "./SVGs";
import { cn } from "@utils";

export interface IconCategoryType {
  name: string;
  active: boolean;
}

export const CategoriesNavigationIcon = ({ name, active }: IconCategoryType) => {
  const [hover, setHover] = useState(false);
  const defaultColor = "#AFAC99";
  const activeColor = "#3F3830";

  const renderIcon = (name: string) => {
    switch (name) {
      case "armors":
        return (
          <ArmorIco color={active || hover ? activeColor : defaultColor} />
        );
      case "masks":
        return <MaskIco color={active || hover ? activeColor : defaultColor} />;
      case "composite":
        return (
          <СompositeIcon color={active || hover ? activeColor : defaultColor} />
        );
      case "kits":
        return <KitsIco color={active || hover ? activeColor : defaultColor} />;
      case "pistols":
        return (
          <PistolIco color={active || hover ? activeColor : defaultColor} />
        );
      case "automatics":
        return (
          <AutomaticsIco color={active || hover ? activeColor : defaultColor} />
        );
      case "shotguns":
        return (
          <ShotgunsIco color={active || hover ? activeColor : defaultColor} />
        );
      case "explosives":
        return (
          <ExplosivesIco color={active || hover ? activeColor : defaultColor} />
        );
      case "snipers":
        return (
          <SnipersIco color={active || hover ? activeColor : defaultColor} />
        );
      case "mods":
        return <ModsIco color={active || hover ? activeColor : defaultColor} />;
      case "ammo":
        return <AmmoIco color={active || hover ? activeColor : defaultColor} />;
      case "locations":
        return (
          <LocationsIco color={active || hover ? activeColor : defaultColor} />
        );
      case "anomalies":
        return (
          <AnomaliesIco color={active || hover ? activeColor : defaultColor} />
        );
      case "artefacts":
        return (
          <ArtefactsIco color={active || hover ? activeColor : defaultColor} />
        );
      case "detectors":
        return (
          <DetectorsIco color={active || hover ? activeColor : defaultColor} />
        );
      default:
        return null;
    }
  };

  return (
    <li
      className={cn(
        "flex justify-center items-center w-full py-[.9rem] bg-pda-ico rounded-[.4rem] cursor-pointer",
        "transition duration-300",
        active || hover ? "bg-pda-destructive" : "bg-pda-ico"
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="w-[3.2rem] h-[3.2rem]">{renderIcon(name)}</div>
    </li>
  );
};
