
module.exports = (Sequelize, DataTypes) => {
	const Status = Sequelize.define('Status', {
		id: { type: DataTypes.UUID, primaryKey: true, unique: true, defaultValue: DataTypes.UUIDV4},
		url: { type: DataTypes.STRING },
		status: { type: DataTypes.STRING }
	}, {
		underscored: true,
		tableName: 'statuses'
	});

	return Status;
}