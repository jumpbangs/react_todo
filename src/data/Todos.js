import uuid from "uuid";

const TodoContent = [
    {
        id: uuid.v4(),
        title: 'Take the trash',
        completed: false,
    },
    {
        id: uuid.v4(),
        title: 'Clean Room',
        completed: false,
    },
    {
        id: uuid.v4(),
        title: 'Meeting in the morning',
        completed: false,
    },
    {
        id: uuid.v4(),
        title: 'Do Shopping',
        completed: false,
    }
]


export default TodoContent;