import React from 'react'

function UserForm(props) {
    const { values, update, submit } = props;

    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit = {onSubmit}>
        <div>
            <label>User Form<br></br>
                <input
                name= "name"
                type = "text"
                placeholder = "name..."
                maxLength = "30"
                value = {values.name}
                onChange = {onChange}
                >
                </input ><br></br>
                <input name= "age"
                type = "text"
                placeholder = "age..."
                maxLength = "30"
                value = {values.age}
                onChange = {onChange}
                >
                </input><br></br>
                <input name= "email"
                type = "text"
                placeholder = "email..."
                maxLength = "30"
                value = {values.email}
                onChange = {onChange}
                >
                </input><br></br>
                <input name= "cellNumber"
                type = "number"
                placeholder = "cell phone..."
                maxLength = "30"
                value = {values.cellNumber}
                onChange = {onChange}
                >
                </input><br></br>
                <select name = "unit" value = {values.unit} onChange = {onChange}>
                    <option value = "">---------Select Unit---------</option>
                    <option value = "unit1">Unit 1</option>
                    <option value = "unit2">Unit 2</option>
                    <option value = "unit3">Unit 3</option>
                </select><br></br>
                <button>Submit</button>
            </label>
        </div>
        </form>
        
    )
}

export default UserForm
