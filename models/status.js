'use strict';

module.exports = (Sequelize, DataTypes) => {
	const Status = Sequelize.define('Status', {
		id: { type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
		url: { type: DataTypes.STRING },
		status: { type: DataTypes.STRING }
	}, {
		underscored: true,
		tableName: 'statuses'
	});

	return Status;
}
