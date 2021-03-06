export default function ({dispatch}) {
  return next => action => {
    // If it's not promise.
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    action.payload
      .then(response => {
        const newAction = {...action, payload: response};
        dispatch(newAction);
      });
  }
}