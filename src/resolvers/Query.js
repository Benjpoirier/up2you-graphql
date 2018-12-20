export const Query = {
    me(parent, args, context) {
        console.log(context.models);
        return {
            name: 'benjamin',
        };
    },
};
