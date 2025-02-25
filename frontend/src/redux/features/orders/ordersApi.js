import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseUrl'

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/orders`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem('token')
        if(token) {
            Headers.set('Authorization', `Bearer ${token}`)
        }
        return Headers
    }
})

const ordersApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: baseQuery,
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        getOrderByEmail: builder.query({
            query: (email) => `/email/${email}`,
            providesTags: ["Orders"]
        }),
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: '/',
                method: 'POST',
                body: newOrder,
                credentials: 'include'
            }),
            invalidatesTags: ["Orders"]
        }),
    })
})

export const {
    useCreateOrderMutation,
    useGetOrderByEmailQuery,
} = ordersApi
export default ordersApi