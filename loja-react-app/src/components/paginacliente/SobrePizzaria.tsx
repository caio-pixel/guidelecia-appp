import React from "react";

function PizzariaPage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Conheça sobre a nossa pizzaria</h2>
      <p style={styles.description}>
        muuuitas coisas <br />
        sobre a <br />
        pizzaria........
      </p>
      <img
        style={styles.image}
        src="/assets/images/restaurante_po_dentro_1.jpg"
        alt="Interior da pizzaria"
      />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 400,
    margin: "0 auto",
    textAlign: "center",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    color: "#5757d1",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 30,
  },
  description: {
    color: "gray",
    fontSize: 22,
    fontWeight: 400,
    marginBottom: 40,
    lineHeight: 1.5,
    whiteSpace: "pre-line", // mantém as quebras de linha do texto
  },
  image: {
    width: "100%",
    borderRadius: 8,
    objectFit: "cover",
  },
};

export default PizzariaPage;
