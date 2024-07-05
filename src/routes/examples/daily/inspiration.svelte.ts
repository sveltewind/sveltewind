let state = $state({
	href: 'https://dribbble.com/shots/24464565-User-Feedback',
	src: 'https://cdn.dribbble.com/userupload/15430667/file/original-2e68b3016c057d5327f10844f2aec61a.png?resize=1024x768'
});

export default {
	href: () => state.href,
	set: (value: { href?: string; src?: string }) => {
		if (value?.href !== undefined) state.href = value.href;
		if (value?.src !== undefined) state.src = value.src;
	},
	src: () => state.src
};
