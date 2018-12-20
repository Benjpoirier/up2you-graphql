module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING(45),
                unique: true,
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            first_name: {
                type: Sequelize.STRING,
            },
            last_name: {
                type: Sequelize.STRING,
            },
            birthdate: {
                type: Sequelize.DATEONLY,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            last_sign_in_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            current_sign_in_ip: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            locale: {
                allowNull: false,
                type: Sequelize.CHAR(5),
            },
            role: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            is_archived: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
        }),
    down: queryInterface => queryInterface.dropTable('users'),
};
