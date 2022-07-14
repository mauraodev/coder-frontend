import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import IconButton from "../template/iconButton";
import { markAsDone, markAsPedding } from "./todoActions";

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.list || [];

    return list.map((todo) => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            style="success"
            icon="check"
            click={() => props.markAsDone(todo)}
            hide={todo.done}
          />
          <IconButton
            style="warning"
            icon="undo"
            click={() => props.markAsPedding(todo)}
            hide={!todo.done}
          />
          <IconButton
            style="danger"
            icon="trash-o"
            click={() => props.handleRemove(todo)}
            hide={!todo.done}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="table-actions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  list: state.todo.list,
});

const mapDispatchToProps = (distpatch) =>
  bindActionCreators({ markAsDone, markAsPedding }, distpatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
