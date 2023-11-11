export default node => {
	const clickHandler = (e) => {
		if (node && !node.contains(e.target) && !e.defaultPrevented) {
			userHandler(e);
		}
	};

	document.addEventListener('click', clickHandler, true);

	return {
		destroy() {
			document.removeEventListener('click', clickHandler, true);
		}
	};
};
