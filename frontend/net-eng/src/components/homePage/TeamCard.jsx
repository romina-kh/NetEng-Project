import React from "react";

const TeamCard = ({ image, name, role, links }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />

      <h3 style={styles.name}>{name}</h3>
      <p style={styles.role}>{role}</p>

      <div style={styles.links}>
        {links.map((link, index) => (
          <a key={index} href={link.url} style={styles.icon} target="_blank">
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "220px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  role: {
    fontSize: "14px",
    color: "gray",
    marginBottom: "10px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  icon: {
    fontSize: "20px",
    color: "#333",
  },
};

export default TeamCard;
