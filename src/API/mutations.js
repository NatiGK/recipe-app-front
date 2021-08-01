import {gql} from '@apollo/client';
export const SIGN_IN = gql`
    mutation ($email: String!, $password: String!){
        signIn(email: $email, password: $password){
            name
            avatar
            email
        }
    }
`;

export const SIGN_UP = gql`
    mutation signUp($user: UserInput!){
        signUp(user: $user){
            name
            avatar
            email
        }
    }
`;

export const POST_RECIPE = gql`
    mutation postRecipe($recipe: PostRecipeInput!){
        postRecipe(recipe: $recipe){
            _id
        }
    }
`;