let projArray = [
  {
    id: 1,
    _id: "23g9423o4n23o4ni23hb4nazldasd",
    title: "Foo Project",
    description: "A cool bar project",
  },
  {
    id: 2,
    _id: "23g94232o4n23o4ni23hb4nazldasd",
    title: "Foo Bar Project",
    description: "Another cool bar project",
  },
];

//Get Method
export const allProjectsAPI = (req, res, next) => {
  return res.send(JSON.stringify(projArray));
};

//Post Method
export const postProjectAPI = (req, res, next) => {
  //create project orbject
  const proj = {
    id: projArray.length + 1,
    _id: `23g9423o4n23o4nasdasdi23hb4nazldasd${Math.random()}`, //random string insert
    title: req.body.title,
    description: req.body.description,
  };
  projArray.push(proj); //push project
  return res.send(projArray);
};

// Delete Method
export const deleteProjectAPI = (req, res, next) => {
  const { id } = req.params; // get id
  projArray = projArray.filter((proj) => proj._id != id); // filter out delete project
  return res.send(projArray); //send projects array
};

//Put Method
export const updateProjectAPI = (req, res, next) => {
  const { id } = req.params; // get id

  projArray = projArray.map((p) => {
    // create updated project
    //set porject based on matching ids
    let updateProject =
      p._id == id
        ? {
            ...p,
            title: req.body.title,
            description: req.body.description,
          }
        : p;

    return updateProject;
  });

  return res.send(projArray); //send projects array
};
