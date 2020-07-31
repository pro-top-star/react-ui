const PROP_WHITELIST = /^(aria-|data-|id$|on[A-Z])/;

export const usePassThroughHtmlProps = (props: Record<string, any>, propBlackList: string[] = []) => {
  const componentPropBlacklist = new Set(propBlackList);

  const returnVal: Record<string, unknown> = {};
  for (const name in props) {
    if (PROP_WHITELIST.test(name) && !componentPropBlacklist.has(name)) {
      returnVal[name] = props[name];
    }
  }

  return returnVal;
};
