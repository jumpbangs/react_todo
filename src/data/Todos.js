import { v4 as uuidv4} from "uuid";

const TodoContent = [
  {
    id: uuidv4(),
    title: "Take the trash",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "Clean Room",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "Meeting in the morning",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "Do Shopping",
    completed: false,
  },
];

export default TodoContent;
