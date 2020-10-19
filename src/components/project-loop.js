import React from "react"

const ProjectLoop = () => {
  let projectArray = [
    {
      name: "Horizons-Library",
      icon: "🍃",
      description:
        "Need information on your favorite Animal Crossing villagers and items? Look no further!",
      site: "https://horizons-library.netlify.app/",
      gitHub: "https://github.com/georuiz817/Horizons-Library",
    },
    {
      name: "Gobbler",
      icon: "🦃",
      description:
        "Celebrate the holiday by contributing to a sponsored charitable cause. Interact and discover what Thanksgiving is all about.",
      gitHub: "https://github.com/georuiz817/Gobbler",
    },

    {
      name: "Turtles-App",
      icon: "🍕",
      description:
        "Who doesn't love pizza? Gain inspiration by viewing the board and feed a turtle your favorite classic (or obscure) pizza slices.",
      gitHub: "https://github.com/georuiz817/turtles-app-",
    },
  ]
  return projectArray.map(p => (
    <div className="p-info">
       <h1>
        {p.name}
        {p.icon}
      </h1>
      <p>
        <em>{p.description}</em>
      </p>
      <p>- GitHub: <a target="_blank" rel="noopener noreferrer" href={p.gitHub}>{p.gitHub}</a></p>
      {p.site ? <p> - live site: <a target="_blank" rel="noopener noreferrer" href={p.site}>{p.site}</a></p> : null}
      <hr></hr>
    </div>
  ))
}

export default ProjectLoop
