import { JSSTheme } from '../../interfaces/JSSTheme';

export default ({ parameters }: JSSTheme) => ({
  messageToast: {
    padding: '0 !important',
    borderRadius: '0.25rem !important',
    textAlign: 'center !important',
    boxShadow: parameters.sapUiShadowLevel2,
    cursor: 'text',
    minHeight: 'auto !important',
    background: `${parameters.sapUiListBackground} !important`
  },
  messageToastContainer: {
    maxWidth: '15rem !important'
  },
  messageToastBody: {
    fontFamily: parameters.sapUiFontFamily,
    fontSize: parameters.sapMFontMediumSize,
    fontWeight: 'normal',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    whiteSpace: 'pre-line',
    wordWrap: 'break-word',
    padding: '1rem !important',
    color: `${parameters.sapUiListTextColor} !important`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
