import "tailwindcss/tailwind.css";

export default function Card() {
  return (
    <div>
      <section className="grid md:grid-flow-col md:grid-cols-4 gap-4 px-10 lg:px-48 text-center mb-16">
        <div className="border-gray-200 border shadow-md rounded-lg p-6 mb-5 hover:bg-gray-100 transition-all duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-6 w-6 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <h3 className="text-xl font-bold mb-3">Manage your whole team</h3>
          <p className="text-gray-500">
            See all your team members, create organisational structures, revise
            them on the go.
          </p>
        </div>

        <div className="border-gray-200 border shadow-md rounded-lg p-6 mb-5 hover:bg-gray-100 transition-all duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-6 w-6 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <h3 className="text-xl font-bold mb-3">Monitor Goals and OKRs</h3>
          <p className="text-gray-500">
            Set flexible goals for each department and monitor them in real
            time.
          </p>
        </div>

        <div className="border-gray-200 border shadow-md rounded-lg p-6 mb-5 hover:bg-gray-100 transition-all duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-6 w-6 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-xl font-bold mb-3">
            Oboarding, offboarding, recruitment simplified
          </h3>
          <p className="text-gray-500">
            Send & track deliveries to new team members, schedule packs and much
            more.
          </p>
        </div>

        <div className="border-gray-200 border shadow-md rounded-lg p-6 mb-5 hover:bg-gray-100 transition-all duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 w-full mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <h3 className="text-xl font-bold mb-3">Remote Company Culture</h3>
          <p className="text-gray-500">
            Build your company culture remotely with purpose-built tools for
            startups of the future.
          </p>
        </div>
      </section>
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
