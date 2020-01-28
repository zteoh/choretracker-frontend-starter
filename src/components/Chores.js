import React from 'react';
import '../style/Chores.css';

class Chores extends React.Component {

	// Constructor
	state = { 
		chores: this.props.initialChores
	}

	showChores = () => {
		return this.state.chores.map((chore, index) => {
	        return (
	        	<tr key={index} >
	        	<td width="125">{chore.child}</td>
	        	<td width="200">{chore.task}</td>
	        	<td width="200">{chore.due_on}</td>
	        	<td width="125">{chore.completed ? "True" : "False"}</td>
	        	<td width="50">Check</td>
	        	<td width="50">Delete</td>
	        	</tr>
	        	)
	    })
	}

	render() {
		return (
			<div className="chores">
				<h1> Chore Tracker </h1>
				<table>
					<thead>
						<tr>
							<th width="125">Child</th>
							<th width="200">Task</th>
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
