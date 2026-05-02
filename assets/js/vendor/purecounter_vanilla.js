// Local fallback for PureCounter (very small noop implementation)
function PureCounter() {
  console.info('PureCounter fallback instantiated');
}
window.PureCounter = window.PureCounter || PureCounter;
