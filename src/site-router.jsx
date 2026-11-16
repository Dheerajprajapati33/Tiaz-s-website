import React from "react";
export function Link({ to, children, className = "", onClick, ...rest }) {
  const go = (e) => {
    if (onClick) onClick(e);
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    )
      return;
    e.preventDefault();
    window.history.pushState({}, "", to);
    window.dispatchEvent(new Event("tiaz:navigate"));
    window.scrollTo(0, 0);
  };
  return (
    <a href={to} className={className} onClick={go} {...rest}>
      {children}
    </a>
  );
}
