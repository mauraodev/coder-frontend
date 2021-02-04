import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default (props) => (
  <div role="form" className="todo-form">
    <Grid cols="12 9 10">
      <input
        type="text"
        className="form-control"
        id="description"
        placeholder="Adicione uma tarefa"
        value={props.description}
        onChange={props.handleChange}
      />
    </Grid>

    <Grid cols="12 3 2">
      <IconButton style="primary" icon="plus" click={props.handleAdd} />
      <IconButton style="info" icon="search" click={props.handleSearch} />
      <IconButton style="default" icon="close" click={props.handleClear} />
    </Grid>
  </div>
);
