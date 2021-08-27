import "tailwindcss/tailwind.css";
import { Columns, Box, Icon, Container } from "./Layout";

export default function Features() {
  return (
    <>
      <section className="grid md:grid-cols-4 grid-cols-1 gap-4 px-10 py-0 lg:px-48 w-full">
        <Box align="center">
          <Icon path="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          <h3 className="text-xl font-bold my-3">
            Manage remote team complexity
          </h3>
          <p className="text-gray-500">
            See all your team members, create organisational structures, revise
            them on the go.
          </p>
        </Box>

        <Box align="center">
          <Icon path="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          <h3 className="text-xl font-bold my-3">
            Monitor Goals, OKRs and set up internal Feedback
          </h3>
          <p className="text-gray-500">
            Set flexible goals for each department and monitor them in real
            time.
          </p>
        </Box>

        <Box align="center">
          <Icon path="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <h3 className="text-xl font-bold my-3">
            Onboarding, offboarding, recruitment simplified
          </h3>
          <p className="text-gray-500">
            Send & track deliveries to new team members, schedule packs and much
            more..
          </p>
        </Box>

        <Box align="center">
          <Icon path="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          <h3 className="text-xl font-bold my-3">Remote Company Culture</h3>
          <p className="text-gray-500">
            Build your company culture remotely with purpose-built tools for
            startups of the future..
          </p>
        </Box>
      </section>
    </>
  );
}
