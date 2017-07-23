import { connect } from 'react-redux';
import { updateUserInfo  } from './Action';

import LoginView from './LoginView';

// What data from the store shall we send to the component?
const mapStateToProps = state => {
  return state.login;
};

// Any actions to map to the component?
const mapDispatchToProps = (dispatch) => ({
    updateUserInfo: (data) => dispatch(updateUserInfo(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);