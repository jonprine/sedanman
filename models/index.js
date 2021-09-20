const User = require('./User');
const Show = require('./Show');

User.hasMany(Show, {
    foreignKey: 'user_id'
});

Show.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Show };