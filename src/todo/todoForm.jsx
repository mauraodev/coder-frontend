import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { add, changeDescription, clear, search } from "./todoActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e) {
    const { add, clear, search, description } = this.props

    if (e.key === "Enter") {
      e.shiftKey ? search() : add(description);
    } else if (e.key === "Escape") {
      clear();
    }
  }

  componentWillMount() {
    this.props.search();
  }

  render() {
    const { add, search, description } = this.props

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
            click={() => add(description)}
          />
          <IconButton
            style="info"
            icon="search"
            click={search}
          />
          <IconButton
            style="default"
            icon="close"
            click={this.props.clear}
          />
        </Grid>
      </div>
    );
  }
}

const mapToStateToProps = (state) => ({ description: state.todo.description });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ add, clear, changeDescription, search }, dispatch);

export default connect(mapToStateToProps, mapDispatchToProps)(TodoForm);
