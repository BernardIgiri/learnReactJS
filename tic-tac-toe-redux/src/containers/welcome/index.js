import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Welcome = props => (
	<div>
		<h1>Welcome To Tic-Tac-Toe</h1>
		<p>
			<button onClick={() => props.goPlay()}>Lets Play!</button>
		</p>
	</div>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
	goPlay: () => push('/game')
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Welcome)
