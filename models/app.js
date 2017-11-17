'use strict';

module.exports = (Sequelize, DataTypes) => {
	const App = Sequelize.define('App', {
		id: { type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
		name: { type: DataTypes.STRING, unique: true },
		url: { type: DataTypes.STRING, unique: true }
	}, {
		underscored: true,
		tableName: 'apps'
	})

	return App;
}
