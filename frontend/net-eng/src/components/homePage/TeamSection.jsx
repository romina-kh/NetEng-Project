import React from "react";
import TeamCard from "./TeamCard";
import matinpic from "../../assets/profPic/matin.jpg"
import rominapic from "../../assets/profPic/romina.jpg"
import aryapic from "../../assets/profPic/arya.jpg"


import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const TeamSection = () => {
  const team = [
    {
        image: matinpic,
        name: "Matin Parian",
        role: "Developer",
        links: [
            { url: "https://github.com/matinsp7", icon: <FaGithub /> },
            { url: "https://www.linkedin.com/in/matin-parian-600070350/", icon: <FaLinkedin /> },
            { url: "matinparian@gmail.com", icon: <FaEnvelope /> },
        ],
    },
    {
        image: rominapic,
        name: "Romina Khanmohammadi",
        role: "Developer",
        links: [
            { url: "https://github.com/romina-kh", icon: <FaGithub /> },
            { url: "https://www.linkedin.com/in/romina-khanmohammadi-3018782bb/", icon: <FaLinkedin /> },
            { url: "romina.khanmohammadi99@gmail.com", icon: <FaEnvelope /> },
        ],
    },
    {
        image: aryapic,
        name: "Arya Naderi",
        role: "Developer",
        links: [
            { url: "https://github.com/arya237", icon: <FaGithub /> },
            { url: "https://linkedin.com/in/arya", icon: <FaLinkedin /> },
            { url: "arya237@gmail.com", icon: <FaEnvelope /> },
        ],
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>معرفی تیم شرکت</h2>

      <div style={styles.list}>
        {team.map((person, index) => (
          <TeamCard key={index} {...person} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "26px",
    marginBottom: "30px",
    fontWeight: "bold",
  },
  list: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
};

export default TeamSection;
