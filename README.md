# Part 1: Running the React Application
1. Get the starter code from (github)[] and install the (React Developer Tool for Chrome)[https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en]
2. Go into the project directory and run `npm install` and `npm start`
3. Head over to `localhost:3000` (React uses the same port as Rails) and you should see a basic Chore Tracker.

# Part 2: Completing and Deleting a Chore
1. When users click on the `Check` button in the Chore Tracker table, they should be able to toggle the `Completed` value of the specific chore. Creaete an anonymous function `toggleComplete` which will take in an `index` and call the helper function `toggleComplete` which is defined in `src/api.js` 
2. (something to do with needing to refresh) Add in `this.forceUpdate()` 
3. Similarly, try implementing the `Delete` button in the Chore Tracker table.

# Part 3: Showing and Hiding NewChoreForm
1. First, we would need to keep track of a state of whether the form is open by creating a `showForm` state.
    ```
    state = { 
        showForm: false
    }
    ```
2. Next, create a function that would toggle the `showForm` state, which will be triggered when the `New Chore` button is clicked.
    ```
    toggleForm = () => {
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }));
    }
    ```
    Your button should look like this `<button onClick={this.toggleForm} >New Chore</button>`
3. Head over to your application and open up the developer tool to make sure that the `showForm` state can successfully be toggled when the `New Chore` button is clicked.
4. Now, we would want to create the `NewChoreForm` Component. Create a new file `NewChoreForm.js` in `src/components/` and `NewChoreForm.css` in `src/style/`.

    In `NewChoreForm.js`, add the following code: 
    ```
    import React from "react"
    import { children } from "../api";
    import '../style/NewChoreForm.css';

    class NewChoreForm extends React.Component {

        // Contructor
        state = {
            child: children ? children[0].first_name : null,
            // TODO : Add other states
        }

        // Refactored Form Handling
        handleInputChange = (event) => {
            const target = event.target;
            const name = target.name;
            const value = target.value;

            this.setState({
              [name]: value
            });
        }

        onSubmit = () => {
            // TODO : create a newChore and pass it to this.props.onSubmit
        }

        // Render Helper Methods
        renderChildrenOptions = () => {
            return children.map((child, index) => {
                return (
                    <option key={index} value={child.first_name}> {child.first_name} </option>
                )
            })
        }

        // TODO: renderTasksOptions function

        render() {
            return (
                <div className="chore-form">
                    <h4>New Chore Form</h4>
                    <div className="form-input">
                      <span>Child: </span>
                      <select name="child" onChange={this.handleInputChange}>
                        { this.renderChildrenOptions() }
                      </select>
                    </div>

                    <!-- TODO : Add in Tasks selection and Due on date input -->
                    
                    <br />
                    <button onClick={this.onSubmit}>Submit</button>
              </div>
            )
        }
    }

    export default NewChoreForm
    ```

    In `NewChoreForm.css`, add the following code: 
    ```
    .chore-form {
        margin: 20px 0px;
        border: 1px gainsboro solid;
        padding: 10px 10px 30px;
    }

    .form-input span {
        float: left;
        width: 75px;
    }
    ```

5. Now that we have the `NewChoreForm` Component, we need to connect it to the `Chores` Component.

    ```
    import NewChoreForm from './NewChoreForm';
    ```

    ```
    { this.state.showForm ? this.renderForm() : null }
    ```

    ```
    renderForm = () => {
        return (
            <div>
                <NewChoreForm />
            </div>
        )
    }
    ```
6. At this point, when you click on `New Chore`, you should be able to see a minimal New Chore Form.

# Part 4: Adding a new Chore

1. We want to be able to add a new Chore using the New Chore Form. Since a `chore` has `child`, `task`, `due_on` and `completed`, we would have to add in the different `states` and form inputs.

2. Open the application and make sure when the form input is changed, the `state` changes.

3. In `Chores.js`, add the following function that would call the `addChore` helper from `api.js`.

    ```
    addChore = (newChore) => {
        addChore(newChore)
        this.toggleForm() // Hide the chore form after the chore is added
    }
    ```

    We would pass this function down to the `NewChoreForm` component by having ``` <NewChoreForm onSubmit = { this.addChore } />```

4. Now, implement the `onSubmit` function in `NewChoreForm`, which will call `this.props.onSubmit`. Hint: figure out what function is called in `this.props.onSubmit` and the input parameters.

5. And you're done! (Hopefully)