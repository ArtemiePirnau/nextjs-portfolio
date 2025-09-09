"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { latestProjects } from "@/data";
export default function Projects() {
  return (
    <div className="projects flex items-center justify-between mb-60">
      <div className="portfolio__inner">
        <h3 className="portfolio__title section-title text-4xl uppercase font-bold text-center mb-5">
          Latest projects
        </h3>
        <p className="portfolio__text mb-10 section-text text-center uppercase text-lg mb-10">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <Link href="/projects">
          <Button className="block text-center">All projects</Button>
        </Link>
      </div>
      <div className="portfolio__box flex flex-col justify-between">
        {latestProjects.map((project) => {
          return (
            <Link
              className="portfolio__box-item mb-10"
              href={project.link}
              key={project.id}
            >
              <div className="portfolio__box-item w-[400px]">
                <h4 className="text-2xl font-semibold mb-4">{project.title}</h4>
                <p className="mb-6">{project.descr}</p>
                <Image
                  className="object-cover portfolio__box-img rounded-md "
                  src={project.img}
                  alt="project image"
                  width={400}
                  height={400}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
