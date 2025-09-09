import React from "react";
import Link from "next/link";
import { ItemProps } from "@/types";
export default function ProjectsItem({ id, img, link, title }: ItemProps) {
  console.log(id);

  return (
    <Link className="box " href={link} key={id}>
      <div
        className="projects__img rounded-md portfolio__item w-[450px] h-80 bg-center bg-no-repeat bg-cover my-4 mx-2 bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <p className="projects__title text-2xl">{title}</p>
    </Link>
  );
}
