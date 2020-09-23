import React from 'react'

import getSvgProps from '../utils/get-svg-props'

export function Favicon(props) {
    const svgDataByHeight = {
        128: {
            // static/favicon.svg
            path: '<defs><radialGradient id="a" cx="64" cy="-48" r="64" fx="64" fy="144" fr="64" gradientUnits="userSpaceOnUse"><stop offset=".3" stop-color="#e31587"/><stop offset=".47" stop-color="#ff3647"/><stop offset=".63" stop-color="#ff980e"/><stop offset=".95" stop-color="#fff44f"/></radialGradient></defs><path fill="url(#a)" d="M124.25 64l-4.59 23.06-13.06 19.54-19.54 13.06L64 124.25l-23.06-4.59L21.4 106.6 8.34 87.06 3.75 64l4.59-23.06L15.65 30l11.56-9.64 1.63 14.35 14.51-10.92.35 14.69L64 51.95 36.69 69.07l1.1 5.54 6.06 9.22 9.12 6.2L64 91.72l10.61-2.11 8.56-6.44 4.81-9.49.68-9.91-2.53-9.19-6.14-6.9-3.91-2.61 6.47.05 8.17 3.57-4.76-6.97L77.83 30l-1.84-15.43L82.68.23l4.38 7.5 18.55 22.81 8.11 13.86-2.62-9.89-3.29-8.12 5.06 4.39 6.79 10.16z"/>',
            width: 128,
        }
    }
    return React.createElement('svg', getSvgProps(Object.assign({}, props, { svgDataByHeight })))
}

Favicon.defaultProps = {
    className: 'octicon',
    size: 16,
    verticalAlign: 'text-bottom',
}
