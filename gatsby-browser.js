import { wrapRootElement as wrap } from "./root-wrapper"
import "./src/assets/css/styles.css"

// export const onClientEntry = () => {
//     // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//     if (!(`IntersectionObserver` in window)) {
//         import(`intersection-observer`)
//         console.log(`# IntersectionObserver is polyfilled!`)
//     }
// }

export const wrapRootElement = wrap
