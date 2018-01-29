import { connect } from 'react-redux';
import { loadListBooks, setModalVisible } from './Action';
import HomeView from './HomeView';

// What data from the store shall we send to the component?
const mapStateToProps = (state) => {
 /* const entities = state.entities;
  const home = state.home;
  let books = [];

  if(entities['books']){
    const bookEntities = entities['books'];
    for (let id in bookEntities) {
      if (bookEntities.hasOwnProperty(id)) {
        books.push(bookEntities[id]);
      }
    }
  }*/

  return {
 //   loading: home.books.loading,
  //  books,
	modalVisible: false,
  };
};

// Any actions to map to the component?
const mapDispatchToProps = dispatch => {
	return {
		loadListBooks: (data) => {
			dispatch(loadListBooks(data))
		},

		setModalVisible: (visible) => {
			dispatch(setModalVisible(visible)) 
		},
	}
}

const homeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeView);

export default homeContainer;