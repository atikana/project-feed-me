const addRecipe = () => {
    return {
        type: 'ADD'
    }
}

const getRecipe = () => {
    return {
        type: 'GETRECIPES'
    }
}

const deleteRecipe = () => {
    return {
        type: 'DELETE'
    }
}

const signIn = () => {
    return {
        type: 'SIGNIN'
    }
}

const signOut = () => {
    return {
        type: 'SIGNOUT'
    }
}

export default {
    addRecipe,
    deleteRecipe,
    signIn,
    signOut
};