

module.exports = (Sequelize, DataTypes) => {
	const App = Sequelize.define('App', {
		id: { type: DataTypes.UUID, primaryKey: true, unique: true, defaultValue: Sequelize.UUIDV4 },
		name: { type: DataTypes.STRING, unique: true },
		url: { type: DataTypes.STRING, unique: true }
	}, {
		underscored: true,
		tableName: 'apps'
	})

	return App;
}