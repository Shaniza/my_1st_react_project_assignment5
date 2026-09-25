import { FaStar } from "react-icons/fa";

import type { Technology } from "../types/type";
import "./TechnologyCard.css";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isSelected: boolean;
}

function TechnologyCard({
  technology,
  onAdd,
  isSelected,
}: TechnologyCardProps) {
  return (
    <article className="technology-card">

      {/* Top Section */}
      <div className="technology-card-top">

        {/* Technology Icon */}
        <div className="technology-icon">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
          />
        </div>

        {/* Badge */}
        <span className="technology-badge">
          {technology.badge}
        </span>

      </div>

      {/* Technology Name */}
      <h3>{technology.name}</h3>

      {/* Description */}
      <p className="technology-description">
        {technology.description}
      </p>

      {/* Meta Information */}
      <div className="technology-meta">

        <span>{technology.category}</span>

        <span>{technology.difficulty}</span>

        <span className="technology-rating">
          <FaStar />
          {technology.rating}
        </span>

      </div>

      {/* Add Button */}
      <button
        className={`add-stack-btn ${
          isSelected ? "added-stack-btn" : ""
        }`}
        onClick={() => onAdd(technology)}
        disabled={isSelected}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>

    </article>
  );
}

export default TechnologyCard;