import { bindActionCreators } from 'redux';
import { changeTimezone, changeFormat } from './reducers/slice';

export default function mapDispatchToProps(component) {
  switch (component) {
    case 'Selector':
      return function (dispatch) {
        return {
          timezoneCh: bindActionCreators(changeTimezone, dispatch),
        };
      };
    case 'ChangeFormat':
      return function (dispatch) {
        return {
          formatting: bindActionCreators(changeFormat, dispatch),
        };
      };
    default: return null;
  }
}
