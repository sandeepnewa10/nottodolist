import TaskSchema from "./TaskSchema.js";

//insert
export const insterTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

//selct

export const getTasks = () => {
  return TaskSchema.find();
};

export const getSingleTask = (_id) => {
  return TaskSchema.findById(_id);
};
// update
export const updatTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type }, { new: true });
};

// delete single item by id
export const deleteTaskById = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};

// delete many items from the array of ids
export const deleteManyTasks = (ids) => {
  return TaskSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};
