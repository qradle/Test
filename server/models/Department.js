module.exports = function(sequelize, DataTypes) {
  var Department = sequelize.define('Department', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        Department.hasMany(models.Employee, { foreignKey: 'departmentId', as: 'employees'})
      }
    }
  })

  return Department
}
