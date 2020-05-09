import React, {Component} from 'react';
import {SearchTextUI} from "../presentational/SearchTextUI.component";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {GetFood, SearchTextChange} from "../../../actions/food.actions";
import debounce from 'debounce';

type IProps = {
    searchText: string
} & ReturnType< typeof mapDispatchToProps >;

class SearchTextComponent extends Component<IProps> {

    constructor(props: any) {
        super(props);
    }

    onSearchTextChanged = ( value: string ) => {
        const { actions: { SearchTextChange } } = this.props;
        SearchTextChange( value );
    }
    render() {
        const { searchText } = this.props;
        console.log( searchText );
        return (
            <SearchTextUI searchText={ searchText } onSearchTextChange={ this.onSearchTextChanged }/>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<SharedTypes.Action>) => (
    {
        actions: bindActionCreators(
            {
                SearchTextChange,
            }, dispatch
        )
    }
)


export default connect( null ,mapDispatchToProps )( SearchTextComponent );
