const getUsers = (req, res) => {
	// Test data
	const users = [
		{ id: 1, name: 'Alice' },
		{ id: 2, name: 'Bob' },
	];

	res.json(users);
};

const createUser = (req, res) => {
	const { name } = req.body;
	res.status(201).json({ message: `User ${name} created!` });
};

export default { getUsers, createUser };