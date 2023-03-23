import React, { useEffect, useState } from "react";
import MaleLite from "./MaleLite";
import MaleMedium from "./MaleMedium";
import MaleHard from "./MaleHard";
import MaleHero from "./MaleHero";
import FemaleLite from "./FemaleLite";
import FemaleMedium from "./FemaleMedium";
import FemaleHard from "./FemaleHard";
import FemaleHero from "./FemaleHero";

const SportPrograms = ({componentProgram} ) => {
  const [sportPrograms, setSportPrograms] = useState("");

  class Programm {
    constructor(level, link) {
      this.level = level;
      this.link = link;
      arrProgramms.push(this);
    }
  }

  

  const arrProgramms = [];

  const ProgrammMLite = new Programm("m-lite", <MaleLite />);
  const ProgrammMMedium = new Programm("m-medium", <MaleMedium />);
  const ProgrammMStrong = new Programm("m-strong", <MaleHard />);
  const ProgrammMHero = new Programm("m-hero", <MaleHero />);
  const ProgrammFLite = new Programm("f-lite", <FemaleLite />);
  const ProgrammFMedium = new Programm("f-medium", <FemaleMedium />);
  const ProgrammFStrong = new Programm("f-strong", <FemaleHard />);
  const ProgrammFHero = new Programm("f-hero", <FemaleHero />);

  useEffect(() => {
  if (componentProgram !== false) {
    let search = arrProgramms.find((e) => e.level === componentProgram);
    setSportPrograms(search.link);
  }

  }, [componentProgram]);

  return (
    <div>
      {sportPrograms}
    </div>
  );
};

export default SportPrograms;
