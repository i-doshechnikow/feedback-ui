import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is simple SPA</p>
        <Link to="/">go home</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
