import React from "react";
import { connect } from "react-redux";
import { toggleSidebar } from "./ui";
import { updateName, updateAge } from "./person";

class MainBody extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleUpdateAge = this.handleUpdateAge.bind(this);
    this.handleUpdateName = this.handleUpdateName.bind(this);
  }
  handleClick() {
    this.props.dispatch(toggleSidebar(!this.props.ui.sidebarOpen));
  }

  handleUpdateName(e) {
    this.props.dispatch(updateName(e.target.value));
  }

  handleUpdateAge(e) {
    this.props.dispatch(updateAge(e.target.value));
  }

  render() {
    return (
      <main id="main-body">
        <button onClick={this.handleClick}>Also Toggle</button>
        <div>
          <input
            onChange={this.handleUpdateName}
            value={this.props.person.name}
            placeholder="Update person name"
          />
        </div>
        <div>
          <input
            onChange={this.handleUpdateAge}
            value={this.props.person.age}
            placeholder="Update person age"
          />
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  person: state.person
});

export default connect(mapStateToProps)(MainBody);
