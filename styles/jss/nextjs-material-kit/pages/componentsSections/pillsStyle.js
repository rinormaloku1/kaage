import { container, title } from "/styles/jss/nextjs-material-kit.js";

const pillsStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  container,
  description: {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }
};

export default pillsStyle;
