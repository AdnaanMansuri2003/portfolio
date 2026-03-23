import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// ✅ UPDATED PROJECT COMPONENT WITH LINK
const Project = ({ title, link, image }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={projectVariant}
      className="relative block cursor-pointer hover:scale-105 transition duration-300"
    >
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">View Project</p>
      </div>

      <img src={image} alt={title} />
    </motion.a>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          Showcasing a collection of real-world projects focused on AI, data visualization, and full-stack development. These projects highlight my ability to build scalable applications, solve practical problems, and create user-friendly digital experiences.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>

          <Project
  title="Ontario Appliance Service"
  link="https://melodic-squirrel-b72843.netlify.app/"
  image="/assets/project1.jpeg"
/>

<Project
  title="ISAJI MART"
  link="https://isajimart.vercel.app/"
  image="/assets/project2.jpeg"
/>

          {/* ROW 2 */}
          <Project
            title="NEXSIGHT"
            link="https://github.com/AdnaanMansuri2003/nexsight"
            image="/assets/project3.jpeg"
          />

          <Project
            title="Indian Food Image Classification"
            link="https://github.com/AdnaanMansuri2003/Coding-Raja-Technologies-Internship"
            image="/assets/project4.jpeg"
          />

          

          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;