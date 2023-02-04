import { Link } from "react-router-dom";

export const ErrorMessage = ({ message }) => {
  return (
    <section className="error">
      <h1>Ups! Se ha producido un error</h1>
      <p>{message}</p>
      <Link to={"/"}>Go to home</Link>
    </section>
  );
};