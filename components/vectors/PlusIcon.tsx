import * as React from "react"

const PlusIcon: React.FC = () => {
  return (
    <svg viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_9_1061)">
        <rect
          width="84"
          height="84"
          rx="42"
          fill="url(#paint0_linear_9_1061)"
        />
        <rect
          x="1.80535"
          y="1.80535"
          width="80.3893"
          height="80.3893"
          rx="40.1946"
          stroke="url(#paint1_radial_9_1061)"
          strokeWidth="3.61071"
        />
        <path
          d="M42 24.5V59.5M24.5 42H59.5"
          stroke="white"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_9_1061"
          x="-102.61"
          y="-102.61"
          width="289.22"
          height="289.22"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="51.3049" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_9_1061"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_9_1061"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_9_1061"
          x1="-50.6027"
          y1="-16.6156"
          x2="7.39604"
          y2="141.416"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#663399" />
          <stop offset="0.374725" stopColor="#FF00A8" />
          <stop offset="0.654147" stopColor="#FF53F8" />
          <stop offset="1" stopColor="#FF00A8" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_9_1061"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(35.7924 5.4956) rotate(76.6875) scale(56.0718 57.7441)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#EBDAFC" stopOpacity="0.1" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default PlusIcon
