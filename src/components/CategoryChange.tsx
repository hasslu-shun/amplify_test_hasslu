import { createClient } from "contentful"
import TopArticlesDefault from "./TopArticlesDefault"



// export async function getStaticProps() {
//     const client = createClient({
//         space: process.env.CONTENTFUL_SPACE_ID!,
//         accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
//     })
//     const res = await client.getEntries({content_type: 'recipe'})
//     return {
//         props: {
//             recipes: res.items
//         }
//     }
// }

// export default function Recipes({recipes}: {recipes: []}) {
//     return (
//         <TopArticlesDefault title="転職" info={recipes} /> 
//     )
// }

// const CategoryChange = ({recipes}: {recipes: []}) => {
//     return (
//         <TopArticlesDefault title="転職" info={recipes} /> 
//     )
// }

// export default CategoryChange;

// const CategoryChange = () => {
//     return (
//         <div>
            
//         </div>
//     );
// }

// export default CategoryChange;
