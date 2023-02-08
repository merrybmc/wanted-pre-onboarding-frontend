export const reOnChange = (event, state, setState) => {
  const { name, value } = event.target;
  setState({ ...state, [name]: value });
  console.log(state);
};
