import { workData } from "../utils/data";
import Experience from "./Experience";

function About() {
  return (
    <>
      <section>
        <div className="flex justify-center">
          <div className="flex flex-col md:!flex-row w-7xl gap-x-16 mt-16 items-center">
            <div
              className={`h-[560px] rounded-lg bg-contain bg-center basis-1/2`}
              style={{ backgroundImage: `url('/myprofile.jpg')` }}
            ></div>
            <div className="basis-1/2 flex flex-col gap-y-6">
              <span className="font-bold">Vanakkam, 🙏</span>
              <span className="text-[#545454] text-justify">
                I am Manoj Prabhu, a senior software engineer currently building
                a social intelligence product at Meltwater in Coimbatore, India.
                From humble startups to software used by millions, I’ve had a
                blast building things that people love.
              </span>
              <span className="text-[#545454] text-justify">
                I seek brave teams where, together, we can create lasting and
                meaningful impact on people's lives, the society, and the world
                we live in. I like expanding and adapting my skills, thoughts,
                and processes to the changing problems and needs in the world
                around us. In my free time, I'll most likely be found sipping
                chai with a book, or playing console games.
              </span>
              <span>
                <a
                  className="text-[#637CEC]"
                  href="https://www.linkedin.com/in/manojprabhup/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center mb-16">
          <div className="w-7xl">
            <div className="pt-20 pb-8">
              <span className="font-bold">Info</span>
            </div>
            <div
              className="grid grid-cols-1 md:!grid-cols-2 grid-rows-[auto_auto] gap-16 flex-1"
            >
              <div className="flex flex-col gap-6 rounded-lg py-12 px-8 bg-[#fbfbfb]">
                <span className="font-bold text-lg">⭐️ Skills</span>
                <ul className="list-disc pl-10">
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>TypeScript</li>
                  <li>HTML & CSS</li>
                  <li>Java</li>
                  <li>SQL & NoSQL</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 rounded-lg py-12 px-8 bg-[#fbfbfb]">
                <span className="font-bold text-lg">🎓 Work Experience</span>
                {workData.map((work) => (
                  <Experience key={work.company} {...work} />
                ))}
              </div>
              <div className="flex flex-col gap-6 rounded-lg py-12 px-8 bg-[#fbfbfb]">
                <span className="font-bold text-lg">🎓 Education</span>
                <div className="flex flex-col gap-2 pl-8">
                  <span>Apr 2011 - May 2015</span>
                  <span>Sona College of Technology, Anna University</span>
                  <span>B.E - Mechanical Engineering</span>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-lg py-12 px-8 bg-[#fbfbfb]">
                <span className="font-bold text-lg">📫 Contact</span>
                <div className="flex flex-col gap-2 pl-8">
                  <div className="flex flex-col gap-2">
                    <span>email</span>
                    <span className="font-bold">manojprabhuskp@gmail.com</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span>phone</span>
                    <span className="font-bold">+91-8608101608</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
