export const randomNumber = (
  min: number = 0,
  max: number = 1,
  decimalPlace: number = 0
): number =>
  Number(
    (Math.random() * max + min).toLocaleString("en-US", {
      maximumFractionDigits: decimalPlace,
    })
  );

export const base64ToArrayBuffer = (base64: string): ArrayBuffer => {
  var binaryString = window.atob(base64);
  var bytes = new Uint8Array(binaryString.length);
  for (var i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
};
