export const auth = {
    signup(parent, args, context) {
        return {
            token: 'best token ever',
            user: {
                name: 'benjamin'
            },
        }
    },

    login(parent, args, context) {
        return {
            token: 'best token ever',
            user: {
                name: 'benjamin'
            },
        }
    },
}