export const children = [
	{id: 1, first_name: "Alex", last_name: "Heimann"},
	{id: 2, first_name: "Mark", last_name: "Heimann"},
	{id: 3, first_name: "Rachel", last_name: "Heimann"},
	{id: 4, first_name: "Larry", last_name: "Heimann"}
];

export const tasks = [
	{id: 1, name: "Sweep floor"},
	{id: 2, name: "Wash dishes"},
	{id: 3, name: "Shovel driveway"},
	{id: 4, name: "Water plants"},
];

export const initalChores = [
	{child: "Mark", task: "Sweep", due_on: "2018-04-09", completed: false},
	{child: "Alex", task: "Sweep", due_on: "2018-04-09", completed: false},
	{child: "Alex", task: "Clean", due_on: "2018-04-09", completed: false},
	{child: "Jane", task: "Sweep", due_on: "2018-04-09", completed: false},
	{child: "Mark", task: "Wash", due_on: "2018-04-09", completed: false},
	{child: "Jane", task: "Sweep", due_on: "2018-04-09", completed: false},
	{child: "Mark", task: "Garden", due_on: "2018-04-09", completed: false}
];

export const addChoreAPI = (oldChores, newChore) => {
	const newChores = [...oldChores]; // syntactic sugar for copying a list
	newChores.push(newChore)
	return newChores
}

export const toggleCompleteAPI = (oldChores, index) => {
	const newChores = [...oldChores]; // syntactic sugar for copying a list
	newChores[index].completed = !newChores[index].completed;
	return newChores
}

export const deleteChoreAPI = (oldChores, index) => {
	const newChores = [...oldChores]; // syntactic sugar for copying a list
	newChores.splice(index, 1)
	return newChores
}