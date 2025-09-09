"use client";
import { SkillsProps } from "@/types";
import { useEffect, useState } from "react";
export default function SkillsItem({ text, num, width, color }: SkillsProps) {
  return (
    <li className="skills__item">
      <div className="skills__item-content ">
        <p className="skills__item-text ">{text}</p>
        <p className="skills__item-num">{num}</p>
      </div>
      <div
        className="skills__item-line"
        style={{ width: `${width}%`, backgroundColor: `${color}` }}
      ></div>
    </li>
  );
}
