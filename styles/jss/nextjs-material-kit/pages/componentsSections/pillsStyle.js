import { container, title } from "/styles/jss/nextjs-material-kit.js";

const pillsStyle = {
  section: {
    padding: "70px 0",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  container,
  description: {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#000"
  }
};

export default pillsStyle;
