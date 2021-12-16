import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.428 3c.42 0 .76.334.76.747 0 .412-.34.746-.76.746l-1.63.001c-1.351.002-2.451 1.082-2.451 2.409v1.859a.756.756 0 0 1-.762.747.755.755 0 0 1-.761-.747v-1.86c0-2.149 1.783-3.9 3.974-3.901L8.427 3ZM15.6 3h1.593c2.197 0 3.983 1.752 3.983 3.906v1.856c0 .412-.34.748-.761.748a.755.755 0 0 1-.761-.748V6.906c0-1.33-1.104-2.413-2.461-2.413H15.6a.753.753 0 0 1-.761-.745c0-.413.34-.748.76-.748Zm-.839 3.743H9.238c-1.263.012-2.28 1.025-2.268 2.266v1.245a.278.278 0 0 0 .27.269h9.52a.28.28 0 0 0 .272-.269V9.01a2.266 2.266 0 0 0-.66-1.603 2.272 2.272 0 0 0-1.61-.663Zm-13 5.298h20.477c.42 0 .761.335.761.748a.753.753 0 0 1-.761.745h-1.062v3.56c0 2.155-1.787 3.906-3.983 3.906h-1.593a.755.755 0 0 1-.762-.747c0-.412.341-.747.762-.747h1.593c1.357 0 2.461-1.081 2.461-2.413v-3.56h-2.623v.992c.01 1.24-1.005 2.254-2.27 2.266H9.238c-1.264-.012-2.279-1.025-2.269-2.266v-.991H4.346v3.563c0 1.327 1.101 2.407 2.454 2.409h1.628c.42 0 .761.335.761.747a.755.755 0 0 1-.762.747l-1.629-.001c-2.191-.002-3.975-1.752-3.975-3.902v-3.563H1.762A.754.754 0 0 1 1 12.789c0-.413.342-.748.762-.748Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
