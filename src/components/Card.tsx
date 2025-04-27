import { useState } from "react";
import { Incident } from "../assets/interface";

interface CardProps {
  item: Incident;
  removeItem: (id: number) => void;  // Make sure the type is 'number' here
}

const Card = ({ item, removeItem }: CardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div key={item.id} className="incident--card">
      <div className="card--heading">
        <h4>{item.title}</h4>
        <p onClick={handleChange}>{isOpen ? "Hide Detail" : "View Details"}</p>
      </div>

      {isOpen ? (
        <p>{item.description}</p>
      ) : (
        <p>{item.description.slice(0, 150)}...</p>
      )}

      <div className="button-class">   
        <section>
          <span className="tag">{item.severity}</span>
          <span>Date: {item.reported_at.split("T")[0]}</span>
        </section>

        <button 
          onClick={() => removeItem(item.id)}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
