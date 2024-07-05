let state: string = $state('');

export default {
	get: () => state,
	set: (value: string) => (state = value)
};
