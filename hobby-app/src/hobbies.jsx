import { Component } from "react";
import { toast } from "react-toastify";

class Hobbies extends Component {
  state = {
    newHobby: "",
    hobbies: [],
  };

  onNewHobbyChange = (e) => {
    this.setState({ newHobby: e.target.value });
  };

  onAddNewHobby = () => {
    const { newHobby, hobbies } = this.state;
    const newHobbyLC = newHobby.toLowerCase();
    if (!newHobby) {
      toast("Please enter a valid hobby!");
      return;
    }

    if (hobbies.includes(newHobbyLC)) {
      toast("This hobby already exists!");
      return;
    }

    this.setState({ hobbies: [newHobbyLC, ...hobbies], newHobby: "" });
    toast(`${newHobby} added successfully!`);
  };

  deleteHobby = (index) => {
    const { hobbies } = this.state;
    //  this.setStat({ hobbies: hobbies.splice(index, 1) }); // this doesnt work here
    const updatedHobby = hobbies.filter((item, id) => id !== index);
    this.setState({ hobbies: updatedHobby });
  };

  onDeleteAll = () => {
    console.log("hi");
    toast("All Hobbies deleted");
    this.setState({ hobbies: [] });
  };

  updateHobby = (index) => {
    // const {  hobbies } = this.state;
    console.log(index);
    // console.log(hobbies.splice(index, 1));
    // this.setStat({ hobbies: hobbies.splice(index, 1) });
  };

  render() {
    const { newHobby, hobbies } = this.state;
    console.log("Re-Render: ", { newHobby, hobbies });
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="form-element">
            <p style={{ fontWeight: 600 }}>New Hobby</p>
            <div style={{ display: "flex" }}>
              <input
                style={{ outline: "none", width: "100%", padding: "12px" }}
                type="text"
                placeholder="Enter a hobby"
                value={newHobby}
                onChange={this.onNewHobbyChange}
              />
              <button
                style={{ width: "200px", fontWeight: 600 }}
                onClick={this.onAddNewHobby}
              >
                Add Hobby
              </button>

              <button
                style={{ width: "200px", fontWeight: 600 }}
                onClick={this.onDeleteAll}
              >
                Delete All Hobbies
              </button>
            </div>
          </div>
        </div>
        <div style={{ width: 300 }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {/* or 
            {hobbies.map((current) => {
              return (
                <li style={{ textTransform: "capitalize" }} key={current}>
                  {current}
                </li>
              ); */}
            {hobbies.map((item, index) => (
              <li
                key={index}
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>{item}</span>
                <button onClick={() => this.deleteHobby(index)}>Delete</button>
                <button onClick={this.updateHobby(index)}>Update</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Hobbies;
