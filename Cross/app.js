const cross = (...sections) => {
  if (sections.length <= 1) return false;
  const sortSections = sections.sort((a, b) => {
    return a.x1 - b.x1;
  });
  for (let i = 0; i <= sortSections.length - 2; i++) {
    if (sortSections[i].x2 >= sortSections[i + 1].x1) return true;
  }

  return false;
};

console.log(
  cross(
    { x1: 1, x2: 10 },
    { x1: 11, x2: 27 },
    { x1: 7, x2: 544 },
    { x1: 124, x2: 128 }
  )
);
