export default function mapStateToProps (component){
    switch (component){
        case "App": return function (state){
            return{
                items: state.todoReducer,
            }
        }
    }

}