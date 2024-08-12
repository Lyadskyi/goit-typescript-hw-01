type AllType = {
  name: string;
  color: string;
  position: number;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const top = { name: "Dilan", color: "yellow" };
const bottom = { position: 1, weight: 80 };

const result = compare(top, bottom);

console.log("Result:", result); // Виведе: Result: {name: "Dilan", color: "yellow", position: 1, weight: 80}
