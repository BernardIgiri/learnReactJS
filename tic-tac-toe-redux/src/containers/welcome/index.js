import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Welcome = props => (
	<div>
		<h1>Welcome To Tic-Tac-Toe</h1>
		<p>
			<button onClick={pops.goPlay()}>Lets Play!</button>
		</p>
	</div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
	goPlay: () => push('/game')
}, dispatch)

export default connect(
	mapDispatchToProps
)(Welcome)
