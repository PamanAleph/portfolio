// "use client"
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import ProjectCard from "./ProjectCard";

// // Define the type for the item
// type ItemType = {
//   id: number;
//   subtitle: string;
//   title: string;
// };

// // Dummy data
// const items: ItemType[] = [
//   {
//     id: 1,
//     subtitle: "Subtitle 1",
//     title: "Title 1"
//   },
//   {
//     id: 2,
//     subtitle: "Subtitle 2",
//     title: "Title 2"
//   },
//   {
//     id: 3,
//     subtitle: "Subtitle 3",
//     title: "Title 3"
//   }
// ];

// function ProjectCardSection() {
//   const [selectedId, setSelectedId] = useState<number | null>(null); // Change the type to number | null

//   return (
//     <section className="gap-5">
//       {items.map((item) => (
//         <ProjectCard
//           key={item.id}
//           item={item}
//           onClick={() => setSelectedId(item.id)}
//         />
//       ))}

//       <AnimatePresence>
//         {selectedId !== null && (
//           <motion.div layoutId={selectedId.toString()}> {/* Convert id to string */}
//             {/* Rendering the selected item */}
//             <motion.h5>{items[selectedId - 1].subtitle}</motion.h5>
//             <motion.h2>{items[selectedId - 1].title}</motion.h2>
//             <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// export default ProjectCardSection;
