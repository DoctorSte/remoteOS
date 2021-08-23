import "tailwindcss/tailwind.css";

export default function Card(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

// import { Cards } from "../api/data";

// export const getStaticProps = async () => {
//   return {
//     props: { cardData: Cards },
//   };
// };

// export default ({ cardData }) => (
//   <>
//     const card = cardData.title; console.log(cardData);
//     { {cardData.map((cardData) => (
//       <div>
//         <h3>{cardData.title}</h3>
//         <p>{cardData.content}</p>
//       </div>
//     ))}; }
//   </>
// );
