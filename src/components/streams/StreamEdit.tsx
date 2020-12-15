import React from 'react';
import { connect } from 'react-redux';
import { editStream } from '../../actions';

function StreamEdit(): JSX.Element {
  return <div>stream edit</div>;
}

const mapStateToProps = (state: any, ownProps: any) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { editStream })(StreamEdit);
