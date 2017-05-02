var HelloUser = React.createClass({
	render:function(){
		return <div>Hello {this.props.name}</div>;
	}
});


ReactDOM.render(<HelloUser name="world"/>, document.getElementsById('firstComponent'));