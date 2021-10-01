import Card from "./Card";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";

const cards = [
  {
    id: 1,
    title: "Proyect 1",
    desc: "This is my Proyect 1",
    image: img1,
    url: "#!",
  },
  {
    id: 2,
    title: "Proyect 2",
    desc: "This is my Proyect 2",
    image: img2,
    url: "#!",
  },
  {
    id: 3,
    title: "Proyect 3",
    desc: "This is my Proyect 3",
    image: img3,
    url: "#!",
  },
];

export default function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 ">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card
              title={card.title}
              desc={card.desc}
              img={card.image}
              url={card.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
