/* @ds-bundle: {"format":4,"namespace":"SEEDDesignSystemKarrot_269f41","components":[{"name":"BoxButton","sourcePath":"components/buttons/BoxButton.jsx"},{"name":"BoxToggleButton","sourcePath":"components/buttons/BoxToggleButton.jsx"},{"name":"CapsuleToggleButton","sourcePath":"components/buttons/CapsuleToggleButton.jsx"},{"name":"ChipButton","sourcePath":"components/buttons/ChipButton.jsx"},{"name":"ChipFilter","sourcePath":"components/buttons/ChipFilter.jsx"},{"name":"ChipToggleButton","sourcePath":"components/buttons/ChipToggleButton.jsx"},{"name":"ExtendedFloatingActionButton","sourcePath":"components/buttons/ExtendedFloatingActionButton.jsx"},{"name":"FloatingActionButton","sourcePath":"components/buttons/FloatingActionButton.jsx"},{"name":"MenuFloatingActionButton","sourcePath":"components/buttons/MenuFloatingActionButton.jsx"},{"name":"TextButton","sourcePath":"components/buttons/TextButton.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/display/AvatarGroup.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"ActionableCallout","sourcePath":"components/feedback/ActionableCallout.jsx"},{"name":"ActionableInlineAlert","sourcePath":"components/feedback/ActionableInlineAlert.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"DismissableCallout","sourcePath":"components/feedback/DismissableCallout.jsx"},{"name":"DismissableInlineAlert","sourcePath":"components/feedback/DismissableInlineAlert.jsx"},{"name":"HelpBubble","sourcePath":"components/feedback/HelpBubble.jsx"},{"name":"InlineAlert","sourcePath":"components/feedback/InlineAlert.jsx"},{"name":"Snackbar","sourcePath":"components/feedback/Snackbar.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"ChipRadioGroup","sourcePath":"components/forms/ChipRadioGroup.jsx"},{"name":"MultilineTextField","sourcePath":"components/forms/MultilineTextField.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"RangeSlider","sourcePath":"components/forms/RangeSlider.jsx"},{"name":"SelectBox","sourcePath":"components/forms/SelectBox.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"ActionSheet","sourcePath":"components/overlay/ActionSheet.jsx"},{"name":"AlertDialog","sourcePath":"components/overlay/AlertDialog.jsx"},{"name":"BottomSheet","sourcePath":"components/overlay/BottomSheet.jsx"}],"sourceHashes":{"components/buttons/BoxButton.jsx":"4414c64d4a4d","components/buttons/BoxToggleButton.jsx":"a657eebce8e9","components/buttons/CapsuleToggleButton.jsx":"d8cc45191e80","components/buttons/ChipButton.jsx":"99f7a03dc9bf","components/buttons/ChipFilter.jsx":"2cf88772f359","components/buttons/ChipToggleButton.jsx":"80009d37a207","components/buttons/ExtendedFloatingActionButton.jsx":"6b0082f739ca","components/buttons/FloatingActionButton.jsx":"b99568450483","components/buttons/MenuFloatingActionButton.jsx":"909273579178","components/buttons/TextButton.jsx":"39697e6af0cc","components/core/Icon.jsx":"2f96730a73e0","components/display/Avatar.jsx":"828e0b962558","components/display/AvatarGroup.jsx":"7aec3bda8d0f","components/display/Tabs.jsx":"b2411db69aad","components/feedback/ActionableCallout.jsx":"e5639559b9e6","components/feedback/ActionableInlineAlert.jsx":"fc7f1aac9f67","components/feedback/Callout.jsx":"6a5323b20203","components/feedback/DismissableCallout.jsx":"2c745e49394f","components/feedback/DismissableInlineAlert.jsx":"7b40c4f593a3","components/feedback/HelpBubble.jsx":"3cc5fa0b98b2","components/feedback/InlineAlert.jsx":"6e01a12e476a","components/feedback/Snackbar.jsx":"7cd3fc92c88e","components/feedback/Spinner.jsx":"dfb08a7559db","components/forms/Checkbox.jsx":"83a950a78a6e","components/forms/ChipRadioGroup.jsx":"01eb69d7e3a3","components/forms/MultilineTextField.jsx":"246edf116768","components/forms/RadioGroup.jsx":"d4a7321993ce","components/forms/RangeSlider.jsx":"c019b7c87b4c","components/forms/SelectBox.jsx":"5934eda721af","components/forms/Slider.jsx":"460d12681c09","components/forms/Switch.jsx":"f0b6117dcc88","components/forms/TextField.jsx":"404a3593fdab","components/overlay/ActionSheet.jsx":"2f402b2cf05f","components/overlay/AlertDialog.jsx":"03f6b8c694f6","components/overlay/BottomSheet.jsx":"0813b7d986ba","ui_kits/karrot-app/AppChrome.jsx":"14fc87d99f88","ui_kits/karrot-app/ChatScreen.jsx":"1e9e342e1d0b","ui_kits/karrot-app/HomeScreen.jsx":"df19e0af4a89","ui_kits/karrot-app/ItemDetailScreen.jsx":"33bc6f95fa47","ui_kits/karrot-app/MyScreen.jsx":"c035835cf41f","ui_kits/seed-docs/DocPage.jsx":"7ed64c9c7321","ui_kits/seed-docs/DocsChrome.jsx":"1ef1d2081937","ui_kits/seed-docs/MainPage.jsx":"818dc178f214"},"inlinedExternals":[],"unexposedExports":[{"name":"avatarSizes","sourcePath":"components/display/Avatar.jsx"},{"name":"calloutVariants","sourcePath":"components/feedback/Callout.jsx"},{"name":"chipSizes","sourcePath":"components/buttons/ChipButton.jsx"},{"name":"fabShadow","sourcePath":"components/buttons/FloatingActionButton.jsx"},{"name":"inlineAlertVariants","sourcePath":"components/feedback/InlineAlert.jsx"},{"name":"sliderShadow","sourcePath":"components/forms/Slider.jsx"}]} */

(() => {

const __ds_ns = (window.SEEDDesignSystemKarrot_269f41 = window.SEEDDesignSystemKarrot_269f41 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Monochrome SEED icon. Renders assets/svg/icon_<name>_<weight>.svg as a CSS mask so it tints to `color`. */
function Icon({
  name,
  weight = "regular",
  size = 16,
  color = "currentColor",
  base = "assets/svg",
  style,
  ...rest
}) {
  const url = `${base}/icon_${name}_${weight}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      flex: "none",
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: `url("${url}")`,
      maskImage: `url("${url}")`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/buttons/BoxButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const SIZES = {
  xsmall: {
    minWidth: 40,
    height: 32,
    px: 10,
    radius: 4,
    pre: 12,
    suf: 12,
    gap: 2,
    typo: "label5-bold"
  },
  small: {
    minWidth: 54,
    height: 36,
    px: 14,
    radius: 4,
    pre: 16,
    suf: 14,
    gap: 4,
    typo: "label3-bold"
  },
  medium: {
    minWidth: 58,
    height: 40,
    px: 16,
    radius: 6,
    pre: 16,
    suf: 14,
    gap: 4,
    typo: "label3-bold"
  },
  large: {
    minWidth: 66,
    height: 48,
    px: 20,
    radius: 6,
    pre: 16,
    suf: 16,
    gap: 4,
    typo: "label3-bold"
  },
  xlarge: {
    minWidth: 72,
    height: 52,
    px: 22,
    radius: 6,
    pre: 18,
    suf: 16,
    gap: 4,
    typo: "label1-bold"
  }
};
const VARIANTS = {
  primary: {
    enabled: ["var(--seed-semantic-color-primary)", "var(--seed-semantic-color-on-primary)"],
    hover: ["var(--seed-semantic-color-primary-hover)", "var(--seed-semantic-color-on-primary)"],
    pressed: ["var(--seed-semantic-color-primary-pressed)", "var(--seed-semantic-color-on-primary)"]
  },
  "primary-low": {
    enabled: ["var(--seed-semantic-color-primary-low)", "var(--seed-semantic-color-primary)"],
    hover: ["var(--seed-semantic-color-primary-low-hover)", "var(--seed-semantic-color-primary)"],
    pressed: ["var(--seed-semantic-color-primary-low-pressed)", "var(--seed-semantic-color-primary)"]
  },
  secondary: {
    enabled: ["var(--seed-scale-color-gray-100)", "var(--seed-scale-color-gray-900)"],
    hover: ["var(--seed-scale-color-gray-300)", "var(--seed-scale-color-gray-900)"],
    pressed: ["var(--seed-scale-color-gray-300)", "var(--seed-scale-color-gray-900)"]
  },
  danger: {
    enabled: ["var(--seed-semantic-color-danger)", "var(--seed-static-color-static-white)"],
    hover: ["var(--seed-scale-color-red-400)", "var(--seed-static-color-static-white)"],
    pressed: ["var(--seed-scale-color-red-400)", "var(--seed-static-color-static-white)"]
  }
};
const DISABLED = ["var(--seed-scale-color-gray-300)", "var(--seed-scale-color-gray-500)"];

/** SEED Box Button. The default action button; `medium` + `primary` is the common case. */
function BoxButton({
  children,
  size = "medium",
  variant = "primary",
  isDisabled = false,
  prefixIcon,
  suffixIcon,
  fullWidth = false,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const s = SIZES[size] || SIZES.medium;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [bg, fg] = isDisabled ? DISABLED : pressed ? v.pressed : hovered ? v.hover : v.enabled;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: isDisabled,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      minWidth: fullWidth ? undefined : s.minWidth,
      width: fullWidth ? "100%" : undefined,
      height: s.height,
      padding: `0 ${s.px}px`,
      border: "none",
      borderRadius: s.radius,
      background: bg,
      color: fg,
      textAlign: "center",
      whiteSpace: "nowrap",
      cursor: isDisabled ? "default" : "pointer",
      transform: pressed && !isDisabled ? "scale(0.95)" : "scale(1)",
      transition: "transform var(--seed-duration-press) var(--seed-scale-timing-function-standard-easing), background-color var(--seed-duration-color) var(--seed-scale-timing-function-standard-easing)",
      outlineColor: "var(--seed-scale-color-blue-600)",
      outlineWidth: 2,
      ...T(s.typo),
      ...style
    }
  }, rest), prefixIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: prefixIcon,
    size: s.pre,
    base: iconBase
  }) : null, /*#__PURE__*/React.createElement("span", null, children), suffixIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: suffixIcon,
    size: s.suf,
    base: iconBase
  }) : null);
}
Object.assign(__ds_scope, { BoxButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/BoxButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/BoxToggleButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const SIZES = {
  xsmall: {
    minWidth: 40,
    height: 32,
    px: 10,
    radius: 4,
    pre: 12,
    suf: 12,
    gap: 2,
    typo: "label5-bold"
  },
  small: {
    minWidth: 54,
    height: 36,
    px: 14,
    radius: 4,
    pre: 16,
    suf: 14,
    gap: 4,
    typo: "label3-bold"
  },
  medium: {
    minWidth: 58,
    height: 40,
    px: 16,
    radius: 6,
    pre: 16,
    suf: 14,
    gap: 4,
    typo: "label3-bold"
  },
  large: {
    minWidth: 66,
    height: 48,
    px: 20,
    radius: 6,
    pre: 16,
    suf: 16,
    gap: 4,
    typo: "label3-bold"
  }
};
const GRAY_SELECTED = {
  enabled: ["var(--seed-semantic-color-secondary-low)", "var(--seed-scale-color-gray-900)"],
  hover: ["var(--seed-scale-color-gray-200)", "var(--seed-scale-color-gray-900)"],
  pressed: ["var(--seed-scale-color-gray-200)", "var(--seed-scale-color-gray-900)"]
};
const PRIMARY_LOW = {
  enabled: ["var(--seed-semantic-color-primary-low)", "var(--seed-semantic-color-primary)"],
  hover: ["var(--seed-semantic-color-primary-low-hover)", "var(--seed-semantic-color-primary)"],
  pressed: ["var(--seed-semantic-color-primary-low-pressed)", "var(--seed-semantic-color-primary)"]
};
const VARIANTS = {
  primary: {
    unselected: {
      enabled: ["var(--seed-semantic-color-primary)", "var(--seed-semantic-color-on-primary)"],
      hover: ["var(--seed-semantic-color-primary-hover)", "var(--seed-semantic-color-on-primary)"],
      pressed: ["var(--seed-semantic-color-primary-pressed)", "var(--seed-semantic-color-on-primary)"]
    },
    selected: GRAY_SELECTED
  },
  "primary-low": {
    unselected: PRIMARY_LOW,
    selected: GRAY_SELECTED
  },
  secondary: {
    unselected: {
      enabled: ["var(--seed-scale-color-gray-100)", "var(--seed-scale-color-gray-900)"],
      hover: ["var(--seed-scale-color-gray-300)", "var(--seed-scale-color-gray-900)"],
      pressed: ["var(--seed-scale-color-gray-300)", "var(--seed-scale-color-gray-900)"]
    },
    selected: PRIMARY_LOW
  }
};
const DISABLED = ["var(--seed-scale-color-gray-300)", "var(--seed-scale-color-gray-500)"];

/** SEED Box Toggle Button — a Box Button that keeps a selected state. */
function BoxToggleButton({
  children,
  size = "medium",
  variant = "secondary",
  isSelected = false,
  isDisabled = false,
  prefixIcon,
  suffixIcon,
  onToggle,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const s = SIZES[size] || SIZES.medium;
  const set = (VARIANTS[variant] || VARIANTS.secondary)[isSelected ? "selected" : "unselected"];
  const [bg, fg] = isDisabled ? DISABLED : pressed ? set.pressed : hovered ? set.hover : set.enabled;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": isSelected,
    disabled: isDisabled,
    onClick: () => onToggle && onToggle(!isSelected),
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      minWidth: s.minWidth,
      height: s.height,
      padding: `0 ${s.px}px`,
      border: "none",
      borderRadius: s.radius,
      background: bg,
      color: fg,
      whiteSpace: "nowrap",
      cursor: isDisabled ? "default" : "pointer",
      transform: pressed && !isDisabled ? "scale(0.95)" : "scale(1)",
      transition: "transform var(--seed-duration-press) var(--seed-scale-timing-function-standard-easing), background-color var(--seed-duration-color) var(--seed-scale-timing-function-standard-easing) 50ms",
      ...T(s.typo),
      ...style
    }
  }, rest), prefixIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: prefixIcon,
    size: s.pre,
    base: iconBase
  }) : null, /*#__PURE__*/React.createElement("span", null, children), suffixIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: suffixIcon,
    size: s.suf,
    base: iconBase
  }) : null);
}
Object.assign(__ds_scope, { BoxToggleButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/BoxToggleButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/CapsuleToggleButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const SIZES = {
  xsmall: {
    minWidth: 40,
    px: 10,
    py: 8,
    radius: 16,
    icon: 12,
    gap: 2,
    typo: "label4-bold"
  },
  small: {
    minWidth: 54,
    px: 14,
    py: 8,
    radius: 18,
    icon: 16,
    gap: 4,
    typo: "label3-bold"
  }
};

/** SEED Capsule Toggle Button — a capsule that toggles between neutral and primary-low. */
function CapsuleToggleButton({
  children,
  size = "small",
  isSelected = false,
  isDisabled = false,
  icon,
  onToggle,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.small;
  let bg = active ? "var(--seed-scale-color-gray-200)" : "var(--seed-semantic-color-secondary-low)";
  let fg = "var(--seed-scale-color-gray-900)";
  if (isSelected) {
    bg = active ? "var(--seed-semantic-color-primary-low-pressed)" : "var(--seed-semantic-color-primary-low)";
    fg = "var(--seed-semantic-color-primary)";
  }
  if (isDisabled) {
    bg = "var(--seed-scale-color-gray-300)";
    fg = "var(--seed-scale-color-gray-500)";
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": isSelected,
    disabled: isDisabled,
    onClick: () => onToggle && onToggle(!isSelected),
    onMouseEnter: () => setActive(true),
    onMouseLeave: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      minWidth: s.minWidth,
      padding: `${s.py}px ${s.px}px`,
      border: "none",
      borderRadius: s.radius,
      background: bg,
      color: fg,
      whiteSpace: "nowrap",
      cursor: isDisabled ? "default" : "pointer",
      transition: "background-color var(--seed-duration-color) var(--seed-scale-timing-function-standard-easing)",
      ...T(s.typo),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon,
    base: iconBase
  }) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { CapsuleToggleButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/CapsuleToggleButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/ChipButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const chipSizes = {
  small: {
    height: 32,
    px: 12,
    pre: 14,
    suf: 14,
    gap: 4,
    typo: "caption1-regular"
  },
  medium: {
    height: 38,
    px: 14,
    pre: 16,
    suf: 14,
    gap: 4,
    typo: "body-m2-regular"
  }
};

/** SEED Chip Button — an outlined pill action, usually in a horizontally scrolling row. */
function ChipButton({
  children,
  size = "medium",
  count,
  isDisabled = false,
  prefixIcon,
  suffixIcon,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const s = chipSizes[size] || chipSizes.medium;
  const bg = isDisabled ? "transparent" : pressed ? "var(--seed-semantic-color-gray-pressed)" : hovered ? "var(--seed-semantic-color-gray-hover)" : "transparent";
  const label = isDisabled ? "var(--seed-scale-color-gray-400)" : "var(--seed-scale-color-gray-900)";
  const countColor = isDisabled ? "var(--seed-scale-color-gray-400)" : hovered || pressed ? "var(--seed-scale-color-gray-700)" : "var(--seed-scale-color-gray-600)";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: isDisabled,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap,
      height: s.height,
      padding: `0 ${s.px}px`,
      borderRadius: 9999,
      border: "1px solid var(--seed-semantic-color-divider-2)",
      background: bg,
      color: label,
      whiteSpace: "nowrap",
      cursor: isDisabled ? "default" : "pointer",
      transition: "background-color var(--seed-duration-color) var(--seed-scale-timing-function-standard-easing)",
      ...T(s.typo),
      ...style
    }
  }, rest), prefixIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: prefixIcon,
    size: s.pre,
    base: iconBase
  }) : null, /*#__PURE__*/React.createElement("span", null, children), count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: countColor
    }
  }, count) : null, suffixIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: suffixIcon,
    size: s.suf,
    base: iconBase
  }) : null);
}
Object.assign(__ds_scope, { ChipButton, chipSizes });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/ChipButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/ChipToggleButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});

/** SEED Chip Toggle Button — pill with a selected state; selection fills gray-800. */
function ChipToggleButton({
  children,
  size = "medium",
  isSelected = false,
  isDisabled = false,
  prefixIcon,
  suffixIcon,
  onToggle,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const [active, setActive] = React.useState(false);
  const s = __ds_scope.chipSizes[size] || __ds_scope.chipSizes.medium;
  let bg = "transparent";
  let fg = "var(--seed-scale-color-gray-900)";
  let border = "1px solid var(--seed-semantic-color-divider-2)";
  if (isSelected) {
    bg = active ? "var(--seed-scale-color-gray-700)" : "var(--seed-scale-color-gray-800)";
    fg = "var(--seed-scale-color-gray-00)";
    border = "1px solid transparent";
  } else if (active) {
    bg = "var(--seed-semantic-color-gray-hover)";
  }
  if (isDisabled) {
    bg = "transparent";
    fg = "var(--seed-scale-color-gray-400)";
    border = "1px solid var(--seed-semantic-color-divider-2)";
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": isSelected,
    disabled: isDisabled,
    onClick: () => onToggle && onToggle(!isSelected),
    onMouseEnter: () => setActive(true),
    onMouseLeave: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap,
      height: s.height,
      padding: `0 ${s.px}px`,
      borderRadius: 9999,
      border,
      background: bg,
      color: fg,
      whiteSpace: "nowrap",
      cursor: isDisabled ? "default" : "pointer",
      transition: "background-color var(--seed-duration-color) var(--seed-scale-timing-function-standard-easing)",
      ...T(s.typo),
      ...style
    }
  }, rest), prefixIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: prefixIcon,
    size: s.pre,
    base: iconBase
  }) : null, /*#__PURE__*/React.createElement("span", null, children), suffixIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: suffixIcon,
    size: s.suf,
    base: iconBase
  }) : null);
}
Object.assign(__ds_scope, { ChipToggleButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/ChipToggleButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/ChipFilter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SEED Chip Filter — a filter entry that carries a selected state.
 * SEED publishes usage but no style spec for this component, so it reuses the
 * Chip Toggle Button visuals (same anatomy: Root / Label / Prefix Icon / Suffix Icon).
 */
function ChipFilter({
  children,
  isSelected = false,
  isDisabled = false,
  prefixIcon,
  suffixIcon,
  onToggle,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.ChipToggleButton, _extends({
    isSelected: isSelected,
    isDisabled: isDisabled,
    prefixIcon: prefixIcon,
    suffixIcon: suffixIcon,
    onToggle: onToggle,
    iconBase: iconBase,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { ChipFilter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/ChipFilter.jsx", error: String((e && e.message) || e) }); }

// components/buttons/FloatingActionButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fabShadow = {
  medium: "0 2px 6px 0 rgba(0,0,0,0.16)",
  small: "0 1px 3px 0 rgba(0,0,0,0.28)"
};
const SIZES = {
  medium: {
    box: 48,
    icon: 22
  },
  small: {
    box: 40,
    icon: 20
  }
};

/** SEED Floating Action Button — a circular, shadowed icon action floating over content. */
function FloatingActionButton({
  icon = "add",
  size = "medium",
  label,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const s = SIZES[size] || SIZES.medium;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.box,
      height: s.box,
      borderRadius: 9999,
      border: "none",
      background: pressed ? "var(--seed-semantic-color-gray-pressed)" : "var(--seed-semantic-color-paper-floating)",
      color: "var(--seed-scale-color-gray-900)",
      boxShadow: fabShadow[size] || fabShadow.medium,
      cursor: "pointer",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon,
    base: iconBase
  }));
}
Object.assign(__ds_scope, { FloatingActionButton, fabShadow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/FloatingActionButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/ExtendedFloatingActionButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const SIZES = {
  medium: {
    height: 46,
    px: 18,
    icon: 16,
    gap: 4,
    typo: "label2-bold"
  },
  small: {
    height: 35,
    px: 16,
    icon: 16,
    gap: 4,
    typo: "label3-regular"
  }
};

/** SEED Extended Floating Action Button — a labelled pill FAB. */
function ExtendedFloatingActionButton({
  children,
  icon,
  size = "medium",
  variant = "over-paper",
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const s = SIZES[size] || SIZES.medium;
  const overPaper = variant === "over-paper";
  const bg = overPaper ? pressed ? "var(--seed-scale-color-gray-700)" : "var(--seed-scale-color-gray-900)" : pressed ? "var(--seed-semantic-color-gray-pressed)" : "var(--seed-semantic-color-paper-floating)";
  const fg = overPaper ? "var(--seed-scale-color-gray-00)" : "var(--seed-scale-color-gray-900)";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: `0 ${s.px}px`,
      borderRadius: 9999,
      border: "none",
      background: bg,
      color: fg,
      boxShadow: __ds_scope.fabShadow[size] || __ds_scope.fabShadow.medium,
      whiteSpace: "nowrap",
      cursor: "pointer",
      ...T(s.typo),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon,
    base: iconBase
  }) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { ExtendedFloatingActionButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/ExtendedFloatingActionButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/MenuFloatingActionButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const SHADOW = "0 2px 6px 0 rgba(0,0,0,0.10)";
const EASE = "var(--seed-scale-timing-function-standard-easing)";

/** SEED Menu Floating Action Button — a carrot trigger that opens a floating menu. */
function MenuFloatingActionButton({
  label = "글쓰기",
  triggerIcon = "add",
  isExtended = true,
  items = [],
  primaryItem,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const extended = isExtended || open;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(false),
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--seed-semantic-color-overlay-dim)",
      opacity: open ? 1 : 0,
      transition: `opacity 100ms ${EASE} ${open ? "50ms" : "0ms"}`,
      pointerEvents: open ? "auto" : "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 16,
      bottom: 16,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 12,
      pointerEvents: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      gap: 8,
      minWidth: 180,
      opacity: open ? 1 : 0,
      transform: open ? "translateY(0) scale(1)" : "translateY(25px) scale(0.3)",
      transformOrigin: "bottom right",
      transition: `opacity 150ms ${EASE}, transform var(--seed-duration-menu-transform) ${EASE}`,
      pointerEvents: open ? "auto" : "none"
    }
  }, items.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      padding: "8px 0",
      borderRadius: 14,
      background: "var(--seed-semantic-color-paper-floating)",
      boxShadow: SHADOW
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.label,
    type: "button",
    onClick: () => {
      setOpen(false);
      it.onClick && it.onClick();
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 16px",
      border: "none",
      background: "none",
      color: "var(--seed-scale-color-gray-900)",
      cursor: "pointer",
      textAlign: "left",
      ...T("label2-regular")
    }
  }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 20,
    base: iconBase
  }) : null, /*#__PURE__*/React.createElement("span", null, it.label)))) : null, primaryItem ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setOpen(false);
      primaryItem.onClick && primaryItem.onClick();
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 16px",
      borderRadius: 14,
      border: "none",
      background: "var(--seed-semantic-color-paper-floating)",
      color: "var(--seed-scale-color-gray-900)",
      boxShadow: SHADOW,
      cursor: "pointer",
      textAlign: "left",
      ...T("label2-regular")
    }
  }, primaryItem.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: primaryItem.icon,
    size: 20,
    base: iconBase
  }) : null, /*#__PURE__*/React.createElement("span", null, primaryItem.label)) : null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => !o),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: extended ? "12px 18px" : 16,
      borderRadius: 9999,
      border: "none",
      background: open ? "var(--seed-semantic-color-paper-floating)" : "var(--seed-semantic-color-primary)",
      color: open ? "var(--seed-scale-color-gray-900)" : "var(--seed-semantic-color-on-primary)",
      boxShadow: SHADOW,
      cursor: "pointer",
      transition: `padding 250ms ${EASE}, background-color 150ms ${EASE}`,
      ...T("label2-bold")
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      transform: open ? "rotate(45deg)" : "rotate(0deg)",
      transition: `transform var(--seed-duration-menu-transform) ${EASE}`
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: triggerIcon,
    size: extended ? 16 : 24,
    base: iconBase
  })), extended ? /*#__PURE__*/React.createElement("span", {
    style: {
      transform: "translateX(8px)",
      paddingRight: 8
    }
  }, label) : null)));
}
Object.assign(__ds_scope, { MenuFloatingActionButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/MenuFloatingActionButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/TextButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const SIZES = {
  small: {
    height: 23,
    icon: 14,
    gap: 1,
    regular: "label3-regular",
    bold: "label3-bold"
  },
  medium: {
    height: 26,
    icon: 14,
    gap: 2,
    regular: "label2-regular",
    bold: "label2-bold"
  },
  large: {
    height: 28,
    icon: 16,
    gap: 2,
    regular: "label1-regular",
    bold: "label1-bold"
  }
};
const VARIANTS = {
  primary: ["var(--seed-semantic-color-primary)", "var(--seed-semantic-color-primary-hover)"],
  secondary: ["var(--seed-semantic-color-secondary)", "var(--seed-scale-color-gray-700)"],
  "secondary-low": ["var(--seed-scale-color-gray-600)", "var(--seed-scale-color-gray-700)"],
  accent: ["var(--seed-semantic-color-accent)", "var(--seed-scale-color-blue-400)"],
  danger: ["var(--seed-semantic-color-danger)", "var(--seed-scale-color-red-400)"]
};

/** SEED Text Button — a label-only action, used inline or at the end of a row. */
function TextButton({
  children,
  size = "medium",
  variant = "secondary",
  textStyle = "basic",
  bold = false,
  isDisabled = false,
  prefixIcon,
  suffixIcon,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.medium;
  const v = VARIANTS[variant] || VARIANTS.secondary;
  const color = isDisabled ? "var(--seed-scale-color-gray-400)" : active ? v[1] : v[0];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: isDisabled,
    onMouseEnter: () => setActive(true),
    onMouseLeave: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: 0,
      border: "none",
      background: "none",
      color,
      cursor: isDisabled ? "default" : "pointer",
      textDecoration: textStyle === "underlined" ? "underline" : "none",
      textUnderlineOffset: textStyle === "underlined" ? 4 : undefined,
      transition: "color var(--seed-duration-color) var(--seed-scale-timing-function-standard-easing)",
      ...T(bold ? s.bold : s.regular),
      ...style
    }
  }, rest), prefixIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: prefixIcon,
    size: s.icon,
    base: iconBase
  }) : null, /*#__PURE__*/React.createElement("span", null, children), suffixIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: suffixIcon,
    size: s.icon,
    base: iconBase
  }) : null);
}
Object.assign(__ds_scope, { TextButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/TextButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const avatarSizes = {
  xxsmall: {
    box: 20,
    badge: 10
  },
  xsmall: {
    box: 24,
    badge: 12
  },
  small: {
    box: 36,
    badge: 20
  },
  medium: {
    box: 48,
    badge: 24
  },
  large: {
    box: 64,
    badge: 24
  },
  xlarge: {
    box: 80,
    badge: 24
  },
  xxlarge: {
    box: 96,
    badge: 32
  }
};

/** SEED Avatar — circular profile image with an optional badge. */
function Avatar({
  src,
  alt = "",
  size = "medium",
  fallbackIcon = "profile",
  badgeIcon,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const s = avatarSizes[size] || avatarSizes.medium;
  const [failed, setFailed] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "none",
      width: s.box,
      height: s.box,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.box,
      height: s.box,
      borderRadius: "100%",
      overflow: "hidden",
      background: "var(--seed-scale-color-gray-100)",
      boxShadow: "inset 0 0 0 1px var(--seed-scale-color-gray-alpha-50)"
    }
  }, src && !failed ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onError: () => setFailed(true),
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: fallbackIcon,
    weight: "fill",
    size: Math.round(s.box * 0.62),
    color: "var(--seed-scale-color-gray-500)",
    base: iconBase
  })), badgeIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.badge,
      height: s.badge,
      borderRadius: "100%",
      background: "var(--seed-scale-color-gray-00)",
      boxShadow: "inset 0 0 0 1px var(--seed-scale-color-gray-alpha-50)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: badgeIcon,
    weight: "fill",
    size: Math.round(s.badge * 0.68),
    color: "var(--seed-scale-color-gray-700)",
    base: iconBase
  })) : null);
}
Object.assign(__ds_scope, { avatarSizes, Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/AvatarGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const GAP = {
  xxsmall: -5,
  xsmall: -6,
  small: -8,
  medium: -10
};
const COUNT_TYPO = {
  xxsmall: "label6-regular",
  xsmall: "label6-regular",
  small: "label5-regular",
  medium: "label3-regular"
};

/** SEED Avatar Group — overlapping avatars with an excess count. */
function AvatarGroup({
  items = [],
  size = "small",
  limit = 3,
  topItem = "firstItem",
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const s = __ds_scope.avatarSizes[size] || __ds_scope.avatarSizes.small;
  const shown = items.slice(0, limit);
  const excess = items.length - shown.length;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, rest), shown.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : GAP[size] || -8,
      zIndex: topItem === "firstItem" ? shown.length - i : i + 1,
      borderRadius: "100%",
      boxShadow: "0 0 0 2px var(--seed-semantic-color-paper-default)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    size: size,
    src: typeof it === "string" ? it : it.src,
    alt: typeof it === "string" ? "" : it.alt,
    iconBase: iconBase
  }))), excess > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: GAP[size] || -8,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.box,
      height: s.box,
      borderRadius: "100%",
      background: "var(--seed-semantic-color-paper-background)",
      boxShadow: "inset 0 0 0 1px var(--seed-scale-color-gray-400), 0 0 0 2px var(--seed-semantic-color-paper-default)",
      color: "var(--seed-scale-color-gray-600)",
      ...T(COUNT_TYPO[size] || "label5-regular")
    }
  }, "+", excess) : null);
}
Object.assign(__ds_scope, { AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/AvatarGroup.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});

/** SEED Tabs — underlined tab list with a moving indicator; layout hug or fill. */
function Tabs({
  tabs = [],
  value,
  onChange,
  layout = "hug",
  children,
  style,
  ...rest
}) {
  const items = tabs.map(t => typeof t === "string" ? {
    value: t,
    label: t
  } : t);
  const current = value != null ? value : items[0] && items[0].value;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      paddingLeft: layout === "hug" ? 16 : 0,
      borderBottom: "1px solid var(--seed-scale-color-gray-300)",
      overflowX: "auto"
    }
  }, items.map(t => {
    const selected = t.value === current;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": selected,
      disabled: t.isDisabled,
      onClick: () => onChange && onChange(t.value),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        flex: layout === "fill" ? 1 : "none",
        minWidth: 54,
        padding: "10px 12px",
        marginBottom: -1,
        border: "none",
        borderBottom: `2px solid ${selected ? "var(--seed-scale-color-gray-900)" : "transparent"}`,
        background: "none",
        whiteSpace: "nowrap",
        cursor: t.isDisabled ? "default" : "pointer",
        color: t.isDisabled ? "var(--seed-scale-color-gray-300)" : selected ? "var(--seed-scale-color-gray-900)" : "var(--seed-scale-color-gray-600)",
        ...T("label3-bold")
      }
    }, /*#__PURE__*/React.createElement("span", null, t.label), t.dot ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 4,
        borderRadius: "100%",
        background: "var(--seed-scale-color-carrot-500)",
        alignSelf: "flex-start",
        marginTop: 2
      }
    }) : null);
  })), children ? /*#__PURE__*/React.createElement("div", {
    role: "tabpanel"
  }, children) : null);
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const calloutVariants = {
  outline: {
    bg: "transparent",
    border: "1px solid var(--seed-scale-color-gray-300)",
    fg: "var(--seed-scale-color-gray-900)",
    pressed: "var(--seed-semantic-color-gray-pressed)"
  },
  normal: {
    bg: "var(--seed-scale-color-gray-100)",
    border: "1px solid transparent",
    fg: "var(--seed-scale-color-gray-900)",
    pressed: "var(--seed-scale-color-gray-200)"
  },
  info: {
    bg: "var(--seed-scale-color-blue-alpha-50)",
    border: "1px solid transparent",
    fg: "var(--seed-scale-color-blue-950)",
    pressed: "var(--seed-scale-color-blue-alpha-100)"
  },
  warning: {
    bg: "var(--seed-scale-color-yellow-alpha-50)",
    border: "1px solid transparent",
    fg: "var(--seed-scale-color-yellow-950)",
    pressed: "var(--seed-scale-color-yellow-alpha-100)"
  },
  danger: {
    bg: "var(--seed-scale-color-red-alpha-50)",
    border: "1px solid transparent",
    fg: "var(--seed-scale-color-red-950)",
    pressed: "var(--seed-scale-color-red-alpha-100)"
  }
};

/** SEED Callout — a static block of guidance inside the content flow. */
function Callout({
  title,
  children,
  variant = "normal",
  icon,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const v = calloutVariants[variant] || calloutVariants.normal;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 8,
      padding: "14px 16px",
      borderRadius: 10,
      background: v.bg,
      border: v.border,
      color: v.fg,
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    base: iconBase,
    style: {
      marginTop: 2
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: T("body-m2-bold")
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    style: T("body-m2-regular")
  }, children) : null));
}
Object.assign(__ds_scope, { calloutVariants, Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ActionableCallout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});

/** SEED Actionable Callout — a whole-callout press target with a trailing chevron. */
function ActionableCallout({
  title,
  children,
  variant = "normal",
  onClick,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const v = __ds_scope.calloutVariants[variant] || __ds_scope.calloutVariants.normal;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      padding: "14px 12px 14px 16px",
      borderRadius: 10,
      background: pressed ? v.pressed : v.bg,
      border: v.border,
      color: v.fg,
      textAlign: "left",
      cursor: "pointer",
      transition: "background-color var(--seed-duration-color) var(--seed-scale-timing-function-standard-easing)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: T("body-m2-bold")
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    style: T("body-m2-regular")
  }, children) : null), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron_right",
    size: 18,
    base: iconBase
  }));
}
Object.assign(__ds_scope, { ActionableCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ActionableCallout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/DismissableCallout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});

/** SEED Dismissable Callout — a callout the user can close. */
function DismissableCallout({
  title,
  children,
  variant = "normal",
  onDismiss,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(true);
  const v = __ds_scope.calloutVariants[variant] || __ds_scope.calloutVariants.normal;
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      padding: "14px 14px 14px 16px",
      borderRadius: 10,
      background: v.bg,
      border: v.border,
      color: v.fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: T("body-m2-bold")
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    style: T("body-m2-regular")
  }, children) : null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uB2EB\uAE30",
    onClick: () => {
      setOpen(false);
      onDismiss && onDismiss();
    },
    style: {
      display: "inline-flex",
      padding: 0,
      border: "none",
      background: "none",
      color: "inherit",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 18,
    base: iconBase
  })));
}
Object.assign(__ds_scope, { DismissableCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/DismissableCallout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/HelpBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});

/** SEED Help Bubble — a small tooltip anchored to a trigger, with an arrow. */
function HelpBubble({
  children,
  message,
  isModal = false,
  showCloseTrigger = false,
  placement = "bottom",
  defaultOpen = true,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const bg = isModal ? "var(--seed-static-color-static-white)" : "var(--seed-scale-color-gray-900)";
  const fg = isModal ? "var(--seed-static-color-static-black)" : "var(--seed-scale-color-gray-00)";
  const top = placement === "top";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, rest), isModal && open ? /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(false),
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--seed-scale-color-gray-alpha-500)"
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o),
    style: {
      display: "inline-flex",
      cursor: "pointer",
      position: "relative"
    }
  }, children), open ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      [top ? "bottom" : "top"]: "calc(100% + 8px)",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      borderRadius: 6,
      background: bg,
      color: fg,
      whiteSpace: "nowrap",
      zIndex: 1,
      ...T("caption1-bold")
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      marginLeft: -5,
      [top ? "bottom" : "top"]: -4,
      width: 10,
      height: 10,
      background: bg,
      transform: "rotate(45deg)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative"
    }
  }, message), showCloseTrigger ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uB2EB\uAE30",
    onClick: e => {
      e.stopPropagation();
      setOpen(false);
    },
    style: {
      position: "relative",
      display: "inline-flex",
      padding: 0,
      border: "none",
      background: "none",
      color: "inherit",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 18,
    base: iconBase
  })) : null) : null);
}
Object.assign(__ds_scope, { HelpBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/HelpBubble.jsx", error: String((e && e.message) || e) }); }

// components/feedback/InlineAlert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});

/* SEED documents Inline Alert's usage (variants normal/info/success/danger, weight standard/strong)
   but publishes no style spec. Standard uses the alpha-50 tint / 950 text pairing that Callout uses;
   strong deepens the tint to alpha-100. Verify against Figma before production. */
const inlineAlertVariants = {
  normal: {
    standard: "var(--seed-scale-color-gray-100)",
    strong: "var(--seed-scale-color-gray-200)",
    fg: "var(--seed-scale-color-gray-900)",
    icon: "info"
  },
  info: {
    standard: "var(--seed-scale-color-blue-alpha-50)",
    strong: "var(--seed-scale-color-blue-alpha-100)",
    fg: "var(--seed-scale-color-blue-950)",
    icon: "info"
  },
  success: {
    standard: "var(--seed-scale-color-green-alpha-50)",
    strong: "var(--seed-scale-color-green-alpha-100)",
    fg: "var(--seed-scale-color-green-950)",
    icon: "check"
  },
  danger: {
    standard: "var(--seed-scale-color-red-alpha-50)",
    strong: "var(--seed-scale-color-red-alpha-100)",
    fg: "var(--seed-scale-color-red-950)",
    icon: "warning"
  }
};

/** SEED Inline Alert — a short status message anchored to the content it describes. */
function InlineAlert({
  title,
  children,
  variant = "normal",
  weight = "standard",
  icon,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const v = inlineAlertVariants[variant] || inlineAlertVariants.normal;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 8,
      padding: "12px 14px",
      borderRadius: 10,
      background: weight === "strong" ? v.strong : v.standard,
      color: v.fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || v.icon,
    weight: "fill",
    size: 16,
    base: iconBase,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: T("body-m2-bold")
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    style: T("body-m2-regular")
  }, children) : null));
}
Object.assign(__ds_scope, { inlineAlertVariants, InlineAlert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/InlineAlert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ActionableInlineAlert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});

/** SEED Actionable Inline Alert — inline alert with a trailing text action. */
function ActionableInlineAlert({
  title,
  children,
  variant = "normal",
  weight = "standard",
  icon,
  actionLabel = "자세히",
  onAction,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const v = __ds_scope.inlineAlertVariants[variant] || __ds_scope.inlineAlertVariants.normal;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "12px 14px",
      borderRadius: 10,
      background: weight === "strong" ? v.strong : v.standard,
      color: v.fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || v.icon,
    weight: "fill",
    size: 16,
    base: iconBase
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: T("body-m2-bold")
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    style: T("body-m2-regular")
  }, children) : null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: "none",
      background: "none",
      padding: 0,
      color: "inherit",
      cursor: "pointer",
      textDecoration: "underline",
      textUnderlineOffset: 4,
      ...T("label3-bold")
    }
  }, actionLabel));
}
Object.assign(__ds_scope, { ActionableInlineAlert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ActionableInlineAlert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/DismissableInlineAlert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});

/** SEED Dismissable Inline Alert — inline alert the user can close. */
function DismissableInlineAlert({
  title,
  children,
  variant = "normal",
  weight = "standard",
  icon,
  onDismiss,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(true);
  const v = __ds_scope.inlineAlertVariants[variant] || __ds_scope.inlineAlertVariants.normal;
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 8,
      padding: "12px 14px",
      borderRadius: 10,
      background: weight === "strong" ? v.strong : v.standard,
      color: v.fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || v.icon,
    weight: "fill",
    size: 16,
    base: iconBase,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: T("body-m2-bold")
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    style: T("body-m2-regular")
  }, children) : null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uB2EB\uAE30",
    onClick: () => {
      setOpen(false);
      onDismiss && onDismiss();
    },
    style: {
      display: "inline-flex",
      padding: 0,
      border: "none",
      background: "none",
      color: "inherit",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 16,
    base: iconBase
  })));
}
Object.assign(__ds_scope, { DismissableInlineAlert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/DismissableInlineAlert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Snackbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const ICONS = {
  success: {
    name: "check",
    color: "var(--seed-semantic-color-success)"
  },
  warning: {
    name: "warning",
    color: "var(--seed-scale-color-red-600)"
  }
};

/** SEED Snackbar — transient feedback bar, full width inside an 8px region. */
function Snackbar({
  children,
  type = "default",
  actionLabel,
  onAction,
  visible = true,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const icon = ICONS[type];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      padding: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      minWidth: 170,
      padding: "10px 16px",
      borderRadius: 10,
      background: "var(--seed-scale-color-gray-900)",
      color: "var(--seed-scale-color-gray-00)",
      opacity: visible ? 1 : 0,
      transform: visible ? "scale(1)" : "scale(0.7)",
      transition: visible ? "transform var(--seed-duration-snackbar-in) var(--seed-scale-timing-function-spring-entrance), opacity var(--seed-duration-snackbar-out) var(--seed-scale-timing-function-spring-entrance)" : "opacity var(--seed-duration-snackbar-out) var(--seed-scale-timing-function-standard-exit)"
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon.name,
    weight: "fill",
    size: 20,
    color: icon.color,
    base: iconBase
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "start",
      ...T("body-l2-regular")
    }
  }, children), actionLabel ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      padding: "3px 4px",
      border: "none",
      background: "none",
      color: "var(--seed-semantic-color-primary)",
      cursor: "pointer",
      ...T("label3-bold")
    }
  }, actionLabel) : null));
}
Object.assign(__ds_scope, { Snackbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Snackbar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  gray: {
    indicator: "var(--seed-scale-color-gray-400)",
    track: "var(--seed-scale-color-gray-alpha-50)"
  },
  white: {
    indicator: "var(--seed-static-color-static-white)",
    track: "var(--seed-static-color-static-white-alpha-200)"
  },
  primary: {
    indicator: "var(--seed-semantic-color-primary)",
    track: "var(--seed-semantic-color-primary-low)"
  }
};

/** SEED Spinner — indeterminate loading indicator, 1200ms rotation. */
function Spinner({
  size = "medium",
  variant = "gray",
  label = "불러오는 중",
  style,
  ...rest
}) {
  const box = size === "small" ? 24 : 40;
  const v = VARIANTS[variant] || VARIANTS.gray;
  const stroke = size === "small" ? 3 : 4;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": label,
    style: {
      display: "inline-flex",
      width: box,
      height: box,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, "@keyframes seed-spin{to{transform:rotate(360deg)}}"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: box,
      height: box,
      borderRadius: "100%",
      border: `${stroke}px solid ${v.track}`,
      borderTopColor: v.indicator,
      animation: "seed-spin 1200ms cubic-bezier(0.35,0.25,0.65,0.75) infinite"
    }
  }));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const SIZES = {
  small: {
    minWidth: 110,
    minHeight: 24,
    control: 18,
    icon: 8,
    bold: "caption1-bold",
    regular: "caption1-regular"
  },
  medium: {
    minWidth: 130,
    minHeight: 28,
    control: 20,
    icon: 9,
    bold: "label3-bold",
    regular: "label3-regular"
  },
  large: {
    minWidth: 160,
    minHeight: 36,
    control: 24,
    icon: 10,
    bold: "label2-bold",
    regular: "label2-regular"
  }
};

/** SEED Checkbox — square, circle or ghost control with an optional label. */
function Checkbox({
  children,
  size = "medium",
  shape = "square",
  isSelected = false,
  isIndeterminate = false,
  isDisabled = false,
  onChange,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.medium;
  const ghost = shape === "ghost";
  const on = isSelected || isIndeterminate;
  let bg = "transparent";
  let outline = ghost ? "none" : "1px solid var(--seed-scale-color-gray-300)";
  let iconColor = "var(--seed-semantic-color-on-primary)";
  if (ghost) {
    bg = active ? on ? "var(--seed-semantic-color-primary-low-hover)" : "var(--seed-semantic-color-gray-hover)" : "transparent";
    iconColor = on ? "var(--seed-semantic-color-primary)" : "var(--seed-scale-color-gray-500)";
    if (isDisabled) iconColor = "var(--seed-scale-color-gray-300)";
  } else if (on) {
    bg = isDisabled ? "var(--seed-scale-color-gray-300)" : active ? "var(--seed-semantic-color-primary-pressed)" : "var(--seed-semantic-color-primary)";
    outline = "1px solid transparent";
    if (isDisabled) iconColor = "var(--seed-scale-color-gray-500)";
  } else {
    bg = isDisabled ? "var(--seed-scale-color-gray-200)" : active ? "var(--seed-semantic-color-gray-hover)" : "transparent";
  }
  return /*#__PURE__*/React.createElement("label", _extends({
    onMouseEnter: () => setActive(true),
    onMouseLeave: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      minWidth: s.minWidth,
      minHeight: s.minHeight,
      cursor: isDisabled ? "default" : "pointer",
      color: isDisabled ? "var(--seed-scale-color-gray-400)" : "var(--seed-scale-color-gray-900)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isSelected,
    disabled: isDisabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      width: s.control,
      height: s.control,
      borderRadius: shape === "circle" ? "100%" : 4,
      background: bg,
      border: outline,
      transition: "background-color var(--seed-duration-color) var(--seed-scale-timing-function-standard-easing) 20ms"
    }
  }, isIndeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.icon + 2,
      height: 2,
      background: iconColor,
      borderRadius: 1
    }
  }) : on || ghost ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    weight: ghost ? "regular" : "fill",
    size: ghost ? s.control : s.icon + 2,
    color: iconColor,
    base: iconBase,
    style: {
      opacity: on || ghost ? 1 : 0,
      transition: "opacity var(--seed-duration-color) var(--seed-scale-timing-function-standard-easing)"
    }
  }) : null), children ? /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "start",
      ...T(s.regular)
    }
  }, children) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/ChipRadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** SEED Chip Radio Group — single-select row of chips, 8px apart. */
function ChipRadioGroup({
  options = [],
  value,
  onChange,
  size = "medium",
  isDisabled = false,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      ...style
    }
  }, rest), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement(__ds_scope.ChipToggleButton, {
      key: opt.value,
      size: size,
      isSelected: value === opt.value,
      isDisabled: isDisabled || opt.isDisabled,
      prefixIcon: opt.prefixIcon,
      suffixIcon: opt.suffixIcon,
      iconBase: iconBase,
      onToggle: () => onChange && onChange(opt.value)
    }, opt.label);
  }));
}
Object.assign(__ds_scope, { ChipRadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ChipRadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/MultilineTextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});

/** SEED Multiline Text Field — textarea with label, description, error message and character count. */
function MultilineTextField({
  label,
  requiredIndicator,
  optionalIndicator,
  value = "",
  onChange,
  placeholder,
  rows = 4,
  description,
  errorMessage,
  maxLength,
  isInvalid = false,
  isDisabled = false,
  isReadOnly = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const invalid = isInvalid || !!errorMessage;
  let bg = "var(--seed-semantic-color-paper-default)";
  let line = "var(--seed-scale-color-gray-400)";
  if (invalid) {
    bg = "var(--seed-semantic-color-danger-low)";
    line = "var(--seed-semantic-color-danger)";
  } else if (focused) line = "var(--seed-scale-color-gray-900)";
  if (isReadOnly) bg = "var(--seed-scale-color-gray-50)";
  if (isDisabled) bg = "var(--seed-scale-color-gray-100)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minWidth: 280,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      marginBottom: 12,
      color: "var(--seed-scale-color-gray-900)",
      ...T("label3-bold")
    }
  }, /*#__PURE__*/React.createElement("span", null, label), requiredIndicator ? /*#__PURE__*/React.createElement("span", {
    style: T("label3-regular")
  }, requiredIndicator) : null, optionalIndicator ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("label3-regular")
    }
  }, optionalIndicator) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "12px 16px",
      background: bg,
      border: `1px solid ${line}`,
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows,
    disabled: isDisabled,
    readOnly: isReadOnly,
    maxLength: maxLength,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      border: "none",
      outline: "none",
      resize: "none",
      background: "transparent",
      color: isDisabled ? "var(--seed-scale-color-gray-400)" : "var(--seed-scale-color-gray-900)",
      caretColor: "var(--seed-scale-color-gray-900)",
      fontFamily: "inherit",
      ...T("body-m1-regular")
    }
  }, rest)), maxLength ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      ...T("caption2-regular")
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: isDisabled ? "var(--seed-scale-color-gray-300)" : focused ? "var(--seed-scale-color-gray-900)" : "var(--seed-scale-color-gray-600)"
    }
  }, value.length), /*#__PURE__*/React.createElement("span", {
    style: {
      color: isDisabled ? "var(--seed-scale-color-gray-300)" : "var(--seed-scale-color-gray-600)"
    }
  }, "/", maxLength)) : null), description || errorMessage ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 8,
      color: errorMessage ? "var(--seed-semantic-color-danger)" : isDisabled ? "var(--seed-scale-color-gray-400)" : "var(--seed-scale-color-gray-600)",
      ...T("label3-regular")
    }
  }, errorMessage || description) : null);
}
Object.assign(__ds_scope, { MultilineTextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/MultilineTextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const SIZES = {
  small: {
    minHeight: 27,
    control: 18,
    icon: 7,
    typo: "caption1-regular"
  },
  medium: {
    minHeight: 30,
    control: 20,
    icon: 8,
    typo: "label3-regular"
  },
  large: {
    minHeight: 36,
    control: 24,
    icon: 10,
    typo: "label2-regular"
  }
};

/** SEED Radio Group — single-select list of radios. */
function RadioGroup({
  options = [],
  value,
  onChange,
  size = "medium",
  name,
  isDisabled = false,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    const selected = value === opt.value;
    const disabled = isDisabled || opt.isDisabled;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        minHeight: s.minHeight,
        cursor: disabled ? "default" : "pointer",
        color: disabled ? "var(--seed-scale-color-gray-400)" : "var(--seed-scale-color-gray-900)",
        ...T(s.typo)
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      checked: selected,
      disabled: disabled,
      onChange: () => onChange && onChange(opt.value),
      style: {
        position: "absolute",
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none",
        width: s.control,
        height: s.control,
        borderRadius: "100%",
        background: selected ? disabled ? "transparent" : "var(--seed-semantic-color-primary)" : disabled ? "var(--seed-scale-color-gray-200)" : "transparent",
        border: selected ? disabled ? "1px solid var(--seed-scale-color-gray-200)" : "1px solid transparent" : "1px solid var(--seed-scale-color-gray-300)",
        transition: "background-color var(--seed-duration-color) var(--seed-scale-timing-function-standard-easing)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: s.icon,
        height: s.icon,
        borderRadius: "100%",
        background: disabled ? "var(--seed-scale-color-gray-200)" : "var(--seed-semantic-color-on-primary)",
        transform: selected ? "scale(1)" : "scale(0)",
        transition: "transform var(--seed-duration-press) var(--seed-scale-timing-function-standard-easing)"
      }
    })), /*#__PURE__*/React.createElement("span", null, opt.label));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});

/**
 * SEED Select Box — a selectable row of label + optional description with a checkbox or radio control.
 * SEED publishes usage/anatomy but no style spec; the container metrics here follow the
 * Callout container (radius 10, 14/16 padding, divider outline). Verify against Figma before production.
 */
function SelectBox({
  label,
  description,
  control = "checkbox",
  isSelected = false,
  isDisabled = false,
  onChange,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  const selected = isSelected && !isDisabled;
  return /*#__PURE__*/React.createElement("label", _extends({
    onClick: () => !isDisabled && onChange && onChange(!isSelected),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 16px",
      borderRadius: 10,
      border: `1px solid ${selected ? "var(--seed-semantic-color-primary)" : "var(--seed-scale-color-gray-300)"}`,
      background: selected ? "var(--seed-semantic-color-primary-low)" : "transparent",
      cursor: isDisabled ? "default" : "pointer",
      transition: "background-color var(--seed-duration-color) var(--seed-scale-timing-function-standard-easing)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: isDisabled ? "var(--seed-scale-color-gray-400)" : "var(--seed-scale-color-gray-900)",
      ...T("label3-bold")
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: isDisabled ? "var(--seed-scale-color-gray-400)" : "var(--seed-scale-color-gray-600)",
      ...T("label4-regular")
    }
  }, description) : null), control === "radio" ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      width: 20,
      height: 20,
      borderRadius: "100%",
      background: selected ? "var(--seed-semantic-color-primary)" : "transparent",
      border: selected ? "1px solid transparent" : "1px solid var(--seed-scale-color-gray-300)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "100%",
      background: "var(--seed-semantic-color-on-primary)",
      transform: selected ? "scale(1)" : "scale(0)",
      transition: "transform var(--seed-duration-press) var(--seed-scale-timing-function-standard-easing)"
    }
  })) : /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    isSelected: selected,
    isDisabled: isDisabled,
    iconBase: iconBase,
    style: {
      minWidth: 0,
      minHeight: 0
    }
  }));
}
Object.assign(__ds_scope, { SelectBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectBox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const sliderShadow = {
  rest: "0 4px 6px 0 rgba(0,0,0,0.15)",
  active: "0 0 0 5px rgba(0,0,0,0.22)"
};

/** SEED Slider — 6px track, 28px handle, optional label / output / markers. */
function Slider({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  label,
  output,
  markers,
  isDisabled = false,
  style,
  ...rest
}) {
  const [dragging, setDragging] = React.useState(false);
  const pct = max === min ? 0 : (value - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      minWidth: 240,
      ...style
    }
  }, rest), label || output != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 8
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-900)",
      ...T("label3-bold")
    }
  }, label) : null, output != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: isDisabled ? "var(--seed-scale-color-gray-400)" : "var(--seed-scale-color-gray-900)",
      ...T("label3-regular")
    }
  }, output) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 28,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 6,
      borderRadius: 9999,
      background: "var(--seed-scale-color-gray-200)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      width: `${pct}%`,
      height: 6,
      borderRadius: 9999,
      background: isDisabled ? "var(--seed-scale-color-gray-400)" : "var(--seed-semantic-color-primary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `calc(${pct}% - 14px)`,
      width: 28,
      height: 28,
      borderRadius: 9999,
      background: "var(--seed-static-color-static-white)",
      boxShadow: dragging && !isDisabled ? sliderShadow.active : sliderShadow.rest,
      transition: "box-shadow 120ms var(--seed-scale-timing-function-standard-entrance)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    value: value,
    min: min,
    max: max,
    step: step,
    disabled: isDisabled,
    onChange: e => onChange && onChange(Number(e.target.value)),
    onPointerDown: () => setDragging(true),
    onPointerUp: () => setDragging(false),
    onBlur: () => setDragging(false),
    style: {
      position: "absolute",
      left: 0,
      width: "100%",
      height: 28,
      margin: 0,
      opacity: 0,
      cursor: isDisabled ? "default" : "pointer"
    }
  })), markers && markers.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 1,
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption2-regular")
    }
  }, markers.map(m => /*#__PURE__*/React.createElement("span", {
    key: String(m)
  }, m))) : null);
}
Object.assign(__ds_scope, { sliderShadow, Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/RangeSlider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});

/** SEED Range Slider — two handles over one track; same metrics as Slider. */
function RangeSlider({
  value = [0, 100],
  min = 0,
  max = 100,
  step = 1,
  onChange,
  label,
  output,
  markers,
  isDisabled = false,
  style,
  ...rest
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(null);
  const span = max - min || 1;
  const pct = v => (v - min) / span * 100;
  const clamp = v => Math.min(max, Math.max(min, Math.round(v / step) * step));
  const move = clientX => {
    const el = trackRef.current;
    if (!el || isDisabled) return;
    const r = el.getBoundingClientRect();
    const raw = clamp(min + (clientX - r.left) / r.width * span);
    const nearLow = Math.abs(raw - value[0]) <= Math.abs(raw - value[1]);
    const idx = dragging != null ? dragging : nearLow ? 0 : 1;
    const next = idx === 0 ? [Math.min(raw, value[1]), value[1]] : [value[0], Math.max(raw, value[0])];
    if (dragging == null) setDragging(idx);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      minWidth: 240,
      ...style
    }
  }, rest), label || output != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 8
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-900)",
      ...T("label3-bold")
    }
  }, label) : null, output != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: isDisabled ? "var(--seed-scale-color-gray-400)" : "var(--seed-scale-color-gray-900)",
      ...T("label3-regular")
    }
  }, output) : null) : null, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onPointerDown: e => {
      e.currentTarget.setPointerCapture(e.pointerId);
      move(e.clientX);
    },
    onPointerMove: e => {
      if (dragging != null) move(e.clientX);
    },
    onPointerUp: () => setDragging(null),
    style: {
      position: "relative",
      height: 28,
      display: "flex",
      alignItems: "center",
      touchAction: "none",
      cursor: isDisabled ? "default" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 6,
      borderRadius: 9999,
      background: "var(--seed-scale-color-gray-200)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `${pct(value[0])}%`,
      width: `${pct(value[1]) - pct(value[0])}%`,
      height: 6,
      borderRadius: 9999,
      background: isDisabled ? "var(--seed-scale-color-gray-400)" : "var(--seed-semantic-color-primary)"
    }
  }), [0, 1].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      left: `calc(${pct(value[i])}% - 14px)`,
      width: 28,
      height: 28,
      borderRadius: 9999,
      background: "var(--seed-static-color-static-white)",
      boxShadow: dragging === i && !isDisabled ? __ds_scope.sliderShadow.active : __ds_scope.sliderShadow.rest,
      transition: "box-shadow 120ms var(--seed-scale-timing-function-standard-entrance)",
      pointerEvents: "none"
    }
  }))), markers && markers.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 1,
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption2-regular")
    }
  }, markers.map(m => /*#__PURE__*/React.createElement("span", {
    key: String(m)
  }, m))) : null);
}
Object.assign(__ds_scope, { RangeSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RangeSlider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** SEED Switch — 52×30 track with a 26px handle. */
function Switch({
  isSelected = false,
  isDisabled = false,
  onChange,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: isDisabled ? "default" : "pointer",
      opacity: isDisabled ? 0.38 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: isSelected,
    disabled: isDisabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      width: 52,
      height: 42,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 52,
      height: 30,
      borderRadius: 9999,
      background: isSelected ? "var(--seed-semantic-color-primary)" : "var(--seed-scale-color-gray-500)",
      transition: "background-color var(--seed-duration-color) var(--seed-scale-timing-function-standard-easing) 20ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: isSelected ? 24 : 2,
      width: 26,
      height: 26,
      borderRadius: 9999,
      background: "var(--seed-semantic-color-on-primary)",
      transition: "left var(--seed-duration-handle) var(--seed-scale-timing-function-standard-easing)"
    }
  }))), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const OUTLINED = {
  small: {
    height: 42,
    px: 12,
    gapSide: 6,
    labelGap: 12,
    typo: "label3-regular",
    desc: "label4-regular"
  },
  medium: {
    height: 52,
    px: 14,
    gapSide: 8,
    labelGap: 12,
    typo: "label2-regular",
    desc: "label3-regular"
  },
  large: {
    height: 54,
    px: 14,
    gapSide: 8,
    labelGap: 12,
    typo: "label1-regular",
    desc: "label3-regular"
  }
};
const UNDERLINED = {
  small: {
    height: 41,
    px: 0,
    gapSide: 8,
    labelGap: 6,
    typo: "label3-regular",
    desc: "label4-regular"
  },
  medium: {
    height: 43,
    px: 0,
    gapSide: 8,
    labelGap: 8,
    typo: "label2-regular",
    desc: "label3-regular"
  },
  large: {
    height: 45,
    px: 0,
    gapSide: 8,
    labelGap: 8,
    typo: "label1-regular",
    desc: "label3-regular"
  }
};

/** SEED Text Field — single-line input with label, indicators, affixes, description and error message. */
function TextField({
  label,
  requiredIndicator,
  optionalIndicator,
  value,
  onChange,
  placeholder,
  size = "medium",
  variant = "outlined",
  prefix,
  suffix,
  description,
  errorMessage,
  maxLength,
  isInvalid = false,
  isDisabled = false,
  isReadOnly = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const s = (variant === "underlined" ? UNDERLINED : OUTLINED)[size] || OUTLINED.medium;
  const invalid = isInvalid || !!errorMessage;
  let fieldBg = "var(--seed-semantic-color-paper-default)";
  let line = "var(--seed-scale-color-gray-400)";
  if (invalid) {
    fieldBg = "var(--seed-semantic-color-danger-low)";
    line = "var(--seed-semantic-color-danger)";
  } else if (focused) line = "var(--seed-scale-color-gray-900)";
  if (isReadOnly) fieldBg = "var(--seed-scale-color-gray-50)";
  if (isDisabled) fieldBg = "var(--seed-scale-color-gray-100)";
  const textColor = isDisabled ? "var(--seed-scale-color-gray-400)" : "var(--seed-scale-color-gray-900)";
  const countColor = isDisabled ? "var(--seed-scale-color-gray-400)" : focused ? "var(--seed-scale-color-gray-900)" : "var(--seed-scale-color-gray-600)";
  const underlined = variant === "underlined";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minWidth: 280,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      marginBottom: s.labelGap,
      color: "var(--seed-scale-color-gray-900)",
      ...T("label3-bold")
    }
  }, /*#__PURE__*/React.createElement("span", null, label), requiredIndicator ? /*#__PURE__*/React.createElement("span", {
    style: T("label3-regular")
  }, requiredIndicator) : null, optionalIndicator ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("label3-regular")
    }
  }, optionalIndicator) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: s.gapSide,
      height: s.height,
      padding: underlined ? 0 : `0 ${s.px}px`,
      background: underlined ? "transparent" : fieldBg,
      borderRadius: underlined ? 0 : 6,
      border: underlined ? "none" : `1px solid ${line}`,
      borderBottom: underlined ? `1px solid ${line}` : undefined,
      color: textColor
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("label3-regular")
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: isDisabled,
    readOnly: isReadOnly,
    maxLength: maxLength,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      color: "inherit",
      caretColor: "var(--seed-scale-color-gray-900)",
      fontFamily: "inherit",
      ...T(s.typo)
    }
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("label3-regular")
    }
  }, suffix) : null), description || errorMessage || maxLength ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: errorMessage ? "var(--seed-semantic-color-danger)" : isDisabled ? "var(--seed-scale-color-gray-400)" : "var(--seed-scale-color-gray-600)",
      ...T(s.desc)
    }
  }, errorMessage || description), maxLength ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...T(s.desc)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: countColor
    }
  }, (value || "").length), /*#__PURE__*/React.createElement("span", {
    style: {
      color: isDisabled ? "var(--seed-scale-color-gray-400)" : "var(--seed-scale-color-gray-600)"
    }
  }, "/", maxLength)) : null) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/overlay/ActionSheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});

/** SEED Action Sheet — a bottom-anchored list of actions over a dimmed backdrop. */
function ActionSheet({
  title,
  description,
  actions = [],
  isOpen = true,
  onClose,
  style,
  ...rest
}) {
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "flex-end",
      background: "var(--seed-semantic-color-overlay-dim)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      padding: "14px 0",
      borderRadius: "20px 20px 0 0",
      background: "var(--seed-semantic-color-paper-sheet)"
    }
  }, title || description ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "0 16px 14px"
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-900)",
      ...T("subtitle2-bold")
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption1-regular")
    }
  }, description) : null) : null, title || description ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 0.5,
      margin: "0 16px",
      background: "var(--seed-semantic-color-divider-2)"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: a.label
  }, i > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 0.5,
      margin: "0 16px",
      background: "var(--seed-semantic-color-divider-2)"
    }
  }) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: a.isDisabled,
    onClick: () => {
      a.onClick && a.onClick();
      onClose && onClose();
    },
    style: {
      padding: "12px 16px",
      border: "none",
      background: "none",
      textAlign: "left",
      cursor: a.isDisabled ? "default" : "pointer",
      color: a.isDisabled ? "var(--seed-scale-color-gray-400)" : a.variant === "destructive" ? "var(--seed-semantic-color-danger)" : "var(--seed-semantic-color-secondary)",
      ...T("label2-regular")
    }
  }, a.label))))));
}
Object.assign(__ds_scope, { ActionSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/ActionSheet.jsx", error: String((e && e.message) || e) }); }

// components/overlay/AlertDialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const ACTION = {
  padding: "0 16px",
  height: 40,
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  flex: 1
};

/** SEED Alert Dialog — a modal that interrupts to confirm or warn. Max width 272. */
function AlertDialog({
  title,
  description,
  primaryActionLabel = "확인",
  onPrimaryAction,
  secondaryActionLabel,
  onSecondaryAction,
  secondaryActionIntent = "neutral",
  isOpen = true,
  onClose,
  style,
  ...rest
}) {
  if (!isOpen) return null;
  const column = secondaryActionIntent === "nonpreferred";
  const secondaryStyle = secondaryActionIntent === "alternative" ? {
    background: "var(--seed-semantic-color-primary-low)",
    color: "var(--seed-semantic-color-primary)"
  } : secondaryActionIntent === "neutral" ? {
    background: "var(--seed-semantic-color-secondary-low)",
    color: "var(--seed-scale-color-gray-900)"
  } : {
    background: "transparent",
    color: "var(--seed-scale-color-gray-700)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--seed-semantic-color-overlay-dim)",
      ...style
    },
    onClick: onClose
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "alertdialog",
    onClick: e => e.stopPropagation(),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      width: "100%",
      maxWidth: 272,
      borderRadius: 16,
      background: "var(--seed-semantic-color-paper-dialog)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "20px 20px 0"
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-900)",
      ...T("title3-bold")
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-900)",
      ...T("subtitle1-regular")
    }
  }, description) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: column ? "column-reverse" : "row",
      gap: 8,
      padding: "0 16px 20px"
    }
  }, secondaryActionLabel ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSecondaryAction,
    style: {
      ...ACTION,
      ...secondaryStyle,
      ...T("label3-bold")
    }
  }, secondaryActionLabel) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onPrimaryAction,
    style: {
      ...ACTION,
      background: "var(--seed-semantic-color-primary)",
      color: "var(--seed-semantic-color-on-primary)",
      ...T("label3-bold")
    }
  }, primaryActionLabel))));
}
Object.assign(__ds_scope, { AlertDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/AlertDialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/BottomSheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});

/** SEED Bottom Sheet — a bottom-anchored panel holding content and an optional action. */
function BottomSheet({
  title,
  description,
  children,
  headerAlign = "start",
  showCloseButton = true,
  actionSlot,
  isOpen = true,
  onClose,
  iconBase = "assets/svg",
  style,
  ...rest
}) {
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "flex-end",
      background: "var(--seed-semantic-color-overlay-dim)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    onClick: e => e.stopPropagation(),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      width: "100%",
      maxHeight: 375,
      padding: 16,
      borderRadius: "20px 20px 0 0",
      background: "var(--seed-semantic-color-paper-default)",
      color: "var(--seed-scale-color-gray-900)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      textAlign: headerAlign === "center" ? "center" : "start"
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: T("label3-bold")
  }, title) : null, description ? /*#__PURE__*/React.createElement("span", {
    style: T("label3-regular")
  }, description) : null), showCloseButton ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uB2EB\uAE30",
    onClick: onClose,
    style: {
      display: "inline-flex",
      padding: 0,
      border: "none",
      background: "none",
      color: "inherit",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 24,
    base: iconBase
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, children), actionSlot ? /*#__PURE__*/React.createElement("div", null, actionSlot) : null));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/karrot-app/AppChrome.jsx
try { (() => {
const {
  Icon
} = window.SEEDDesignSystemKarrot_269f41;
const B = "../../assets/svg";
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});

/* Placeholder for user-generated photography. Karrot listing images are user uploads;
   no real imagery ships with SEED, so screens show neutral placeholders. */
function Photo({
  w = "100%",
  h = 100,
  radius = 6,
  icon = "photo",
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: w,
      height: h,
      borderRadius: radius,
      background: "var(--seed-scale-color-gray-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: Math.min(28, h / 3),
    color: "var(--seed-scale-color-gray-400)",
    base: B
  }), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 6,
      left: 8,
      color: "var(--seed-scale-color-gray-500)",
      ...T("label6-regular")
    }
  }, label) : null);
}
function TopBar({
  title,
  subtitle,
  onBack,
  right = [],
  showChevron
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      height: 48,
      padding: "0 8px 0 12px",
      background: "var(--seed-semantic-color-paper-default)",
      flex: "none"
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uB4A4\uB85C",
    onClick: onBack,
    style: {
      display: "inline-flex",
      padding: 6,
      border: "none",
      background: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_left",
    size: 24,
    color: "var(--seed-scale-color-gray-900)",
    base: B
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-900)",
      ...T("title3-bold")
    }
  }, title), showChevron ? /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_drop_down",
    weight: "fill",
    size: 20,
    color: "var(--seed-scale-color-gray-900)",
    base: B
  }) : null, subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption1-regular")
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, right.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.icon,
    type: "button",
    "aria-label": r.label,
    onClick: r.onClick,
    style: {
      display: "inline-flex",
      padding: 6,
      border: "none",
      background: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 22,
    color: "var(--seed-scale-color-gray-900)",
    base: B
  })))));
}
const NAV = [{
  key: "home",
  label: "홈",
  icon: "home"
}, {
  key: "life",
  label: "동네생활",
  icon: "location"
}, {
  key: "chat",
  label: "채팅",
  icon: "chatting"
}, {
  key: "my",
  label: "나의 당근",
  icon: "profile"
}];
function BottomNav({
  value,
  onChange,
  badge
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: "none",
      borderTop: "1px solid var(--seed-semantic-color-divider-2)",
      background: "var(--seed-semantic-color-paper-default)"
    }
  }, NAV.map(n => {
    const on = n.key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: n.key,
      type: "button",
      onClick: () => onChange(n.key),
      style: {
        position: "relative",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        padding: "7px 0 9px",
        border: "none",
        background: "none",
        cursor: "pointer",
        color: on ? "var(--seed-scale-color-gray-900)" : "var(--seed-scale-color-gray-500)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      weight: on ? "fill" : "regular",
      size: 24,
      base: B
    }), /*#__PURE__*/React.createElement("span", {
      style: T("label6-bold")
    }, n.label), badge && n.key === "chat" ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 4,
        left: "calc(50% + 6px)",
        minWidth: 16,
        height: 16,
        padding: "0 4px",
        borderRadius: 9999,
        background: "var(--seed-semantic-color-primary)",
        color: "var(--seed-semantic-color-on-primary)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...T("label6-bold")
      }
    }, badge) : null);
  }));
}
function Divider({
  inset = 0,
  thick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: thick ? 8 : 1,
      margin: thick ? 0 : `0 ${inset}px`,
      background: thick ? "var(--seed-semantic-color-paper-background)" : "var(--seed-semantic-color-divider-2)",
      flex: "none"
    }
  });
}
function Row({
  label,
  value,
  onClick,
  icon
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      padding: "14px 16px",
      border: "none",
      background: "none",
      cursor: "pointer",
      textAlign: "left"
    }
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: "var(--seed-scale-color-gray-700)",
    base: B
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "var(--seed-scale-color-gray-900)",
      ...T("label2-regular")
    }
  }, label), value ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("label3-regular")
    }
  }, value) : null, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 16,
    color: "var(--seed-scale-color-gray-500)",
    base: B
  }));
}
Object.assign(window, {
  KarrotT: T,
  Photo,
  TopBar,
  BottomNav,
  Divider,
  Row,
  ICON_BASE: B,
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/karrot-app/AppChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/karrot-app/ChatScreen.jsx
try { (() => {
const {
  Avatar,
  AvatarGroup,
  TextField,
  Snackbar
} = window.SEEDDesignSystemKarrot_269f41;
const T = window.KarrotT;
const B = window.ICON_BASE;
const ROOMS = [{
  id: 1,
  name: "이웃 상점",
  town: "역삼동",
  last: "네, 저녁 7시에 뵐게요!",
  time: "3분 전",
  unread: 2,
  item: "책상 의자"
}, {
  id: 2,
  name: "당근이",
  town: "논현동",
  last: "자전거 아직 있나요?",
  time: "1시간 전",
  unread: 0,
  item: "아이 자전거"
}, {
  id: 3,
  name: "모니터맨",
  town: "삼성동",
  last: "가격 조정 가능할까요?",
  time: "어제",
  unread: 0,
  item: "삼성 모니터"
}];
function ChatListScreen({
  onOpenRoom
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "\uCC44\uD305",
    right: [{
      icon: "setting",
      label: "설정"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, ROOMS.map((r, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: r.id
  }, i > 0 ? /*#__PURE__*/React.createElement(Divider, {
    inset: 16
  }) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onOpenRoom(r),
    style: {
      display: "flex",
      gap: 12,
      width: "100%",
      padding: 16,
      border: "none",
      background: "none",
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: "medium",
    iconBase: B
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-900)",
      ...T("label3-bold")
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption2-regular")
    }
  }, r.town, " \xB7 ", r.time)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-700)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      ...T("body-m2-regular")
    }
  }, r.last)), r.unread ? /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: "center",
      minWidth: 20,
      height: 20,
      padding: "0 6px",
      borderRadius: 9999,
      background: "var(--seed-semantic-color-primary)",
      color: "var(--seed-semantic-color-on-primary)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...T("label6-bold")
    }
  }, r.unread) : null, /*#__PURE__*/React.createElement(Photo, {
    w: 44,
    h: 44,
    radius: 4
  })))), /*#__PURE__*/React.createElement(Divider, {
    thick: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(AvatarGroup, {
    size: "xsmall",
    items: [1, 2, 3, 4, 5],
    iconBase: B
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption1-regular")
    }
  }, "\uC774\uC6C3 5\uBA85\uC774 \uC774 \uBB3C\uAC74\uC744 \uBCF4\uACE0 \uC788\uC5B4\uC694"))));
}
function ChatRoomScreen({
  room,
  onBack,
  onMore
}) {
  const [draft, setDraft] = React.useState("");
  const [msgs, setMsgs] = React.useState([{
    me: false,
    text: "안녕하세요! 의자 아직 있나요?"
  }, {
    me: true,
    text: "네, 있어요. 오늘 저녁에 보실 수 있어요?"
  }, {
    me: false,
    text: "네, 저녁 7시에 뵐게요!"
  }]);
  const [sent, setSent] = React.useState(false);
  const send = () => {
    if (!draft.trim()) return;
    setMsgs(m => m.concat({
      me: true,
      text: draft
    }));
    setDraft("");
    setSent(true);
    window.setTimeout(() => setSent(false), 2200);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: room.name,
    subtitle: room.town,
    onBack: onBack,
    right: [{
      icon: "more_vert",
      label: "더보기",
      onClick: onMore
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 16px",
      background: "var(--seed-semantic-color-paper-contents)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    w: 40,
    h: 40,
    radius: 4
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--seed-scale-color-gray-900)",
      ...T("caption1-bold")
    }
  }, room.item), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption2-regular")
    }
  }, "35,000\uC6D0")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 16,
    color: "var(--seed-scale-color-gray-500)",
    base: B
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: m.me ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      maxWidth: "72%",
      padding: "8px 12px",
      borderRadius: 14,
      background: m.me ? "var(--seed-semantic-color-primary)" : "var(--seed-scale-color-gray-100)",
      color: m.me ? "var(--seed-semantic-color-on-primary)" : "var(--seed-scale-color-gray-900)",
      ...T("body-m2-regular")
    }
  }, m.text)))), sent ? /*#__PURE__*/React.createElement(Snackbar, {
    type: "success",
    iconBase: B
  }, "\uBA54\uC2DC\uC9C0\uB97C \uBCF4\uB0C8\uC5B4\uC694.") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: 12,
      borderTop: "1px solid var(--seed-semantic-color-divider-2)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "add",
    size: 24,
    color: "var(--seed-scale-color-gray-700)",
    base: B
  }), /*#__PURE__*/React.createElement(TextField, {
    size: "small",
    placeholder: "\uBA54\uC2DC\uC9C0 \uBCF4\uB0B4\uAE30",
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter") send();
    },
    style: {
      flex: 1,
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uBCF4\uB0B4\uAE30",
    onClick: send,
    style: {
      display: "inline-flex",
      padding: 4,
      border: "none",
      background: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chatting_send",
    weight: "fill",
    size: 24,
    color: draft.trim() ? "var(--seed-semantic-color-primary)" : "var(--seed-scale-color-gray-400)",
    base: B
  }))));
}
Object.assign(window, {
  ChatListScreen,
  ChatRoomScreen,
  CHAT_ROOMS: ROOMS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/karrot-app/ChatScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/karrot-app/HomeScreen.jsx
try { (() => {
const {
  Tabs,
  ChipRadioGroup,
  ChipButton,
  MenuFloatingActionButton,
  Callout
} = window.SEEDDesignSystemKarrot_269f41;
const T = window.KarrotT;
const B = window.ICON_BASE;
const ITEMS = [{
  id: 1,
  title: "책상 의자 (거의 새것)",
  price: "35,000원",
  town: "역삼동",
  time: "3분 전",
  chats: 2,
  likes: 12
}, {
  id: 2,
  title: "아이 자전거 나눔해요",
  price: "나눔",
  town: "논현동",
  time: "12분 전",
  chats: 5,
  likes: 31
}, {
  id: 3,
  title: "삼성 모니터 27인치",
  price: "120,000원",
  town: "삼성동",
  time: "1시간 전",
  chats: 1,
  likes: 4
}, {
  id: 4,
  title: "라탄 바구니 세트",
  price: "8,000원",
  town: "대치동",
  time: "2시간 전",
  chats: 0,
  likes: 2
}, {
  id: 5,
  title: "캠핑 의자 2개",
  price: "40,000원",
  town: "청담동",
  time: "어제",
  chats: 3,
  likes: 9
}];
function ItemRow({
  item,
  onOpen
}) {
  const [pressed, setPressed] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onOpen(item),
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    style: {
      display: "flex",
      gap: 12,
      width: "100%",
      padding: 16,
      border: "none",
      background: pressed ? "var(--seed-semantic-color-gray-pressed)" : "none",
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    w: 100,
    h: 100,
    radius: 6
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-900)",
      ...T("body-m2-regular")
    }
  }, item.title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption2-regular")
    }
  }, item.town, " \xB7 ", item.time), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 2,
      color: "var(--seed-scale-color-gray-900)",
      ...T("label2-bold")
    }
  }, item.price), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "auto",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: 8,
      color: "var(--seed-scale-color-gray-600)",
      ...T("label5-regular")
    }
  }, item.chats ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chatting",
    size: 12,
    color: "var(--seed-scale-color-gray-600)",
    base: B
  }), item.chats) : null, item.likes ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 12,
    color: "var(--seed-scale-color-gray-600)",
    base: B
  }), item.likes) : null)));
}
function HomeScreen({
  onOpenItem,
  onChangeTown,
  onNotice
}) {
  const [tab, setTab] = React.useState("buy");
  const [scope, setScope] = React.useState("전체");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "\uC5ED\uC0BC\uB3D9",
    showChevron: true,
    right: [{
      icon: "search",
      label: "검색"
    }, {
      icon: "menu",
      label: "카테고리"
    }, {
      icon: "notification",
      label: "알림",
      onClick: onNotice
    }]
  }), /*#__PURE__*/React.createElement("div", {
    onClick: onChangeTown,
    style: {
      position: "absolute",
      top: 8,
      left: 8,
      width: 96,
      height: 32
    }
  }), /*#__PURE__*/React.createElement(Tabs, {
    layout: "fill",
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "buy",
      label: "중고거래"
    }, {
      value: "life",
      label: "동네생활",
      dot: true
    }, {
      value: "biz",
      label: "동네업체"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "12px 16px",
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement(ChipRadioGroup, {
    value: scope,
    onChange: setScope,
    options: ["전체", "나눔", "배송비 포함"],
    iconBase: B
  }), /*#__PURE__*/React.createElement(ChipButton, {
    size: "medium",
    prefixIcon: "sort",
    iconBase: B
  }, "\uCD5C\uC2E0\uC21C")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 12px"
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    variant: "normal",
    icon: "info",
    iconBase: B
  }, "\uAC70\uB798 \uC804 \uC548\uC804\uAC70\uB798 \uC548\uB0B4\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.")), ITEMS.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.id
  }, i > 0 ? /*#__PURE__*/React.createElement(Divider, {
    inset: 16
  }) : null, /*#__PURE__*/React.createElement(ItemRow, {
    item: it,
    onOpen: onOpenItem
  })))), /*#__PURE__*/React.createElement(MenuFloatingActionButton, {
    label: "\uAE00\uC4F0\uAE30",
    iconBase: B,
    items: [{
      label: "중고거래",
      icon: "market"
    }, {
      label: "동네생활",
      icon: "write"
    }, {
      label: "동네홍보",
      icon: "coupon"
    }],
    primaryItem: {
      label: "내 물건 판매하기",
      icon: "market_write"
    },
    style: {
      bottom: 0
    }
  }));
}
Object.assign(window, {
  HomeScreen,
  HOME_ITEMS: ITEMS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/karrot-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/karrot-app/ItemDetailScreen.jsx
try { (() => {
const {
  Avatar,
  BoxButton,
  Callout,
  CapsuleToggleButton,
  TextButton
} = window.SEEDDesignSystemKarrot_269f41;
const T = window.KarrotT;
const B = window.ICON_BASE;
function ItemDetailScreen({
  item,
  onBack,
  onMore,
  onChat,
  liked,
  onLike
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "",
    onBack: onBack,
    right: [{
      icon: "more_vert",
      label: "더보기",
      onClick: onMore
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    w: "100%",
    h: 260,
    radius: 0,
    label: "\uD310\uB9E4\uC790\uAC00 \uC62C\uB9B0 \uC0AC\uC9C4"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: "medium",
    badgeIcon: "check_flower",
    iconBase: B
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--seed-scale-color-gray-900)",
      ...T("label2-bold")
    }
  }, "\uC774\uC6C3 \uC0C1\uC810"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption1-regular")
    }
  }, item.town)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--seed-semantic-color-primary)",
      ...T("label2-bold")
    }
  }, "\uB9E4\uB108\uC628\uB3C4 42.9\xB0C"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("label6-regular")
    }
  }, "\uC7AC\uAC70\uB798\uD76C\uB9DD\uB960 100%"))), /*#__PURE__*/React.createElement(Divider, {
    thick: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--seed-scale-color-gray-900)",
      ...T("title3-bold")
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption1-regular")
    }
  }, "\uAC00\uAD6C \xB7 ", item.time), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--seed-scale-color-gray-900)",
      ...T("title2-bold")
    }
  }, item.price), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      color: "var(--seed-scale-color-gray-900)",
      ...T("body-l1-regular")
    }
  }, "1\uB144 \uC815\uB3C4 \uC0AC\uC6A9\uD588\uACE0 \uD760\uC9D1 \uC5C6\uC774 \uAE68\uB057\uD574\uC694. \uC9C1\uC811 \uBCF4\uACE0 \uAC00\uC838\uAC00\uC2DC\uBA74 \uC88B\uACA0\uC5B4\uC694. \uC2DC\uAC04\uC740 \uC800\uB141\uC5D0 \uB9DE\uCD9C \uC218 \uC788\uC5B4\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption1-regular")
    }
  }, "\uAD00\uC2EC ", item.likes, " \xB7 \uCC44\uD305 ", item.chats, " \xB7 \uC870\uD68C 128"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(CapsuleToggleButton, {
    icon: "heart",
    isSelected: liked,
    onToggle: onLike,
    iconBase: B
  }, "\uAD00\uC2EC"), /*#__PURE__*/React.createElement(CapsuleToggleButton, {
    size: "small",
    icon: "location",
    iconBase: B
  }, "\uAC70\uB798 \uC7A5\uC18C"))), /*#__PURE__*/React.createElement(Divider, {
    thick: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    variant: "warning",
    icon: "warning",
    title: "\uC548\uC804 \uAC70\uB798 \uC548\uB0B4",
    iconBase: B
  }, "\uC1A1\uAE08\uC744 \uC694\uAD6C\uD558\uAC70\uB098 \uC678\uBD80 \uB9C1\uD06C\uB85C \uC720\uB3C4\uD558\uBA74 \uC0AC\uAE30\uC77C \uC218 \uC788\uC5B4\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-900)",
      ...T("label2-bold")
    }
  }, "\uC774\uC6C3 \uC0C1\uC810\uC758 \uB2E4\uB978 \uBB3C\uAC74"), /*#__PURE__*/React.createElement(TextButton, {
    variant: "secondary-low",
    size: "small",
    suffixIcon: "chevron_right",
    iconBase: B
  }, "\uC804\uCCB4\uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    w: 104,
    h: 104
  }), /*#__PURE__*/React.createElement(Photo, {
    w: 104,
    h: 104
  }), /*#__PURE__*/React.createElement(Photo, {
    w: 104,
    h: 104
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 12,
      borderTop: "1px solid var(--seed-semantic-color-divider-2)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uAD00\uC2EC",
    onClick: () => onLike(!liked),
    style: {
      display: "inline-flex",
      padding: 4,
      border: "none",
      background: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    weight: liked ? "fill" : "regular",
    size: 24,
    color: liked ? "var(--seed-semantic-color-primary)" : "var(--seed-scale-color-gray-700)",
    base: B
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 28,
      background: "var(--seed-semantic-color-divider-2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: "var(--seed-scale-color-gray-900)",
      ...T("label2-bold")
    }
  }, item.price), /*#__PURE__*/React.createElement(BoxButton, {
    size: "medium",
    variant: "primary",
    onClick: onChat,
    iconBase: B
  }, "\uCC44\uD305\uD558\uAE30")));
}
window.ItemDetailScreen = ItemDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/karrot-app/ItemDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/karrot-app/MyScreen.jsx
try { (() => {
const {
  Avatar,
  TextButton,
  Switch,
  ActionableCallout,
  DismissableCallout,
  Spinner,
  HelpBubble
} = window.SEEDDesignSystemKarrot_269f41;
const T = window.KarrotT;
const B = window.ICON_BASE;
function MyScreen({
  onVerify,
  onTown
}) {
  const [alarm, setAlarm] = React.useState(true);
  const [nearby, setNearby] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "\uB098\uC758 \uB2F9\uADFC",
    right: [{
      icon: "setting",
      label: "설정"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: "xlarge",
    iconBase: B
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--seed-scale-color-gray-900)",
      ...T("title3-bold")
    }
  }, "\uB2F9\uADFC\uC774"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption1-regular")
    }
  }, "\uC5ED\uC0BC\uB3D9 \xB7 \uB9E4\uB108\uC628\uB3C4 42.9\xB0C"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(TextButton, {
    variant: "secondary-low",
    size: "small",
    suffixIcon: "chevron_right",
    iconBase: B
  }, "\uD504\uB85C\uD544 \uC218\uC815")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ActionableCallout, {
    variant: "info",
    title: "\uBCF8\uC778\uC778\uC99D\uC774 \uD544\uC694\uD574\uC694",
    onClick: onVerify,
    iconBase: B
  }, "\uC778\uC99D\uD558\uBA74 \uB354 \uC548\uC804\uD558\uAC8C \uAC70\uB798\uD560 \uC218 \uC788\uC5B4\uC694."), /*#__PURE__*/React.createElement(DismissableCallout, {
    variant: "normal",
    title: "\uB2F9\uADFC\uD398\uC774\uAC00 \uC0C8\uB85C\uC6CC\uC84C\uC5B4\uC694",
    iconBase: B
  }, "\uACB0\uC81C \uB0B4\uC5ED\uC744 \uD55C\uB208\uC5D0 \uBCFC \uC218 \uC788\uC5B4\uC694.")), /*#__PURE__*/React.createElement(Divider, {
    thick: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px",
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption1-bold")
    }
  }, "\uB098\uC758 \uAC70\uB798"), /*#__PURE__*/React.createElement(Row, {
    label: "\uAD00\uC2EC \uBAA9\uB85D",
    value: "12",
    icon: "heart"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "\uD310\uB9E4 \uB0B4\uC5ED",
    value: "3",
    icon: "market"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "\uAD6C\uB9E4 \uB0B4\uC5ED",
    icon: "payment"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "\uB2F9\uADFC\uD398\uC774",
    value: "12,400\uC6D0",
    icon: "money_won"
  })), /*#__PURE__*/React.createElement(Divider, {
    thick: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px",
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption1-bold")
    }
  }, "\uC124\uC815"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onTown,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      padding: "14px 16px",
      border: "none",
      background: "none",
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "location",
    size: 20,
    color: "var(--seed-scale-color-gray-700)",
    base: B
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "var(--seed-scale-color-gray-900)",
      ...T("label2-regular")
    }
  }, "\uB0B4 \uB3D9\uB124 \uC124\uC815"), /*#__PURE__*/React.createElement(HelpBubble, {
    message: "\uC5EC\uAE30\uC11C \uB3D9\uB124\uB97C \uBC14\uAFC0 \uC218 \uC788\uC5B4\uC694",
    placement: "top",
    showCloseTrigger: true,
    iconBase: B
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--seed-scale-color-gray-600)",
      ...T("label3-regular")
    }
  }, "\uC5ED\uC0BC\uB3D9")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 16,
    color: "var(--seed-scale-color-gray-500)",
    base: B
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 16px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "notification",
    size: 20,
    color: "var(--seed-scale-color-gray-700)",
    base: B
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "var(--seed-scale-color-gray-900)",
      ...T("label2-regular")
    }
  }, "\uD0A4\uC6CC\uB4DC \uC54C\uB9BC"), /*#__PURE__*/React.createElement(Switch, {
    isSelected: alarm,
    onChange: setAlarm
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 16px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map",
    size: 20,
    color: "var(--seed-scale-color-gray-700)",
    base: B
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "var(--seed-scale-color-gray-900)",
      ...T("label2-regular")
    }
  }, "\uB0B4 \uC704\uCE58 \uACF5\uAC1C"), /*#__PURE__*/React.createElement(Switch, {
    isSelected: nearby,
    onChange: setNearby
  }))), /*#__PURE__*/React.createElement(Divider, {
    thick: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: 20,
      color: "var(--seed-scale-color-gray-600)",
      ...T("caption1-regular")
    }
  }, /*#__PURE__*/React.createElement(Spinner, {
    size: "small"
  }), " \uCD5C\uADFC \uD65C\uB3D9\uC744 \uBD88\uB7EC\uC624\uB294 \uC911")));
}
window.MyScreen = MyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/karrot-app/MyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/seed-docs/DocPage.jsx
try { (() => {
const {
  BoxButton,
  Tabs
} = window.SEEDDesignSystemKarrot_269f41;
const B = window.DOCS_ICON_BASE;
const TABLE = {
  Usage: [["size", "xsmall, small, medium, large, xlarge", "medium"], ["variant", "primary, primary-low, secondary, danger", "primary"], ["is disabled", "true, false", "false"], ["prefix icon", "Icon", ""], ["suffix icon", "Icon", ""]],
  Style: [["Root · Min Width", "58pt", ""], ["Root · Height", "40pt", ""], ["Root · Horizontal Padding", "16pt", ""], ["Root · Corner Radius", "6pt", ""], ["Label · Typography", "$semantic.typography.label3-bold", ""], ["Prefix Icon · Size", "16pt", ""]]
};
function DocsComponentPage({
  name = "Box Button"
}) {
  const [tab, setTab] = React.useState("Usage");
  const rows = TABLE[tab];
  return /*#__PURE__*/React.createElement("article", {
    style: {
      width: "100%",
      maxWidth: 900,
      margin: "80px auto",
      padding: "0 20px",
      lineHeight: 1.7,
      letterSpacing: "-0.04px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "seed-semantic-typography-h1",
    style: {
      margin: 0,
      fontSize: 66,
      fontWeight: 700
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      marginTop: 10,
      color: "var(--seed-scale-color-gray-600)"
    }
  }, "\uC720\uC800\uAC00 \uD654\uBA74\uC5D0\uC11C \uC561\uC158\uC744 \uC2E4\uD589\uD560 \uC218 \uC788\uAC8C \uD558\uB294 \uAC00\uC7A5 \uAE30\uBCF8\uC801\uC778 \uBC84\uD2BC\uC774\uC5D0\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    layout: "hug",
    value: tab,
    onChange: setTab,
    tabs: ["Usage", "Style"],
    style: {
      marginLeft: -16
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 34,
      fontWeight: 700,
      marginTop: 60,
      marginBottom: 20
    }
  }, "\uCEF4\uD3EC\uB10C\uD2B8 \uBBF8\uB9AC\uBCF4\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 40,
      borderRadius: 8,
      border: "1px solid var(--seed-scale-color-gray-300)",
      background: "var(--seed-semantic-color-on-primary)"
    }
  }, /*#__PURE__*/React.createElement(BoxButton, {
    variant: "primary",
    iconBase: B
  }, "\uD655\uC778"), /*#__PURE__*/React.createElement(BoxButton, {
    variant: "primary-low",
    iconBase: B
  }, "\uAD00\uC2EC \uB4F1\uB85D"), /*#__PURE__*/React.createElement(BoxButton, {
    variant: "secondary",
    iconBase: B
  }, "\uCDE8\uC18C"), /*#__PURE__*/React.createElement(BoxButton, {
    variant: "danger",
    iconBase: B
  }, "\uC0AD\uC81C"), /*#__PURE__*/React.createElement(BoxButton, {
    isDisabled: true,
    iconBase: B
  }, "\uD655\uC778")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 34,
      fontWeight: 700,
      marginTop: 60,
      marginBottom: 20
    }
  }, tab === "Usage" ? "옵션 테이블" : "디자인 결정 (Layout, size=medium)"), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--seed-semantic-color-paper-contents)"
    }
  }, (tab === "Usage" ? ["속성", "값", "기본값"] : ["Part / Attribute", "Value", ""]).map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: "left",
      padding: "12px 16px",
      borderBottom: "1px solid var(--seed-scale-color-gray-300)",
      fontWeight: 700
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, r.map((c, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    style: {
      padding: "12px 16px",
      borderBottom: "1px solid var(--seed-semantic-color-divider-2)",
      color: i === 0 ? "var(--seed-scale-color-gray-900)" : "var(--seed-scale-color-gray-700)"
    }
  }, c)))))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 34,
      fontWeight: 700,
      marginTop: 60,
      marginBottom: 20
    }
  }, "\uAC00\uC774\uB4DC\uB77C\uC778"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 30
    }
  }, [["Do", "Label을 명확하고 간결하게 작성합니다.", "var(--seed-scale-color-green-500)"], ["Don't", "불필요한 이모지나 서술형 문장을 사용하지 않습니다.", "var(--seed-scale-color-red-600)"]].map(([k, t, c]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      borderRadius: 8,
      border: "1px solid var(--seed-scale-color-gray-300)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(BoxButton, {
    variant: k === "Do" ? "primary" : "secondary",
    iconBase: B
  }, k === "Do" ? "판매하기" : "판매를 시작해볼까요? 🥕")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontWeight: 700,
      color: c
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "var(--seed-scale-color-gray-700)"
    }
  }, t)))));
}
window.DocsComponentPage = DocsComponentPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/seed-docs/DocPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/seed-docs/DocsChrome.jsx
try { (() => {
/* Chrome for the SEED Design docs site.
   Values lifted from docs/src/components/Header.css.ts, sidebar/*.css.ts, styles/token.css.ts. */
const T = n => ({
  fontSize: `var(--seed-semantic-typography-${n}-font-size)`,
  fontWeight: `var(--seed-semantic-typography-${n}-font-weight)`,
  lineHeight: `var(--seed-semantic-typography-${n}-line-height)`,
  letterSpacing: `var(--seed-semantic-typography-${n}-letter-spacing)`
});
const {
  Icon
} = window.SEEDDesignSystemKarrot_269f41;
const DB = "../../assets/svg";
function DocsHeader({
  onHome
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 5,
      height: 80,
      background: "var(--seed-semantic-color-paper-default)",
      boxShadow: "0 2px 4px 0 rgba(0,0,0,0.03)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100%",
      maxWidth: 1400,
      margin: "auto",
      padding: "0 15px 0 20px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: onHome,
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/seed-logo-black.svg",
    alt: "SEED Design",
    style: {
      height: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: 135,
      height: 36,
      padding: 6,
      borderRadius: 6,
      background: "var(--seed-semantic-color-paper-default)",
      border: "1px solid var(--seed-scale-color-gray-300)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: "var(--seed-scale-color-gray-800)",
    base: DB
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 32,
      fontSize: 14,
      color: "var(--seed-scale-color-gray-800)"
    }
  }, "\uAC80\uC0C9"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 6,
      display: "flex",
      gap: 4,
      padding: "2px 6px 2px 4px",
      borderRadius: 4,
      fontSize: 12,
      color: "var(--seed-scale-color-gray-500)",
      background: "var(--seed-scale-color-gray-50)"
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement(Icon, {
    name: "setting",
    size: 26,
    color: "var(--seed-scale-color-gray-800)",
    base: DB
  }))));
}
const SIDEBAR = [{
  title: "Overview",
  items: ["Introduction", "Get started", "Principle", "Progress board"]
}, {
  title: "Foundation",
  items: ["Color", "Typography", "Icon"]
}, {
  title: "Component",
  items: ["Box Button", "Text Button", "Chip Button", "Text Field", "Checkbox", "Snackbar", "Callout", "Tabs"]
}, {
  title: "Primitive",
  items: ["Button", "Checkbox", "Dialog", "Tabs"]
}];
function DocsSidebar({
  current,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: "none",
      width: 260,
      padding: "40px 0 80px"
    }
  }, SIDEBAR.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.title,
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 8px",
      color: "var(--seed-scale-color-gray-900)",
      ...T("label3-bold")
    }
  }, g.title), g.items.map(it => {
    const on = it === current;
    return /*#__PURE__*/React.createElement("a", {
      key: it,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onSelect(it);
      },
      style: {
        display: "block",
        padding: "8px 20px",
        fontSize: 14,
        fontWeight: on ? 700 : 500,
        color: on ? "var(--seed-semantic-color-primary)" : "var(--seed-scale-color-gray-600)",
        background: on ? "var(--seed-semantic-color-primary-low)" : "transparent",
        transition: "background 0.2s ease"
      }
    }, it);
  }))));
}
Object.assign(window, {
  DocsT: T,
  DocsHeader,
  DocsSidebar,
  DOCS_ICON_BASE: DB,
  DocsIcon: Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/seed-docs/DocsChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/seed-docs/MainPage.jsx
try { (() => {
const T = window.DocsT;
function DocsMainPage({
  onGo
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      marginTop: 100,
      marginBottom: 120
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 64,
      fontWeight: 900,
      lineHeight: 1.35
    }
  }, "SEED Design"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 0",
      textAlign: "center",
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.5,
      color: "var(--seed-semantic-color-ink-text)"
    }
  }, "SEED\uB294 \uBA54\uC774\uCEE4\uB4E4\uC774 \uD6A8\uC728\uC801\uC73C\uB85C \uC81C\uD488\uC744 \uB9CC\uB4E4 \uC218 \uC788\uB3C4\uB85D", /*#__PURE__*/React.createElement("br", null), "\uD544\uC694\uD55C \uB3C4\uAD6C\uC640 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), "SEED\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC758 Usage \uAC00\uC774\uB4DC,", /*#__PURE__*/React.createElement("br", null), "Spec \uAC00\uC774\uB4DC\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onGo,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      columnGap: 10,
      marginTop: 40,
      padding: "14px 22px",
      fontSize: 18,
      fontWeight: "bold",
      border: "2px solid var(--seed-scale-color-gray-900)",
      borderRadius: 50,
      background: hover ? "var(--seed-scale-color-gray-900)" : "var(--seed-semantic-color-paper-default)",
      color: hover ? "var(--seed-scale-color-gray-00)" : "var(--seed-scale-color-gray-900)",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out"
    }
  }, "Document \uBCF4\uB7EC\uAC00\uAE30", /*#__PURE__*/React.createElement(window.DocsIcon, {
    name: "chevron_right",
    weight: "fill",
    size: 26,
    color: hover ? "var(--seed-scale-color-gray-00)" : "var(--seed-scale-color-gray-900)",
    base: window.DOCS_ICON_BASE
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      marginTop: 60
    }
  }, [{
    n: 1,
    t: "Component",
    d: "컴포넌트의 시각적 정의와 올바른 상호작용을 위한 UX가이드",
    bg: "var(--seed-scale-color-blue-50)",
    chip: "var(--seed-scale-color-blue-100)"
  }, {
    n: 2,
    t: "Primitive",
    d: "컴포넌트의 시각적 정의를 제외한 본질적인 기능과 동작에 대한 정의",
    bg: "var(--seed-scale-color-green-50)",
    chip: "var(--seed-scale-color-green-100)"
  }].map(c => /*#__PURE__*/React.createElement("article", {
    key: c.n,
    onClick: onGo,
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: 435,
      height: 290,
      padding: 40,
      borderRadius: 20,
      background: c.bg,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 42,
      height: 42,
      margin: 0,
      borderRadius: "50%",
      background: c.chip,
      fontSize: 16,
      fontWeight: 600,
      color: "var(--seed-scale-color-gray-800)"
    }
  }, c.n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 34,
      fontWeight: 900
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.4
    }
  }, c.d))))));
}
window.DocsMainPage = DocsMainPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/seed-docs/MainPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BoxButton = __ds_scope.BoxButton;

__ds_ns.BoxToggleButton = __ds_scope.BoxToggleButton;

__ds_ns.CapsuleToggleButton = __ds_scope.CapsuleToggleButton;

__ds_ns.ChipButton = __ds_scope.ChipButton;

__ds_ns.ChipFilter = __ds_scope.ChipFilter;

__ds_ns.ChipToggleButton = __ds_scope.ChipToggleButton;

__ds_ns.ExtendedFloatingActionButton = __ds_scope.ExtendedFloatingActionButton;

__ds_ns.FloatingActionButton = __ds_scope.FloatingActionButton;

__ds_ns.MenuFloatingActionButton = __ds_scope.MenuFloatingActionButton;

__ds_ns.TextButton = __ds_scope.TextButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ActionableCallout = __ds_scope.ActionableCallout;

__ds_ns.ActionableInlineAlert = __ds_scope.ActionableInlineAlert;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.DismissableCallout = __ds_scope.DismissableCallout;

__ds_ns.DismissableInlineAlert = __ds_scope.DismissableInlineAlert;

__ds_ns.HelpBubble = __ds_scope.HelpBubble;

__ds_ns.InlineAlert = __ds_scope.InlineAlert;

__ds_ns.Snackbar = __ds_scope.Snackbar;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.ChipRadioGroup = __ds_scope.ChipRadioGroup;

__ds_ns.MultilineTextField = __ds_scope.MultilineTextField;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.RangeSlider = __ds_scope.RangeSlider;

__ds_ns.SelectBox = __ds_scope.SelectBox;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.ActionSheet = __ds_scope.ActionSheet;

__ds_ns.AlertDialog = __ds_scope.AlertDialog;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

})();
