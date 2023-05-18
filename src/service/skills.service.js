const arr = [
  {
    id: 1,
    title: 'javascript',
  },
  {
    id: 2,
    title: 'typescript',
  },
  {
    id: 3,
    title: 'mongodb',
  },
  {
    id: 4,
    title: 'mongoose',
  },
  {
    id: 5,
    title: 'pg',
  },
];

const getAllSkills = () => {
  return arr;
};

const getSkillsById = id => {
  const filteredarr = arr.filter(el => el.id == id);
  return filteredarr;
};

const createSkills = title => {
  const obj = { id: arr.length + 1, title };
  arr.push(obj);
  return arr;
};
const deleteSkillsById = id => {
  const filteredarr = arr.filter(el => el.id != id);
  return filteredarr;
};

module.exports = {
  getAllSkills,
  getSkillsById,
  createSkills,
  deleteSkillsById,
};
