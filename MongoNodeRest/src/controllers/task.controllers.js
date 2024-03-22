import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id,
  }).populate("user");
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description, data } = req.body;
  console.log("req.user: ", req.user);
  const newTask = new Task({
    title,
    description,
    data,
    user: req.user.id,
  });

  await newTask.save();
  res.json(newTask);
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({ messaje: "Tarea no encontrada" });
  }
  res.json(task);
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) {
    return res.status(404).json({ messaje: "Tarea no encontrada" });
  }
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    return res.status(404).json({ messaje: "Tarea no encontrada" });
  }
  res.json(task);
};
