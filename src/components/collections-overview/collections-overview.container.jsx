import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop-selectors";
import WithSpinner from "../with-spinner";
import CollectionsOverview from ".";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

// curring functions
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;;
