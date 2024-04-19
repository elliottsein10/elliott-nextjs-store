import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccesTokenCreate"
import { cookies } from 'next/headers'

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies()
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const { customerAccessTokenCreate }: {
    customerAccessTokenCreate: {
      customerAccessToken: {
        accessToken: string
        expiresAt: string
      }
    }
  }
    = await graphqlClient.request(customerAccessTokenCreateMutation, {
      "email": email,
      "password": password
    })

    if (customerAccessTokenCreate && customerAccessTokenCreate.customerAccessToken) {
        const { accessToken, expiresAt } = customerAccessTokenCreate.customerAccessToken;
        

  if (accessToken) {
    cookiesStore.set("accessToken", accessToken, {
      path: "/",
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: "strict"
    })

    return accessToken
  }
}
}