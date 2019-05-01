import React from "react";
import { connect } from "react-redux";
import { toggleSidebar } from "./ui";
import cx from "classnames";

class Sidebar extends React.Component {
  sidebarClassName() {
    return cx({
      open: this.props.ui.sidebarOpen
    });
  }

  handleClick() {
    this.props.dispatch(toggleSidebar(!this.props.ui.sidebarOpen));
  }

  render() {
    return (
      <aside id="sidebar" className={this.sidebarClassName()}>
        <div id="sidebar-left">
          <button onClick={this.handleClick.bind(this)}>Toggle</button>
        </div>
        <div id="sidebar-right">
          <h3>Person Details</h3>
          <p>Name: {this.props.person.name}</p>
          <p>Age: {this.props.person.age}</p>
        </div>
      </aside>
    );
  }
}

const mapStateToProps = state => {
  return {
    ui: state.ui,
    person: state.person
  };
};

export default connect(mapStateToProps)(Sidebar);
