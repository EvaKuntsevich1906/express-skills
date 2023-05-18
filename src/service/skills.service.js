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
  if (!arr.length) throw new Error('arr is empty');
  return arr;
};

const getSkillsById = id => {
  const filteredarr = arr.filter(el => el.id == id);
  if (!filteredarr.length) throw new Error('not found');
  return filteredarr;
};

const createSkills = title => {
  const obj = { id: arr.length + 1, title };
  arr.push(obj);
  if (!arr.length) throw new Error('arr is empty');
  return arr;
};

const updateSkillsById = (id, title) => {
    const filteredarr = arr.filter(el => el.id != id);
    const obj = { id, title };
    filteredarr.push(obj);
    return filteredarr;
  };

const deleteSkillsById = id => {
  const filteredarr = arr.filter(el => el.id != id);
  if (filteredarr.length > 0) throw new Error('not found');
  return filteredarr;
};

module.exports = {
  getAllSkills,
  getSkillsById,
  createSkills,
  updateSkillsById,
  deleteSkillsById
};
