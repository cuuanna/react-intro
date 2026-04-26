import ProjectCard from "./Components/ProjectCard"

function App() {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <h1>My Projects</h1>
        <span>Anna Tran</span>
      </header>

      <ProjectCard
        name="Genesis"
        screenshot="./images/genesis.jpg"
        github="https://github.com/cuuanna/Genesis"
        tech={["HTML", "CSS", "Figma"]}
        description="Recreation of a modern website design through a Figma prototype."
      />

      <ProjectCard
        name="Productly"
        screenshot="./images/productly.jpg"
        github="https://github.com/cuuanna/Productly"
        tech={["HTML", "CSS"]}
        description="Modern product landing page design through a Figma prototype. This project involved creating a connected website that effectively showcases a product. The hardest part of this project was connecting the different sections of the website together."
      />

      <ProjectCard
        name="Responsive Website"
        screenshot="./images/responsive.jpg"
        github="https://github.com/cuuanna/Responsive-Website"
        tech={["HTML", "CSS"]}
        description="Responsive website design through a Figma prototype. During this project, I focused on creating a website that adapts seamlessly to different screen sizes and devices, ensuring an optimal user experience across desktops, tablets, and mobile phones."
      />
 
    </div>
  )
}

export default App
