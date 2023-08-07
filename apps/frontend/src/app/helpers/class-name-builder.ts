export const classNameBuilder = (
  ...classNames: (string | undefined | boolean)[]
): string => classNames.filter(Boolean).join(" ").replace(/\s\s+/g, " ").trim()
