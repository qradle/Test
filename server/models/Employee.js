module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define('Employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    departmentId: DataTypes.INTEGER,
  }, {
    freezeTableName: true,
  });

  return Employee
}
