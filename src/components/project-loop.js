import React from "react"

const ProjectLoop = () => {
  let projectArray = [
    {
      name: "Temp(o)",
      icon: "🌧️",
      description:
        "Get todays temp around the world and some nice tunes while you're at it.",
      site: "https://temp-o.netlify.app/#/",
      gitHub: "https://github.com/georuiz817/temp-o",
    },
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
  ]
  return projectArray.map(p => (
    <div className="p-info">
      <h1>
        {p.name}
      </h1>
      <p>
        <em>{p.description}</em>
      </p>
      <p>
        - GitHub:{" "}
        <a target="_blank" rel="noopener noreferrer" href={p.gitHub}>
          {p.gitHub}
        </a>
      </p>
      {p.site ? (
        <p>
          {" "}
          - live site:{" "}
          <a target="_blank" rel="noopener noreferrer" href={p.site}>
            {p.site}
          </a>
        </p>
      ) : null}
      <hr></hr>
    </div>
  ))
}

export default ProjectLoop
