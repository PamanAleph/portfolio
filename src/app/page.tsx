import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardSection from "@/components/ProjectCardSection";
import Words from "@/components/Words";
import Image from "next/image";

function Page() {
  const text =
    "I am Muhammad Alief Firmanda, a dedicated and detail-oriented front-end developer with a passion for creating innovative and user-centric digital experiences. With a strong background in computer science and a keen eye for design, I am committed to delivering high-quality solutions that meet the needs of my clients and users.";

  return (
    <section>
      <div>
        <Heading />
      </div>
      <div>
        <ProjectCardSection/>
      </div>
      <div className="py-[100vh]">
        <Paragraph value={text} />
      </div>
      <div className="pb-[100vh] text-justify">
        <Words value={text} />
      </div>
    </section>
  );
}

export default Page;
