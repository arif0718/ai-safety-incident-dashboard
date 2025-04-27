import { Incident } from "../assets/interface";
import Card from "./Card";

const ListView = ({ incidents, removeIncident }: { incidents: Incident[], removeIncident: (id: number) => void }) => {
  return (
    <div>
      {incidents.map((item) => (
        <Card key={item.id} item={item} removeItem={removeIncident} />
      ))}

      {incidents.length === 0 && (
        <h4 style={{ marginInline: "auto", width: "fit-content" }}>
          Not Found
        </h4>
      )}
    </div>
  );
};

export default ListView;
