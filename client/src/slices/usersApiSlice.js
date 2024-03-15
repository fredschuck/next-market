import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({ // 'login' is the name of the mutation endpoint
            query: (data) => ({ // 'query' is a function that returns the options for the fetch request & 'data' is the payload obtained from the form
                url: `${USERS_URL}/auth`, // 'url' is the URL to send the request to
                method: 'POST',
                body: data
            }),
        })
    })
});

// Naming Convention: 'use' + [Query Endpoint Name] + 'Query'
export const { useLoginMutation } = usersApiSlice;