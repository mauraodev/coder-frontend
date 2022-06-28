import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { changeDescription, search } from "./todoActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e) {
    if (e.key === "Enter") {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
    } else if (e.key === "Escape") {
      this.props.handleClear();
    }
  }

  componentWillMount() {
    this.props.search();
  }

  render() {
    return (
      <div role="form" className="todo-form">
        <Grid cols="12 9 10">
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Adicione uma tarefa"
            value={this.props.description}
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}
          />
        </Grid>

        <Grid cols="12 3 2">
          <IconButton
            style="primary"
            icon="plus"
            click={this.props.handleAdd}
          />
          <IconButton
            style="info"
            icon="search"
            click={this.props.handleSearch}
          />
          <IconButton
            style="default"
            icon="close"
            click={this.props.handleClear}
          />
        </Grid>
      </div>
    );
  }
}

const mapToStateToProps = (state) => ({ description: state.todo.description });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeDescription, search }, dispatch);

export default connect(mapToStateToProps, mapDispatchToProps)(TodoForm);
