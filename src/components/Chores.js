import React from 'react';
import '../style/Chores.css';

class Chores extends React.Component {

	state = { 
		chores: [
		{child: "Mark", task: "Sweep", due_on: "2018-04-09", completed: false},
		{child: "Alex", task: "Sweep", due_on: "2018-04-09", completed: false},
		{child: "Alex", task: "Clean", due_on: "2018-04-09", completed: false},
		{child: "Jane", task: "Sweep", due_on: "2018-04-09", completed: false},
		{child: "Mark", task: "Wash", due_on: "2018-04-09", completed: false},
		{child: "Jane", task: "Sweep", due_on: "2018-04-09", completed: false},
		{child: "Mark", task: "Garden", due_on: "2018-04-09", completed: false}]

	}

	showChores = () => {
		return this.state.chores.map((chore, index) => {
	        return (
	        	<tr key={index} >
	        	<td width="125" align="left">{chore.child}</td>
	        	<td width="200" align="left">{chore.task}</td>
	        	<td width="200" align="center">{chore.due_on}</td>
	        	<td width="125" align="center">{chore.completed ? "True" : "False"}</td>
	        	<td width="50">Check</td>
	        	<td width="50">Delete</td>
	        	</tr>
	        	)
	    })
	}

	render() {
		return (
			<div className="chores">
				<table>
					<thead>
						<tr>
							<th width="125" align="left">Child</th>
							<th width="200" align="left">Task</th>
							<th width="75">Due on</th>
							<th width="125">Completed</th>
						</tr>
					</thead>
					<tbody>
							{ this.showChores() }
					</tbody>
				</table>
				
				<button>New Chore</button>

			</div>
		);
	}
}

export default Chores;
