export default function mapStateToProps(component) {
    switch (component) {
        case "ToDoList":
            return function(state) {
                return {
                    items: state.todoReducer,
                }
            }
        default:
            return null;
    }

}