import React from "react";
import ContentLoader from "react-content-loader";

export const Loader = (props) => {
  const [element] = document.getElementsByClassName("list-container");
  return (
    <ContentLoader
      width={element.clientWidth}
      height={element.clientHeight}
      viewBox={`0 0 ${element.clientWidth} ${element.clientHeight}`}
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...props}
    >
      <rect
        x="60"
        y="69"
        rx="3"
        ry="3"
        width={element.clientWidth - 100}
        height="7"
      />
      <rect
        x="60"
        y="47"
        rx="3"
        ry="3"
        width={element.clientWidth}
        height="6"
      />
      <circle cx="30" cy="63" r="18" />
      <rect
        x="60"
        y="95"
        rx="3"
        ry="3"
        width={element.clientWidth}
        height="6"
      />
      <rect
        x="60"
        y="169"
        rx="3"
        ry="3"
        width={element.clientWidth - 100}
        height="7"
      />
      <rect
        x="60"
        y="147"
        rx="3"
        ry="3"
        width={element.clientWidth}
        height="6"
      />
      <circle cx="30" cy="163" r="18" />
      <rect
        x="60"
        y="195"
        rx="3"
        ry="3"
        width={element.clientWidth}
        height="6"
      />
      <rect
        x="60"
        y="265"
        rx="3"
        ry="3"
        width={element.clientWidth - 100}
        height="7"
      />
      <rect
        x="60"
        y="243"
        rx="3"
        ry="3"
        width={element.clientWidth}
        height="6"
      />
      <circle cx="30" cy="259" r="18" />
      <rect
        x="60"
        y="291"
        rx="3"
        ry="3"
        width={element.clientWidth}
        height="6"
      />
      <rect
        x="60"
        y="365"
        rx="3"
        ry="3"
        width={element.clientWidth - 100}
        height="7"
      />
      <rect
        x="60"
        y="343"
        rx="3"
        ry="3"
        width={element.clientWidth}
        height="6"
      />
      <circle cx="30" cy="359" r="18" />
      <rect
        x="60"
        y="391"
        rx="3"
        ry="3"
        width={element.clientWidth}
        height="6"
      />
      <rect
        x="60"
        y="458"
        rx="3"
        ry="3"
        width={element.clientWidth - 100}
        height="7"
      />
      <rect
        x="60"
        y="436"
        rx="3"
        ry="3"
        width={element.clientWidth}
        height="6"
      />
      <circle cx="30" cy="452" r="18" />
      <rect
        x="60"
        y="484"
        rx="3"
        ry="3"
        width={element.clientWidth}
        height="6"
      />
      <rect
        x="60"
        y="507"
        rx="3"
        ry="3"
        width={element.clientWidth - 100}
        height="7"
      />
      <rect
        x="60"
        y="534"
        rx="3"
        ry="3"
        width={element.clientWidth}
        height="6"
      />
    </ContentLoader>
  );
};
