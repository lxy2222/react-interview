import type { LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";

export const loader = async({
    params,
}: LoaderFunctionArgs) => {
    return {
        componentName: params.problemName
    }
};

export default function InterViewProblem() {
    const data = useLoaderData<typeof loader>();

    return (
        <div>
            <p>please finish the {data.componentName} here</p>
        </div>
    )
}