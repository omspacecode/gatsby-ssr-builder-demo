import * as React from "react"
import { BuilderComponent, builder } from '@builder.io/react'

builder.init(process.env.BUILDER_PUBLIC_KEY);

const Page = ({ serverData }) => {
    return (
        <div>
            <div>Hello world!</div>
            <BuilderComponent model="page" content={serverData.page} /> {/*  Replace with your Builder.io model name */}
        </div>
    )
}

export async function getServerData() {
    try {
        const page =
            (await builder
                .get('page', {
                    userAttributes: {
                        urlPath: '/',
                    },
                })
                .toPromise()) || null

        return {
            props: {
                page,
            },
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                // Provide an empty object or handle the error as needed
                page: {}
            },
        }
    }
}
export default Page
