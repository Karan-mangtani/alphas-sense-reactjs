import React from "react";

export default function Paginator(props) {
  const {
    loading,
    total,
    totalRecords,
    setOffset,
    offset,
    className,
    children,
    ref,
  } = props;

  const fetchMoreData = async () => {
    if (!loading && total > totalRecords) {
      setOffset(offset + 10);
    }
  };

  const trackScrolling = (event) => {
    var element = event.target;
    if (
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight
      ) < 1
    ) {
      fetchMoreData();
    }
  };
  return (
    <div
      className={className}
      onScroll={(val) => trackScrolling(val)}
      ref={ref}
    >
      {children}
    </div>
  );
}
