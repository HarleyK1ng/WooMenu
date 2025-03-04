import {gql} from 'apollo-boost';

const login = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(
      input: {
        clientMutationId: "uniqueId"
        username: $username
        password: $password
      }
    ) {
      authToken
      user {
        id
        userId
        name
        avatar {
          url
        }
        email
        lastName
        firstName
      }
    }
  }
`;

const register = gql`
  mutation REGISTER_USER($input: RegisterUserInput!) {
    registerCustomer(input: $input) {
      customer {
        id
        name
      }
    }
  }
`;

const categories = gql`
  {
    productCategories {
      nodes {
        id
        name
        image {
          sourceUrl
        }
        name
        children {
          nodes {
            id
            name
            image {
              sourceUrl
            }
            name
          }
        }
      }
    }
  }
`;
const categories1 = `
{
	productCategories(last: 1000, where: {childless: true}) {
	  nodes{
		id
		name
		image{
		  sourceUrl
		}
		databaseId
		children{
		  nodes{
			id
			name
			image{
		  sourceUrl
		}
		name
		  }
		}
	  }
	}
  }
`;

const parentCategories = `
{
  productCategories(last: 1000, where: {parent: null, orderby: DESCRIPTION}) {
	  nodes{
		id
		name
		databaseId
		image{
		  sourceUrl}
		children{
		  nodes{
			id
			name
			image{
		  sourceUrl}
		name}}}}}
`;

const childrenCategories = parentDatabaseId => `
{
	productCategories(last: 1000, where: {parent: ${parentDatabaseId}}) {
	  nodes{
		id
		name
		image{
		  sourceUrl
		}
		databaseId
		children{
		  nodes{
			id
			name
			image{
		  sourceUrl
		}
		name
		  }
		}
	  }
	}
  }
`;

const productsSorted = orderby => gql`
{
  products(first: 15, where:{orderby:${orderby}}){
    nodes {
      id
      name
      description
      ... on SimpleProduct{
        price
      }
      ... on VariableProduct{
        price
      }
      ... on ExternalProduct{
        price
      }
      image{
        sourceUrl
      }
    }
  }
}
`;

const singleProduct = query => gql`
query {
	product( id: "${query}") {
	  id
	  averageRating
	  purchaseNote
	  ... on SimpleProduct{
		  price
	  productCategories{
		 nodes{
		  name
		  children{
			nodes{
			  name
			}
		  }
		}
	  }
		}
	  name
	  sku
	  date
	  onSale
	  description
	  attributes{
		nodes{
		  name
		  options
		  visible
		}
	  }
	  image{
		sourceUrl
	  }
	  galleryImages{
		nodes{
		  sourceUrl
		}
	  }
	}
  }
`;

const checkout = gql`
  mutation checkout($input: CheckoutInput!) {
    checkout(input: $input) {
      clientMutationId
      order {
        id
        refunds {
          nodes {
            amount
          }
        }
      }
      customer {
        id
      }
      result
      redirect
    }
  }
`;

const refreshToken = gql`
  mutation RefreshJwtAuthTokenPayload($jwtRefreshToken: String!) {
    refreshJwtAuthToken(
      input: {clientMutationId: "uniqueId", jwtRefreshToken: $jwtRefreshToken}
    ) {
      authToken
      clientMutationId
    }
  }
`;

const addToCart = (qty, id, mut) =>
  JSON.stringify({
    query: `mutation {
    addToCart( input:  {    quantity: ${qty},    clientMutationId: "${mut}" }) {
        clientMutationId
        cartItem {
            key
            product {
                id
            }
            variation {
                id
            }
            quantity
            subtotal
            subtotalTax
            total
            tax
        }
    }
}
`,
  });

const productsByCategories = orderby => gql`
{
  products(first: 200, where:{categoryIn:"${orderby}"}){
    nodes {
      id
      name
      description
	  ... on SimpleProduct{
        price
      }
      ... on VariableProduct{
        price
      }
      ... on ExternalProduct{
        price
      }
      image{
        sourceUrl
      }

    }
  }
}
`;

const searchQuery = name => gql`
query MyQuery {
	products(where: {search:"${name}"}){
	  nodes{
		  id
		name
		description
		... on SimpleProduct{
		  price
		}
		... on VariableProduct{
		  price
		}
		... on ExternalProduct{
		  price
		}
		image{
		  sourceUrl
		}
	  }
	}
  }
  `;

export {
  login,
  register,
  categories,
  productsSorted,
  singleProduct,
  checkout,
  refreshToken,
  addToCart,
  categories1,
  parentCategories,
  childrenCategories,
  productsByCategories,
  searchQuery,
};
