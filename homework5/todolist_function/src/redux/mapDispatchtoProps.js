import {bindActionCreators} from "redux";
import {addItem,deleteItem,completeTodo} from "./reducers/listReducer";

export default function mapDispatchToProps(component){
    switch (component){
        case "App": return function (dispatch){
            return{
                addNew : bindActionCreators(addItem,dispatch)
            }
        };
        case "ToDoItem": return function (dispatch){
            return{
                delItems:bindActionCreators(deleteItem,dispatch),
                complete: bindActionCreators(completeTodo,dispatch)
            }
        }

    }
}