"use client";
import "./svg.scss";

function Sezione2Animazione({ isInView }: { isInView: boolean }) {
  return (
    <div
      style={{
        opacity: isInView ? 1 : 0,
        width: "100%",
        transition: "all .5s cubic-bezier(0,.07,.82,-0.03)",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 501 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="animazione2">
          <g
            id="pc"
            style={{
              opacity: isInView ? 1 : 0,
              transform: `translateX(${isInView ? 0 : 100}px)`,
              transition: "all .5s cubic-bezier(0,.07,.82,-0.03)",
            }}
          >
            <rect
              id="Rectangle 12"
              width="271"
              height="154"
              x="1"
              y="1"
              rx="4"
              fill="white"
              stroke="#4794D4"
              stroke-width="2"
            />
            <rect
              id="Rectangle 13"
              x="14.5"
              y="8.5"
              width="244"
              height="139"
              rx="4.5"
              fill="white"
              stroke="#4794D4"
            />
            <circle
              id="icona3"
              cx="121.5"
              cy="132.5"
              r="5"
              stroke="#4794D4"
              style={{
                opacity: isInView ? 1 : 0,
                transform: `translateX(${isInView ? 0 : 100}px)`,
                transition: "all .5s cubic-bezier(0,.07,.82,-0.03) .3s",
              }}
            />
            <circle
              id="icona2"
              cx="136.5"
              cy="132.5"
              r="5"
              stroke="#4794D4"
              style={{
                opacity: isInView ? 1 : 0,
                transform: `translateX(${isInView ? 0 : 100}px)`,
                transition: "all .5s cubic-bezier(0,.07,.82,-0.03) .4s",
              }}
            />
            <circle
              id="icona1"
              cx="151.5"
              cy="132.5"
              r="5"
              stroke="#4794D4"
              style={{
                opacity: isInView ? 1 : 0,
                transform: `translateX(${isInView ? 0 : 100}px)`,
                transition: "all .5s cubic-bezier(0,.07,.82,-0.03) .5s",
              }}
            />
            <path
              id="Vector 6"
              d="M14.5 92.5C17 82.6666 29 30 108 67.5C170.238 97.0434 237.333 60.6666 259 55"
              stroke="#4794D4"
            />
            <rect
              id="Rectangle 14"
              x="9"
              y="172"
              width="255"
              height="27"
              rx="4"
              fill="white"
              stroke="#4794D4"
              stroke-width="2"
            />
            <rect
              id="Rectangle 15"
              x="37.5"
              y="189.5"
              width="201"
              height="7"
              rx="3.5"
              fill="white"
              stroke="#4794D4"
            />
            <path
              id="Rectangle 16"
              d="M22.5 174.5H34.4633C35.5679 174.5 36.4633 175.395 36.4633 176.5C36.4633 177.605 35.5679 178.5 34.4633 178.5H22.5C21.3954 178.5 20.5 177.605 20.5 176.5C20.5 175.395 21.3954 174.5 22.5 174.5ZM43.4546 174.5H55.4179C56.5225 174.5 57.4179 175.395 57.4179 176.5C57.4179 177.605 56.5225 178.5 55.4179 178.5H43.4546C42.3501 178.5 41.4546 177.605 41.4546 176.5C41.4546 175.395 42.3501 174.5 43.4546 174.5ZM66.8985 174.5H75.8791C76.9023 174.5 77.805 174.761 78.436 175.156C79.0738 175.555 79.3704 176.044 79.3704 176.5C79.3704 176.956 79.0738 177.445 78.436 177.844C77.805 178.239 76.9023 178.5 75.8791 178.5H66.8985C65.8752 178.5 64.9725 178.239 64.3416 177.844C63.7037 177.445 63.4071 176.956 63.4071 176.5C63.4071 176.044 63.7037 175.555 64.3416 175.156C64.9725 174.761 65.8752 174.5 66.8985 174.5ZM87.8531 174.5H96.8337C97.857 174.5 98.7597 174.761 99.3906 175.156C100.028 175.555 100.325 176.044 100.325 176.5C100.325 176.956 100.028 177.445 99.3906 177.844C98.7597 178.239 97.857 178.5 96.8337 178.5H87.8531C86.8299 178.5 85.9272 178.239 85.2962 177.844C84.6584 177.445 84.3618 176.956 84.3618 176.5C84.3618 176.044 84.6584 175.555 85.2962 175.156C85.9272 174.761 86.8299 174.5 87.8531 174.5ZM110.305 174.5H119.285C120.308 174.5 121.211 174.761 121.842 175.156C122.48 175.555 122.776 176.044 122.776 176.5C122.776 176.956 122.48 177.445 121.842 177.844C121.211 178.239 120.308 178.5 119.285 178.5H110.305C109.281 178.5 108.379 178.239 107.748 177.844C107.11 177.445 106.813 176.956 106.813 176.5C106.813 176.044 107.11 175.555 107.748 175.156C108.379 174.761 109.281 174.5 110.305 174.5ZM131.259 174.5H140.24C141.263 174.5 142.166 174.761 142.797 175.156C143.435 175.555 143.731 176.044 143.731 176.5C143.731 176.956 143.435 177.445 142.797 177.844C142.166 178.239 141.263 178.5 140.24 178.5H131.259C130.236 178.5 129.333 178.239 128.702 177.844C128.064 177.445 127.768 176.956 127.768 176.5C127.768 176.044 128.064 175.555 128.702 175.156C129.333 174.761 130.236 174.5 131.259 174.5ZM153.212 174.5H162.192C163.215 174.5 164.118 174.761 164.749 175.156C165.387 175.555 165.684 176.044 165.684 176.5C165.684 176.956 165.387 177.445 164.749 177.844C164.118 178.239 163.215 178.5 162.192 178.5H153.212C152.188 178.5 151.286 178.239 150.655 177.844C150.017 177.445 149.72 176.956 149.72 176.5C149.72 176.044 150.017 175.555 150.655 175.156C151.286 174.761 152.188 174.5 153.212 174.5ZM174.166 174.5H183.147C184.17 174.5 185.073 174.761 185.704 175.156C186.342 175.555 186.638 176.044 186.638 176.5C186.638 176.956 186.342 177.445 185.704 177.844C185.073 178.239 184.17 178.5 183.147 178.5H174.166C173.143 178.5 172.24 178.239 171.609 177.844C170.972 177.445 170.675 176.956 170.675 176.5C170.675 176.044 170.972 175.555 171.609 175.156C172.24 174.761 173.143 174.5 174.166 174.5ZM194.622 174.5H203.603C204.626 174.5 205.529 174.761 206.16 175.156C206.797 175.555 207.094 176.044 207.094 176.5C207.094 176.956 206.797 177.445 206.16 177.844C205.529 178.239 204.626 178.5 203.603 178.5H194.622C193.599 178.5 192.696 178.239 192.065 177.844C191.427 177.445 191.131 176.956 191.131 176.5C191.131 176.044 191.427 175.555 192.065 175.156C192.696 174.761 193.599 174.5 194.622 174.5ZM217.073 174.5H226.054C227.077 174.5 227.98 174.761 228.611 175.156C229.249 175.555 229.545 176.044 229.545 176.5C229.545 176.956 229.249 177.445 228.611 177.844C227.98 178.239 227.077 178.5 226.054 178.5H217.073C216.05 178.5 215.147 178.239 214.517 177.844C213.879 177.445 213.582 176.956 213.582 176.5C213.582 176.044 213.879 175.555 214.517 175.156C215.147 174.761 216.05 174.5 217.073 174.5ZM238.028 174.5H247.009C248.032 174.5 248.935 174.761 249.566 175.156C250.203 175.555 250.5 176.044 250.5 176.5C250.5 176.956 250.203 177.445 249.566 177.844C248.935 178.239 248.032 178.5 247.009 178.5H238.028C237.005 178.5 236.102 178.239 235.471 177.844C234.833 177.445 234.537 176.956 234.537 176.5C234.537 176.044 234.833 175.555 235.471 175.156C236.102 174.761 237.005 174.5 238.028 174.5Z"
              fill="white"
              stroke="#4794D4"
            />
            <path
              id="Rectangle 17"
              d="M22.5 181.5H34.4633C35.5679 181.5 36.4633 182.395 36.4633 183.5C36.4633 184.605 35.5679 185.5 34.4633 185.5H22.5C21.3954 185.5 20.5 184.605 20.5 183.5C20.5 182.395 21.3954 181.5 22.5 181.5ZM43.4546 181.5H55.4179C56.5225 181.5 57.4179 182.395 57.4179 183.5C57.4179 184.605 56.5225 185.5 55.4179 185.5H43.4546C42.3501 185.5 41.4546 184.605 41.4546 183.5C41.4546 182.395 42.3501 181.5 43.4546 181.5ZM66.8985 181.5H75.8791C76.9023 181.5 77.805 181.761 78.436 182.156C79.0738 182.555 79.3704 183.044 79.3704 183.5C79.3704 183.956 79.0738 184.445 78.436 184.844C77.805 185.239 76.9023 185.5 75.8791 185.5H66.8985C65.8752 185.5 64.9725 185.239 64.3416 184.844C63.7037 184.445 63.4071 183.956 63.4071 183.5C63.4071 183.044 63.7037 182.555 64.3416 182.156C64.9725 181.761 65.8752 181.5 66.8985 181.5ZM87.8531 181.5H96.8337C97.857 181.5 98.7597 181.761 99.3906 182.156C100.028 182.555 100.325 183.044 100.325 183.5C100.325 183.956 100.028 184.445 99.3906 184.844C98.7597 185.239 97.857 185.5 96.8337 185.5H87.8531C86.8299 185.5 85.9272 185.239 85.2962 184.844C84.6584 184.445 84.3618 183.956 84.3618 183.5C84.3618 183.044 84.6584 182.555 85.2962 182.156C85.9272 181.761 86.8299 181.5 87.8531 181.5ZM110.305 181.5H119.285C120.308 181.5 121.211 181.761 121.842 182.156C122.48 182.555 122.776 183.044 122.776 183.5C122.776 183.956 122.48 184.445 121.842 184.844C121.211 185.239 120.308 185.5 119.285 185.5H110.305C109.281 185.5 108.379 185.239 107.748 184.844C107.11 184.445 106.813 183.956 106.813 183.5C106.813 183.044 107.11 182.555 107.748 182.156C108.379 181.761 109.281 181.5 110.305 181.5ZM131.259 181.5H140.24C141.263 181.5 142.166 181.761 142.797 182.156C143.435 182.555 143.731 183.044 143.731 183.5C143.731 183.956 143.435 184.445 142.797 184.844C142.166 185.239 141.263 185.5 140.24 185.5H131.259C130.236 185.5 129.333 185.239 128.702 184.844C128.064 184.445 127.768 183.956 127.768 183.5C127.768 183.044 128.064 182.555 128.702 182.156C129.333 181.761 130.236 181.5 131.259 181.5ZM153.212 181.5H162.192C163.215 181.5 164.118 181.761 164.749 182.156C165.387 182.555 165.684 183.044 165.684 183.5C165.684 183.956 165.387 184.445 164.749 184.844C164.118 185.239 163.215 185.5 162.192 185.5H153.212C152.188 185.5 151.286 185.239 150.655 184.844C150.017 184.445 149.72 183.956 149.72 183.5C149.72 183.044 150.017 182.555 150.655 182.156C151.286 181.761 152.188 181.5 153.212 181.5ZM174.166 181.5H183.147C184.17 181.5 185.073 181.761 185.704 182.156C186.342 182.555 186.638 183.044 186.638 183.5C186.638 183.956 186.342 184.445 185.704 184.844C185.073 185.239 184.17 185.5 183.147 185.5H174.166C173.143 185.5 172.24 185.239 171.609 184.844C170.972 184.445 170.675 183.956 170.675 183.5C170.675 183.044 170.972 182.555 171.609 182.156C172.24 181.761 173.143 181.5 174.166 181.5ZM194.622 181.5H203.603C204.626 181.5 205.529 181.761 206.16 182.156C206.797 182.555 207.094 183.044 207.094 183.5C207.094 183.956 206.797 184.445 206.16 184.844C205.529 185.239 204.626 185.5 203.603 185.5H194.622C193.599 185.5 192.696 185.239 192.065 184.844C191.427 184.445 191.131 183.956 191.131 183.5C191.131 183.044 191.427 182.555 192.065 182.156C192.696 181.761 193.599 181.5 194.622 181.5ZM217.073 181.5H226.054C227.077 181.5 227.98 181.761 228.611 182.156C229.249 182.555 229.545 183.044 229.545 183.5C229.545 183.956 229.249 184.445 228.611 184.844C227.98 185.239 227.077 185.5 226.054 185.5H217.073C216.05 185.5 215.147 185.239 214.517 184.844C213.879 184.445 213.582 183.956 213.582 183.5C213.582 183.044 213.879 182.555 214.517 182.156C215.147 181.761 216.05 181.5 217.073 181.5ZM238.028 181.5H247.009C248.032 181.5 248.935 181.761 249.566 182.156C250.203 182.555 250.5 183.044 250.5 183.5C250.5 183.956 250.203 184.445 249.566 184.844C248.935 185.239 248.032 185.5 247.009 185.5H238.028C237.005 185.5 236.102 185.239 235.471 184.844C234.833 184.445 234.537 183.956 234.537 183.5C234.537 183.044 234.833 182.555 235.471 182.156C236.102 181.761 237.005 181.5 238.028 181.5Z"
              fill="white"
              stroke="#4794D4"
            />
          </g>
          <g
            id="smartphone"
            style={{
              opacity: isInView ? 1 : 0,
              transform: `translateX(${isInView ? 0 : 100}px)`,
              transition: "all .5s cubic-bezier(0,.07,.82,-0.03) .5s",
            }}
          >
            <rect
              id="Rectangle 12_2"
              x="385"
              y="2"
              width="153"
              height="87"
              rx="4"
              transform="rotate(90 385 2)"
              fill="white"
              stroke="#4794D4"
              stroke-width="2"
            />
            <rect
              id="Rectangle 13_2"
              x="380.5"
              y="9.5"
              width="138"
              height="78"
              rx="4.5"
              transform="rotate(90 380.5 9.5)"
              fill="white"
              stroke="#4794D4"
            />
            <circle
              id="Ellipse 7"
              cx="341.5"
              cy="136.5"
              r="8"
              stroke="#4794D4"
            />
            <g
              id="icone4"
              style={{
                opacity: isInView ? 1 : 0,
                transform: `translateX(${isInView ? 0 : 100}px)`,
                transition: "all .5s cubic-bezier(0,.07,.82,-0.03) .55s",
              }}
            >
              <rect
                id="Rectangle 23"
                x="327.5"
                y="105.5"
                width="19"
                height="19"
                rx="3.5"
                transform="rotate(90 327.5 105.5)"
                fill="white"
                stroke="#4794D4"
              />
              <rect
                id="Rectangle 24"
                x="351.5"
                y="105.5"
                width="19"
                height="19"
                rx="3.5"
                transform="rotate(90 351.5 105.5)"
                fill="white"
                stroke="#4794D4"
              />
              <rect
                id="Rectangle 25"
                x="375.5"
                y="105.5"
                width="19"
                height="19"
                rx="3.5"
                transform="rotate(90 375.5 105.5)"
                fill="white"
                stroke="#4794D4"
              />
            </g>
            <g
              id="icone3"
              style={{
                opacity: isInView ? 1 : 0,
                transform: `translateX(${isInView ? 0 : 100}px)`,
                transition: "all .5s cubic-bezier(0,.07,.82,-0.03) .6s",
              }}
            >
              <rect
                id="Rectangle 14_2"
                x="327.5"
                y="78.5"
                width="19"
                height="19"
                rx="3.5"
                transform="rotate(90 327.5 78.5)"
                fill="white"
                stroke="#4794D4"
              />
              <rect
                id="Rectangle 15_2"
                x="351.5"
                y="78.5"
                width="19"
                height="19"
                rx="3.5"
                transform="rotate(90 351.5 78.5)"
                fill="white"
                stroke="#4794D4"
              />
              <rect
                id="Rectangle 16_2"
                x="375.5"
                y="78.5"
                width="19"
                height="19"
                rx="3.5"
                transform="rotate(90 375.5 78.5)"
                fill="white"
                stroke="#4794D4"
              />
            </g>
            <g
              id="icone2"
              style={{
                opacity: isInView ? 1 : 0,
                transform: `translateX(${isInView ? 0 : 100}px)`,
                transition: "all .5s cubic-bezier(0,.07,.82,-0.03) .65s",
              }}
            >
              <rect
                id="Rectangle 17_2"
                x="327.5"
                y="51.5"
                width="19"
                height="19"
                rx="3.5"
                transform="rotate(90 327.5 51.5)"
                fill="white"
                stroke="#4794D4"
              />
              <rect
                id="Rectangle 18"
                x="351.5"
                y="51.5"
                width="19"
                height="19"
                rx="3.5"
                transform="rotate(90 351.5 51.5)"
                fill="white"
                stroke="#4794D4"
              />
              <rect
                id="Rectangle 19"
                x="375.5"
                y="51.5"
                width="19"
                height="19"
                rx="3.5"
                transform="rotate(90 375.5 51.5)"
                fill="white"
                stroke="#4794D4"
              />
            </g>
            <g
              id="icone1"
              style={{
                opacity: isInView ? 1 : 0,
                transform: `translateX(${isInView ? 0 : 100}px)`,
                transition: "all .5s cubic-bezier(0,.07,.82,-0.03) .7s",
              }}
            >
              <rect
                id="Rectangle 20"
                x="327.5"
                y="24.5"
                width="19"
                height="19"
                rx="3.5"
                transform="rotate(90 327.5 24.5)"
                fill="white"
                stroke="#4794D4"
              />
              <rect
                id="Rectangle 21"
                x="351.5"
                y="24.5"
                width="19"
                height="19"
                rx="3.5"
                transform="rotate(90 351.5 24.5)"
                fill="white"
                stroke="#4794D4"
              />
              <rect
                id="Rectangle 22"
                x="375.5"
                y="24.5"
                width="19"
                height="19"
                rx="3.5"
                transform="rotate(90 375.5 24.5)"
                fill="white"
                stroke="#4794D4"
              />
            </g>
          </g>
          <g
            id="watch"
            style={{
              opacity: isInView ? 1 : 0,
              transform: `translateX(${isInView ? 0 : 100}px)`,
              transition: "all .5s cubic-bezier(0,.07,.82,-0.03) 1s",
            }}
          >
            <rect
              id="Rectangle 12_3"
              x="500"
              y="44"
              width="69"
              height="72"
              rx="4"
              transform="rotate(90 500 44)"
              fill="white"
              stroke="#4794D4"
              stroke-width="2"
            />
            <rect
              id="Rectangle 13_3"
              x="493.5"
              y="50.5"
              width="56"
              height="59"
              rx="4.5"
              transform="rotate(90 493.5 50.5)"
              fill="white"
              stroke="#4794D4"
            />
            <g id="face">
              <rect
                id="Rectangle 14_3"
                x="-0.5"
                y="-0.5"
                width="10"
                height="11"
                rx="4.5"
                transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 455 72)"
                fill="#4794D4"
                stroke="#4794D4"
              />
              <rect
                id="Rectangle 15_3"
                x="-0.5"
                y="-0.5"
                width="10"
                height="11"
                rx="4.5"
                transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 484 72)"
                fill="#4794D4"
                stroke="#4794D4"
              />
              <path
                id="Vector 7"
                d="M450.174 81C449.341 85.8333 451.074 95.5 464.674 95.5C478.274 95.5 480.341 85.8333 479.674 81"
                stroke="#4794D4"
              />
            </g>
            <g id="Group 10">
              <g id="Union">
                <path
                  d="M444.036 35.381C444.53 34.9502 444.909 34.2006 445.211 33.2885C445.516 32.3648 445.762 31.212 445.959 29.9008C446.355 27.2769 446.569 23.951 446.661 20.4039C446.825 14.1012 446.605 7.04484 446.32 1.86599C446.284 1.21232 446.247 0.588557 446.209 0L445.41 0.0789641C445.744 5.30723 446.043 13.3221 445.86 20.3716C445.769 23.8984 445.557 27.166 445.172 29.7165C444.979 30.9925 444.746 32.0721 444.47 32.9087C444.189 33.7569 443.884 34.2954 443.577 34.5633C440.251 37.4631 439.141 41.9742 439 43.9096L439.798 44C439.924 42.2758 440.951 38.0704 444.036 35.381Z"
                  fill="#4794D4"
                />
                <path
                  d="M493.319 35.381C493.813 34.9502 494.192 34.2006 494.494 33.2885C494.799 32.3648 495.045 31.212 495.242 29.9008C495.638 27.2769 495.852 23.951 495.944 20.4039C496.128 13.3057 495.827 5.25153 495.492 0L494.693 0.0789641C495.026 5.30723 495.326 13.3221 495.143 20.3716C495.051 23.8984 494.84 27.166 494.455 29.7165C494.262 30.9925 494.029 32.0721 493.753 32.9087C493.472 33.7569 493.167 34.2954 492.86 34.5633C489.534 37.4631 488.424 41.9742 488.283 43.9096L489.081 44C489.207 42.2758 490.234 38.0704 493.319 35.381Z"
                  fill="#4794D4"
                />
              </g>
              <rect
                id="Rectangle 26"
                x="446"
                width="49"
                height="1"
                fill="#4794D4"
              />
            </g>
            <g id="Group 11">
              <g id="Union_2">
                <path
                  d="M444.036 122.619C444.53 123.05 444.909 123.799 445.211 124.711C445.516 125.635 445.762 126.788 445.959 128.099C446.355 130.723 446.569 134.049 446.661 137.596C446.825 143.899 446.605 150.955 446.32 156.134C446.284 156.788 446.247 157.411 446.209 158L445.41 157.921C445.744 152.693 446.043 144.678 445.86 137.628C445.769 134.102 445.557 130.834 445.172 128.283C444.979 127.008 444.746 125.928 444.47 125.091C444.189 124.243 443.884 123.705 443.577 123.437C440.251 120.537 439.141 116.026 439 114.09L439.798 114C439.924 115.724 440.951 119.93 444.036 122.619Z"
                  fill="#4794D4"
                />
                <path
                  d="M493.319 122.619C493.813 123.05 494.192 123.799 494.494 124.711C494.799 125.635 495.045 126.788 495.242 128.099C495.638 130.723 495.852 134.049 495.944 137.596C496.128 144.694 495.827 152.748 495.492 158L494.693 157.921C495.026 152.693 495.326 144.678 495.143 137.628C495.051 134.102 494.84 130.834 494.455 128.283C494.262 127.008 494.029 125.928 493.753 125.091C493.472 124.243 493.167 123.705 492.86 123.437C489.534 120.537 488.424 116.026 488.283 114.09L489.081 114C489.207 115.724 490.234 119.93 493.319 122.619Z"
                  fill="#4794D4"
                />
              </g>
              <rect
                id="Rectangle 26_2"
                width="49"
                height="1"
                transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 446 158)"
                fill="#4794D4"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
export default Sezione2Animazione;
