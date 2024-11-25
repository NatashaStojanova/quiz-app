import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query {
    countries {
      name
      capital
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;
