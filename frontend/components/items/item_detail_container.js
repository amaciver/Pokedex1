import { connect } from 'react-redux';
import { ItemDetail } from './item_detail';
import { selectItem } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(state, ownProps.params.itemId)
});

export default connect(mapStateToProps, null)(ItemDetail);
