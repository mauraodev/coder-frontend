import axios from "axios";

const URL = "http://localhost:3003/api/todos";

export const changeDescription = (event) => ({
  type: "DESCRIPTION_CHANGE",
  payload: event.target.value,
});

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`);

  return {
    type: "TODO_SEARCHED",
    payload: request,
  };
};

export const add = (description) => {
  return (dispatch) => {
    axios
      .post(URL, { description })
      .then((resp) =>
        dispatch({
          type: "TODO_CLEAR",
          payload: resp.data,
        })
      )
      .then(() => dispatch(search()));
  };
};

export const markAsDone = (todo) => {
  return (dispatch) => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(() => dispatch(search()));
  };
};

export const markAsPedding = (todo) => {
  return (dispatch) => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(() => dispatch(search()));
  };
};

export const remove = (todo) => {
  return (dispatch) => {
    axios
      .delete(`${URL}/${todo._id}`)
      .then(() => dispatch(search()));
  };
};

export const clear = () => {
  return {
    type: 'TODO_CLEAR',
  }
}