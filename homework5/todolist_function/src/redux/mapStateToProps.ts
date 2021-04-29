
export default function mapStateToProps(component:string) {
    switch (component) {
        case "ToDoList":
            //@ts-ignore
            return function(state) {
                return {
                    items: state.todoReducer,
                }
            }
        default:
            return null;
    }

}
