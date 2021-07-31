import {gql} from '@apollo/client'
export const GET_ALL_RECIPES = gql`
    query allRecipes($features: FeaturesInput!){
        allRecipes(features: $features){
            _id
            pubDate
            cookTime
            prepTime
            title
            description
            category
        }
    }
`;
export const GET_SINGLE_RECIPE = gql`
    query singleRecipe($_id: ID!){
        recipe(_id: $_id){
            title
            description
            cookTime
            prepTime
            servings
            ingredients
            ratingAmount
            category
            method{
                stepTitle
                stepDescription
                imgs
            }
        }
    }
`