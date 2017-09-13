export default string => {
  const hyphenateRE = /([^-])([A-Z])/g;

  return string
    .replace(/"/g, "")
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
}
