import {connect} from "react-redux"
import Link from "../components/Link"

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onCLick: ()=>{
			//dispatch(setVisibility(ownProps.filter))
		}
	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

export default FilterLink;