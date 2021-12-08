import React, { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { css, Keyframes, keyframes } from "styled-components";
import { StyledTooltip, Arrow } from "./StyledTooltip";
import { TooltipOptions, TooltipRefs } from "./types";

function isTouchDevice() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0;
}

const portalRoot = document.getElementById("portal-root");

const useTooltip = (content: React.ReactNode, options: TooltipOptions): TooltipRefs => {
  const {
    placement = "auto",
    trigger = "hover",
    arrowPadding = 16,
    tooltipPadding = { left: 16, right: 16 },
    tooltipOffset = [0, 10],
  } = options;
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [tooltipElement, setTooltipElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);
  const isHoveringOverTooltip = useRef(false);
  const hideTimeout = useRef<number>();

  // whether the tooltip was last set visible via click
  // for hover-click trigger option
  const [clicked, setClicked] = useState(false)
  useEffect(() => {
    console.log(clicked)
  }, [clicked])

  const hideTooltip = useCallback(
    (e: Event) => {
      const hide = () => {
        e.stopPropagation();
        e.preventDefault();
        setVisible(!visible);
      };

      if (trigger === "hover" || trigger === "hover-click") {
        if (hideTimeout.current) {
          window.clearTimeout(hideTimeout.current);
        }
        if (e.target === tooltipElement) {
          isHoveringOverTooltip.current = false;
        }
        if (!isHoveringOverTooltip.current && !clicked) {
          hideTimeout.current = window.setTimeout(() => {
            if (!isHoveringOverTooltip.current) {
              hide();
            }
          }, 100);
        }
      } 
      else {
        hide();
      }
    },
    [tooltipElement, trigger, clicked]
  );

  const showTooltip = useCallback(
    (e: Event) => {
      e.stopPropagation();
      e.preventDefault();
      setVisible(true);
      if (trigger === "hover" || trigger === "hover-click") {
        if (e.target === targetElement) {
          // If we were about to close the tooltip and got back to it
          // then prevent closing it.
          clearTimeout(hideTimeout.current);
        }
        if (e.target === tooltipElement) {
          isHoveringOverTooltip.current = true;
        }
      }
    },
    [tooltipElement, targetElement, trigger]
  );

  const toggleTooltip = useCallback(
    (e: Event) => {
      e.stopPropagation();
      setVisible(!visible);
    },
    [visible]
  );

  const toggleHoverClick = useCallback(
    (e: Event) => {
      e.stopPropagation();
      setClicked(!clicked);
    },
    [clicked]
  )

  // Trigger = hover
  useEffect(() => {
    if (targetElement === null || (trigger !== "hover" && trigger !== "hover-click")) return undefined;

    if (isTouchDevice()) {
      targetElement.addEventListener("touchstart", showTooltip);
      targetElement.addEventListener("touchend", hideTooltip);
    } else {
      targetElement.addEventListener("mouseenter", showTooltip);
      targetElement.addEventListener("mouseleave", hideTooltip);
    }
    return () => {
      targetElement.removeEventListener("touchstart", showTooltip);
      targetElement.removeEventListener("touchend", hideTooltip);
      targetElement.removeEventListener("mouseenter", showTooltip);
      targetElement.removeEventListener("mouseleave", hideTooltip);
    };
  }, [trigger, targetElement, hideTooltip, showTooltip]);

  // Keep tooltip open when cursor moves from the targetElement to the tooltip
  useEffect(() => {
    if (tooltipElement === null || (trigger !== "hover" && trigger !== "hover-click")) return undefined;

    tooltipElement.addEventListener("mouseenter", showTooltip);
    tooltipElement.addEventListener("mouseleave", hideTooltip);
    return () => {
      tooltipElement.removeEventListener("mouseenter", showTooltip);
      tooltipElement.removeEventListener("mouseleave", hideTooltip);
    };
  }, [trigger, tooltipElement, hideTooltip, showTooltip]);

  // Trigger = click
  useEffect(() => {
    if (targetElement === null || (trigger !== "click")) return undefined;

    targetElement.addEventListener("click", toggleTooltip);

    return () => targetElement.removeEventListener("click", toggleTooltip);
  }, [trigger, targetElement, visible, toggleTooltip]);

  // Trigger = hover-click
  useEffect(() => {
    if (targetElement === null || (trigger !== "hover-click")) return undefined;

    targetElement.addEventListener("click", toggleHoverClick);

    return () => targetElement.removeEventListener("click", toggleHoverClick);
  }, [trigger, targetElement, visible, toggleHoverClick]);

  // Handle click outside
  useEffect(() => {
    if (trigger !== "click" && trigger !== "hover-click") return undefined;

    const handleClickOutside = ({ target }: Event) => {
      if (target instanceof Node) {
        if (
          tooltipElement != null &&
          targetElement != null &&
          !tooltipElement.contains(target) &&
          !targetElement.contains(target)
        ) {
          setVisible(false);
          setClicked(false)
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [trigger, targetElement, tooltipElement]);

  // Trigger = focus
  useEffect(() => {
    if (targetElement === null || trigger !== "focus") return undefined;

    targetElement.addEventListener("focus", showTooltip);
    targetElement.addEventListener("blur", hideTooltip);
    return () => {
      targetElement.removeEventListener("focus", showTooltip);
      targetElement.removeEventListener("blur", hideTooltip);
    };
  }, [trigger, targetElement, showTooltip, hideTooltip]);

  // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyound the edge
  // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
  // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
  // and the screen edge.
  // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
  // that we support.
  // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
  // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
  // iPhone 5 behaves differently overflowing beyound the edge. All paddings are identical so I have no idea why it is,
  // and fixing that seems like a very bad use of time.
  const { styles, attributes } = usePopper(targetElement, tooltipElement, {
    placement,
    modifiers: [
      {
        name: "arrow",
        options: { element: arrowElement, padding: arrowPadding },
      },
      { name: "offset", options: { offset: tooltipOffset } },
      { name: "preventOverflow", options: { padding: tooltipPadding } },
    ],
  });


  const tooltip = (
    <StyledTooltip
      ref={setTooltipElement}
      $maxWidth={options.maxWidth}
      style={styles.popper}
      {...attributes.popper}
    >
      {content}
      <Arrow ref={setArrowElement} style={styles.arrow} />
    </StyledTooltip>
  );

  const tooltipInPortal = portalRoot ? createPortal(tooltip, portalRoot) : null;

  return {
    targetRef: setTargetElement,
    tooltip: tooltipInPortal ?? tooltip,
    tooltipVisible: visible,
  };
};

export default useTooltip;
