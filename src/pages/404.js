import React from "react"

import DefaultLayout from "../shared/layouts/DefaultLayout"
import SEO from "../shared/components/ConfigElements/SEO"

const NotFoundPage = () => (
    <DefaultLayout>
        <SEO title="404: Not found" />
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </DefaultLayout>
)

export default NotFoundPage
