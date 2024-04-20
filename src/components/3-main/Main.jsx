import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./main.css";

const myProjects = [
  {
    ProjectTitle: "Templete",
    date: "2022",
    linkDesine: "https://esraasoliman2003.github.io/project1/project1.html",
    linkGithub: "https://github.com/EsraaSoliman2003/project1",
    category: ["HTML & CSS"],
    imhPath: "./imgs/1.jpg",
  },
  {
    ProjectTitle: "Templete",
    date: "2022",
    linkDesine: "https://esraasoliman2003.github.io/project2/project2.html",
    linkGithub: "https://github.com/EsraaSoliman2003/project2",
    category: ["HTML & CSS"],
    imhPath: "./imgs/2.jpg",
  },
  {
    ProjectTitle: "Templete",
    date: "2022",
    linkDesine: "https://esraasoliman2003.github.io/project3/project3.html",
    linkGithub: "https://github.com/EsraaSoliman2003/project3",
    category: ["HTML & CSS"],
    imhPath: "./imgs/3.jpg",
  },
  {
    ProjectTitle: "Templete",
    date: "2022",
    linkDesine: "https://esraasoliman2003.github.io/bondi/pro.html",
    linkGithub: "https://github.com/EsraaSoliman2003/bondi",
    category: ["HTML & CSS", "Bootstrab"],
    imhPath: "./imgs/4.jpg",
  },
  {
    ProjectTitle: "Templete",
    date: "2023",
    linkDesine: "https://esraasoliman2003.github.io/Travel/index.html",
    linkGithub: "https://github.com/EsraaSoliman2003/Travel",
    category: ["HTML & CSS", "Bootstrab", "JS"],
    imhPath: "./imgs/5.jpg",
  },
  {
    ProjectTitle: "Game",
    date: "2023",
    linkDesine: "https://esraasoliman2003.github.io/Typing-Speed/pro.html",
    linkGithub: "https://github.com/EsraaSoliman2003/Typing-Speed",
    category: ["HTML & CSS", "JS"],
    imhPath: "./imgs/6.jpg",
  },
  {
    ProjectTitle: "game",
    date: "2023",
    linkDesine: "https://esraasoliman2003.github.io/Memory-Game/pro.html",
    linkGithub: "https://github.com/EsraaSoliman2003/Memory-Game",
    category: ["HTML & CSS", "JS"],
    imhPath: "./imgs/7.jpg",
  },
  {
    ProjectTitle: "Game",
    date: "2023",
    linkDesine: "https://esraasoliman2003.github.io/HangMan-Game/pro.html",
    linkGithub: "https://github.com/EsraaSoliman2003/HangMan-Game",
    category: ["HTML & CSS", "JS"],
    imhPath: "./imgs/8.jpg",
  },
  {
    ProjectTitle: "Templete",
    date: "2024",
    linkDesine: "https://esraasoliman2003.github.io/Fooder",
    linkGithub: "https://github.com/EsraaSoliman2003/Fooder",
    category: ["HTML & CSS", "React"],
    imhPath: "./imgs/9.jpg",
  },
];
const myButtons = ["all", "React", "JS", "Bootstrab", "HTML & CSS"];
export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setarr] = useState(myProjects);

  const handClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const zzz = item.category.find((innerItem) => {
        return innerItem === buttonCategory;
      });
      return zzz === buttonCategory;
    });
    setarr(newArr);
    if (buttonCategory === "all") {
      setarr(myProjects);
    }
  };

  return (
    <main className="flex">
      <section className="flex left-section">
        {myButtons.map((item) => {
          return (
            <button
              key={item}
              onClick={() => {
                handClick(item);
              }}
              className={currentActive === item ? "active" : null}
            >
              {item}
            </button>
          );
        })}
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                key={item.imhPath}
                className="card"
              >
                <a href={item.linkDesine}>
                  <img width={266} src={item.imhPath} alt="" />

                  <div style={{ width: "266px" }} className="box">
                    <h1 className="title">{item.ProjectTitle}</h1>
                    <p className="sub-title">{item.date}</p>
                    <div className="flex icons">
                      <div className="flex" style={{ gap: "11px" }}>
                        <a href={item.linkDesine}>
                          <div className="icon-link"></div>
                        </a>

                        <a href={item.linkGithub}>
                          <div className="icon-github"></div>
                        </a>
                      </div>
                      {/* <a className="link flex" href="#">
                        More
                        <span
                          style={{ alignSelf: "end" }}
                          className="icon-arrow-right"
                        ></span>
                      </a> */}
                    </div>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
