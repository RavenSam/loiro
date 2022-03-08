import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
	query Categories {
		Categories(filter: { status: { _eq: "published" } }) {
			name
			id
			slug
			thumbnail {
				id
			}
		}
	}
`;
