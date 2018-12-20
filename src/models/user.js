export default (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            id: {
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                type: DataTypes.UUIDV4,
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING(45),
                unique: { msg: { message: 'Email unique violation', code: 'USR_DAT_02_00' } },
                validate: {
                    isEmail: true,
                },
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            is_archived: {
                type: DataTypes.BOOLEAN,
                api: {
                    editable: ['admin'],
                    visible: ['admin'],
                },
                defaultValue: false,
                allowNull: false,
            },

            last_sign_in_at: {
                allowNull: false,
                defaultValue: DataTypes.NOW,
                type: DataTypes.DATE,
                api: {
                    visible: ['admin'],
                },
            },
            role: {
                allowNull: false,
                type: DataTypes.STRING,
                api: {
                    editable: ['admin'],
                    visible: ['admin', 'candidate', 'customer'],
                },
            },
            created_at: {
                allowNull: true,
                type: DataTypes.DATE,
            },
            updated_at: {
                allowNull: true,
                type: DataTypes.DATE,
            },
        },
        {
            tableName: 'users',
            underscored: true,
        },
    );

    return User;
};
