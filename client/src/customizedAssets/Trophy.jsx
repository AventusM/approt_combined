import * as React from "react";
import {View, Dimensions, StyleSheet} from "react-native";
import Svg, { Path, G, Rect, Defs, ClipPath } from "react-native-svg";

const originalWidth = 530;
const originalHeight = 530;
const aspectRatio = originalWidth / originalHeight;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    aspectRatio,
    marginTop: 40,
    width: windowWidth * 0.66
  }
});

// https://stackoverflow.com/questions/61657859/how-to-find-correct-values-for-width-height-and-viewbox-with-react-native-svg
export const Trophy = () => (
  <View style={styles.container}>
  <Svg
    width="100%"
    height="100%"
    viewBox={`0 0 ${originalWidth} ${originalHeight}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M313.817 424.426c-72.175 0-130.664-60.354-130.664-134.831 0-74.478 58.489-134.832 130.664-134.832 72.176 0 130.665 60.354 130.665 134.832-.085 74.477-58.574 134.831-130.665 134.831Z"
      fill="#fff"
      stroke="#2E2828"
      strokeWidth={3}
      strokeMiterlimit={10}
      strokeDasharray="1.01 2.01"
    />
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="m266.225 201.661 129.714 28.946-31.7 156.566-129.713-28.946z"
      />
      <Path
        d="m331.641 370.311-3.8-.848 1.981-9.786-53.203-11.872-1.981 9.785-3.8-.848c-2.1-.468-4.215 1.204-4.729 3.739-.513 2.535.771 4.966 2.872 5.435l60.803 13.568c2.1.469 4.215-1.203 4.729-3.739.513-2.535-.771-4.966-2.872-5.434ZM390.281 238.932l-19.335-4.314c.34-1.518.695-3.017 1.009-4.569.513-2.535-.771-4.966-2.871-5.435l-76.004-16.96c-2.101-.469-4.216 1.203-4.729 3.739-.315 1.552-.571 3.073-.848 4.604l-19.335-4.314c-2.101-.469-4.216 1.203-4.729 3.739l-2.353 11.619c-5.184 25.608 7.596 50.201 28.267 56.22 2.899 8.225 7.01 14.769 12.277 19.14-5.101 20.738-17.236 33.181-21.059 36.697l49.008 10.936c-2.134-4.815-8.415-21.278-5.018-42.516 6.507-1.742 12.8-5.964 18.637-12.242 21.214 3.327 42.417-13.682 47.602-39.289l2.352-11.62c.514-2.535-.771-4.966-2.871-5.435Zm-121.594-10.195 1.424-7.032 15.913 3.551c-2.405 17.729-2.213 33.785.379 46.974-13.561-7.103-21.459-25.009-17.716-43.493Zm69.7 30.4-6.045 4.704-.528 8.394c-.11 1.768-1.047 3.367-2.418 4.124-1.376.763-2.941.557-4.059-.527l-5.298-5.157-6.838 2.449c-1.443.502-2.954.029-3.912-1.252-.959-1.277-1.196-3.137-.611-4.8l2.77-7.893-3.7-6.879c-.794-1.477-.759-3.386.002-4.897.779-1.549 2.204-2.495 3.682-2.437l7.01.282 4.548-6.696c1.913-2.822 6.144-1.878 6.799 1.517l1.56 8.059 6.514 2.736c1.372.578 2.307 2.051 2.419 3.799.11 1.752-.624 3.484-1.895 4.474Zm44.812-4.846c-3.742 18.483-17.894 31.468-33.034 32.166 7.477-10.942 13.873-25.526 18.545-42.75l15.913 3.551-1.424 7.033Z"
        fill="#FC8618"
      />
    </G>
    <Path
      d="m22.983 243.194 1.792-.648-14.557-44.385c-2.235-6.813-1.385-14.429 2.363-21.173 3.748-6.744 10.087-12.062 17.622-14.786l104.001-37.595c7.535-2.724 15.65-2.63 22.558.261 6.908 2.892 12.044 8.344 14.279 15.157l79.864 243.502c2.235 6.813 1.384 14.43-2.364 21.173-3.748 6.744-10.087 12.063-17.622 14.787l-104.001 37.595c-7.535 2.724-15.649 2.63-22.557-.262-6.908-2.892-12.045-8.344-14.28-15.157L35.138 274.141l-1.792.647-10.362-31.594Z"
      fill="#2E2828"
    />
    <Path
      d="m31.25 169.3 13.575-4.908a8.8 8.8 0 0 0 .74 4.623 8.71 8.71 0 0 0 3.024 3.554c1.328.907 2.907 1.473 4.596 1.649a11.52 11.52 0 0 0 5.091-.643l59.581-21.538a11.95 11.95 0 0 0 4.388-2.783c1.228-1.231 2.14-2.697 2.655-4.271.515-1.574.618-3.207.299-4.754a8.566 8.566 0 0 0-2.128-4.122l12.679-4.583a24.48 24.48 0 0 1 8.599-1.475c2.89.033 5.693.601 8.247 1.67 2.555 1.069 4.811 2.619 6.641 4.561a18.017 18.017 0 0 1 4.023 6.758l79.747 243.145c1.669 5.088 1.034 10.776-1.765 15.812s-7.533 9.008-13.16 11.042L123.58 450.813c-5.627 2.035-11.686 1.964-16.845-.195-5.159-2.16-8.995-6.231-10.664-11.319L16.324 196.154c-1.669-5.088-1.034-10.775 1.765-15.811 2.8-5.037 7.533-9.009 13.16-11.043Z"
      fill="#fff"
    />
    <Rect
      width={110.036}
      height={42}
      rx={21}
      transform="matrix(.94044 -.33996 .31165 .9502 98.277 358.095)"
      fill="#FC8618"
    />
    <Rect
      width={53.337}
      height={109.611}
      rx={6}
      transform="matrix(.93413 -.35694 .32756 .94483 71.475 217.735)"
      fill="#D8D7D7"
    />
    <Rect
      width={6.022}
      height={7.104}
      rx={3.011}
      transform="matrix(.93413 -.35694 .32756 .94483 97.646 272.615)"
      fill="#fff"
    />
    <Rect
      width={6.022}
      height={7.104}
      rx={3.011}
      transform="matrix(.93413 -.35694 .32756 .94483 103.631 289.875)"
      fill="#fff"
    />
    <Rect
      width={6.022}
      height={7.104}
      rx={3.011}
      transform="matrix(.93413 -.35694 .32756 .94483 91.33 254.395)"
      fill="#fff"
    />
    <Rect
      width={31.83}
      height={7.104}
      rx={3.552}
      transform="matrix(.93413 -.35694 .32756 .94483 110.863 287.111)"
      fill="#fff"
    />
    <Rect
      width={31.83}
      height={7.104}
      rx={3.552}
      transform="matrix(.93413 -.35694 .32756 .94483 104.879 269.851)"
      fill="#fff"
    />
    <Rect
      width={31.83}
      height={7.104}
      rx={3.552}
      transform="matrix(.93413 -.35694 .32756 .94483 98.562 251.631)"
      fill="#fff"
    />
    <Rect
      width={31.83}
      height={7.104}
      rx={3.552}
      transform="matrix(.93413 -.35694 .32756 .94483 92.954 234.482)"
      fill="#fff"
    />
    <Rect
      width={6.022}
      height={7.104}
      rx={3.011}
      transform="matrix(.93413 -.35694 .32756 .94483 85.346 237.134)"
      fill="#fff"
    />
    <Path
      d="M157.145 286.879c14.293-5.461 21.121-23.615 15.251-40.547-5.871-16.932-22.216-26.231-36.509-20.769-14.293 5.461-21.12 23.615-15.25 40.547 5.87 16.932 22.215 26.231 36.508 20.769Z"
      fill="#24B273"
    />
    <Path
      d="M148.685 265.92c-.585 1.496-2.165 2.1-3.527 1.348l-7.651-4.217c-1.363-.751-1.995-2.574-1.41-4.069.583-1.495 2.163-2.099 3.527-1.347l4.557 2.512c.344.189.743.036.891-.341l5.29-13.54c.584-1.495 2.164-2.099 3.527-1.348.655.361 1.171.993 1.435 1.756a3.372 3.372 0 0 1-.024 2.313l-6.615 16.933ZM227.303 52.19c.951-.264 1.619.969.929 1.716l-6.981 7.561a1.082 1.082 0 0 0-.145 1.248l4.654 8.353c.47.842-.333 1.844-1.191 1.489l-9.109-3.777a.932.932 0 0 0-1.06.256l-7.062 7.959c-.661.745-1.826.128-1.658-.879l1.616-9.71c.082-.491-.179-.972-.619-1.143l-8.696-3.365c-.902-.349-.821-1.732.116-1.97l9.997-2.537c.386-.098.678-.435.738-.851l1.488-10.298c.141-.97 1.356-1.21 1.805-.355l4.458 8.474a.943.943 0 0 0 1.086.49l9.634-2.662Z"
      fill="#fff"
    />
    <Rect
      width={5.996}
      height={2.026}
      rx={1.013}
      transform="matrix(.94932 .237 -.24602 .99044 227.903 63.02)"
      fill="#fff"
    />
    <Rect
      width={5.978}
      height={2.031}
      rx={1.016}
      transform="matrix(.38915 .93966 -.88708 .42427 216.546 73.226)"
      fill="#fff"
    />
    <Rect
      width={6.074}
      height={2}
      rx={1}
      transform="matrix(-.22973 .99477 -.95314 -.21935 222.592 42.987)"
      fill="#fff"
    />
    <Rect
      width={5.957}
      height={2.038}
      rx={1.019}
      transform="matrix(.77084 .62884 -.60198 .80464 198.943 46.955)"
      fill="#fff"
    />
    <Rect
      width={6.109}
      height={1.988}
      rx={0.994}
      transform="matrix(.81453 -.56193 .5271 .86254 197.45 70.951)"
      fill="#fff"
    />
    <Path
      d="M362.492 54.665c.953-.197 1.631.958.977 1.666l-13.396 14.501a.988.988 0 0 0-.108 1.182l10.467 17.411a.974.974 0 0 1-1.257 1.393l-18.367-8.663a.985.985 0 0 0-1.163.227l-13.064 14.802c-.637.723-1.854.165-1.754-.805l2.045-19.854a1.034 1.034 0 0 0-.611-1.042l-18.54-8.263c-.905-.403-.785-1.714.173-1.89l19.63-3.608a.958.958 0 0 0 .786-.87l1.605-19.91c.078-.972 1.369-1.224 1.861-.364l10.087 17.625c.222.388.668.592 1.097.503l19.532-4.04Z"
      fill="#fff"
    />
    <Rect
      width={10.724}
      height={3.383}
      rx={1.691}
      transform="matrix(.93467 .29458 -.18828 1.00439 362.123 73.96)"
      fill="#fff"
    />
    <Rect
      width={10.847}
      height={3.339}
      rx={1.67}
      transform="matrix(.43014 .9198 -.90595 .37792 343.597 90.147)"
      fill="#fff"
    />
    <Rect
      width={10.166}
      height={3.569}
      rx={1.785}
      transform="matrix(-.1707 1.00787 -.93913 -.2784 350.656 38.755)"
      fill="#fff"
    />
    <Rect
      width={10.989}
      height={3.287}
      rx={1.643}
      transform="matrix(.76256 .63987 -.59048 .814 310.128 42.654)"
      fill="#fff"
    />
    <Rect
      width={9.909}
      height={3.649}
      rx={1.824}
      transform="matrix(.83093 -.53486 .5507 .84616 310.252 83.847)"
      fill="#fff"
    />
    <Path
      d="M479.749 173.751c.953-.23 1.627.963.955 1.691l-6.5 7.038a1.033 1.033 0 0 0-.126 1.215l4.705 8.114c.491.846-.346 1.831-1.224 1.441l-8.705-3.865a.96.96 0 0 0-1.112.242l-6.462 7.303c-.649.733-1.841.148-1.708-.84l1.255-9.334a1.034 1.034 0 0 0-.616-1.091l-8.539-3.563c-.904-.377-.804-1.723.143-1.93l9.423-2.059a.987.987 0 0 0 .762-.863l1.082-9.632a.974.974 0 0 1 1.834-.361l4.522 8.222c.218.397.664.6 1.092.497l9.219-2.225Z"
      fill="#fff"
    />
    <Rect
      width={5.901}
      height={1.925}
      rx={0.963}
      transform="matrix(.94215 .26686 -.21728 .99787 480.677 184.238)"
      fill="#fff"
    />
    <Rect
      width={5.928}
      height={1.916}
      rx={0.958}
      transform="matrix(.41058 .92958 -.8967 .40143 470.003 193.699)"
      fill="#fff"
    />
    <Rect
      width={5.779}
      height={1.966}
      rx={0.983}
      transform="matrix(-.20031 1.0018 -.94633 -.24993 474.888 164.692)"
      fill="#fff"
    />
    <Rect
      width={5.96}
      height={1.905}
      rx={0.952}
      transform="matrix(.76652 .63464 -.59636 .80925 452.107 167.689)"
      fill="#fff"
    />
    <Rect
      width={5.724}
      height={1.984}
      rx={0.992}
      transform="matrix(.8227 -.54867 .5395 .85406 451.432 190.825)"
      fill="#fff"
    />
    <Path
      d="M506.16 67.365c.952-.251 1.622.967.939 1.707l-8.281 8.968a1.064 1.064 0 0 0-.138 1.236l5.667 10.023c.477.844-.337 1.84-1.203 1.472l-10.828-4.604a.94.94 0 0 0-1.078.25l-8.286 9.348c-.657.741-1.831.136-1.676-.865l1.808-11.66c.074-.482-.184-.952-.618-1.125l-10.524-4.186c-.902-.36-.815-1.73.125-1.957l11.854-2.86c.393-.094.69-.434.746-.855l1.616-12.146c.129-.971 1.358-1.213 1.816-.358l5.434 10.164a.96.96 0 0 0 1.089.492l11.538-3.044Z"
      fill="#fff"
    />
    <Rect
      width={6.867}
      height={2.291}
      rx={1.145}
      transform="matrix(.94683 .24784 -.23587 .99317 506.485 79.83)"
      fill="#fff"
    />
    <Rect
      width={6.866}
      height={2.291}
      rx={1.146}
      transform="matrix(.39697 .93605 -.89053 .41625 493.689 91.274)"
      fill="#fff"
    />
    <Rect
      width={6.872}
      height={2.289}
      rx={1.145}
      transform="matrix(-.21933 .99737 -.95078 -.23044 500.164 56.957)"
      fill="#fff"
    />
    <Rect
      width={6.864}
      height={2.292}
      rx={1.146}
      transform="matrix(.76926 .63097 -.60002 .80626 473.287 61.12)"
      fill="#fff"
    />
    <Rect
      width={6.875}
      height={2.288}
      rx={1.144}
      transform="matrix(.81741 -.5573 .53165 .85946 471.911 88.4)"
      fill="#fff"
    />
    <Path
      d="M109.946 67.823c.95-.28 1.613.973.915 1.73L98.968 82.436a1.107 1.107 0 0 0-.155 1.265l7.5 13.757c.458.84-.327 1.85-1.175 1.512l-14.946-5.965a.92.92 0 0 0-1.033.261L77.22 106.704c-.668.751-1.818.117-1.632-.9l2.985-16.34c.092-.505-.17-1.002-.619-1.169l-14.474-5.37c-.9-.335-.828-1.737.103-1.99l16.654-4.526c.374-.102.66-.434.726-.844l2.75-17.082c.155-.97 1.35-1.204 1.789-.351l7.17 13.965c.21.412.656.612 1.081.487l16.192-4.76Z"
      fill="#fff"
    />
    <Rect
      width={8.78}
      height={3.019}
      rx={1.51}
      transform="matrix(.95275 .22122 -.26027 .9864 109.003 84.268)"
      fill="#fff"
    />
    <Rect
      width={8.718}
      height={3.039}
      rx={1.52}
      transform="matrix(.37766 .94479 -.88214 .43544 91.986 99.664)"
      fill="#fff"
    />
    <Rect
      width={9.05}
      height={2.93}
      rx={1.465}
      transform="matrix(-.24433 .9909 -.95635 -.20323 101.667 54.813)"
      fill="#fff"
    />
    <Rect
      width={8.644}
      height={3.063}
      rx={1.531}
      transform="matrix(.77315 .6257 -.60471 .80239 66.665 61.332)"
      fill="#fff"
    />
    <Rect
      width={9.167}
      height={2.889}
      rx={1.444}
      transform="matrix(.81046 -.56835 .5204 .867 63.86 96.831)"
      fill="#fff"
    />
    <Path
      d="M521.714 161.653c-9.128-1.972-17.68-6.202-24.955-12.344-7.274-6.141-13.065-14.019-16.896-22.988-1.07-2.54-2.532-5.374-1.19-8.108a5.046 5.046 0 0 1 2.283-2.412 4.657 4.657 0 0 1 3.206-.388 6.472 6.472 0 0 1 3.196 2.719 7.05 7.05 0 0 1 .973 4.213 6.965 6.965 0 0 1-1.649 3.976 6.336 6.336 0 0 1-3.594 2.105c-6.773 1.937-12.623-3.464-17.351-7.783-10.772-9.841-22.833-19.084-37.076-22.126-13.178-2.814-28.169.59-37.193 11.68-1.579 1.941 1.369 4.384 2.94 2.453 8.949-10.998 24.353-13.15 36.991-9.381 7.509 2.414 14.57 6.169 20.875 11.102 3.282 2.465 6.43 5.126 9.493 7.886a67.09 67.09 0 0 0 9.323 7.644c5.573 3.441 13.431 4.396 18.355-.907a11.086 11.086 0 0 0 2.243-4.429 11.47 11.47 0 0 0 .123-5.018 11.12 11.12 0 0 0-2.024-4.537 10.361 10.361 0 0 0-3.739-3.089 8.352 8.352 0 0 0-4.285-.393 8.58 8.58 0 0 0-3.953 1.802 9.25 9.25 0 0 0-2.676 3.564 9.776 9.776 0 0 0-.759 4.475 28.025 28.025 0 0 0 3.534 9.783c4.312 8.797 10.439 16.456 17.929 22.414 7.491 5.957 16.154 10.061 25.351 12.01 2.371.477 2.89-3.447.525-3.923ZM139.432 69.194c9.294-.72 18.618.88 27.209 4.673 8.59 3.792 16.202 9.668 22.212 17.146 1.688 2.122 3.828 4.412 3.245 7.409a5.202 5.202 0 0 1-1.572 2.957 4.773 4.773 0 0 1-2.984 1.285 6.252 6.252 0 0 1-3.779-1.685 6.806 6.806 0 0 1-2.028-3.749 7.024 7.024 0 0 1 .557-4.27 6.571 6.571 0 0 1 2.913-3.039c6.015-3.784 13.042-.293 18.71 2.485 12.915 6.33 26.914 11.719 41.406 10.56 13.409-1.072 26.951-8.605 32.761-21.78 1.017-2.304-2.452-3.798-3.464-1.504-5.762 13.066-20.026 19.52-33.163 19.526a65.94 65.94 0 0 1-22.961-4.651c-3.797-1.42-7.514-3.063-11.177-4.827a64.862 64.862 0 0 0-10.95-4.643c-6.253-1.698-14.062-.367-17.426 6.107a11.258 11.258 0 0 0-1.012 4.873c.03 1.684.435 3.339 1.182 4.83a10.661 10.661 0 0 0 3.123 3.758 10.013 10.013 0 0 0 4.398 1.885 8.433 8.433 0 0 0 4.224-.848 8.9 8.9 0 0 0 3.337-2.85 9.481 9.481 0 0 0 1.652-4.17 9.674 9.674 0 0 0-.429-4.493 26.897 26.897 0 0 0-5.934-8.341c-6.428-7.176-14.307-12.747-23.058-16.302a60.012 60.012 0 0 0-27.503-4.24c-2.405.22-1.888 4.119.511 3.898Z"
      fill="#fff"
    />
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="matrix(.976 .2178 -.19844 .98011 266.225 201.661)"
          d="M0 0h132.904v159.743H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
  </View>
);