// eslint-disable-next-line camelcase
function delete_000_webhost_watermark() {
  const webHost = document.querySelector(
    "a[title='Hosted on free web hosting 000webhost.com. Host your own website for FREE.']"
  );
  if (webHost) {
    webHost.remove();
  }
}

setTimeout(delete_000_webhost_watermark, 0);
