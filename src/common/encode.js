import base64 from "base-64";
// const cryptLib = require("simple-encode")
// import cryptLib from "simple-encode";
const value = base64.decode("cWlMVlJaeWFQUjFl");

const key = "abc";
const textToChars = text => text.split("").map(c => c.charCodeAt(0));
const applySaltToChar = code => textToChars(key).reduce((a, b) => a ^ b, code);

export const simpleEncode = text => {
  const byteHex = n => ('0' + Number(n).toString(16)).slice(-2);
  return (
    "a" +
    text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("") +
    "b"
  );
};


export const simpleDecode = encoded => {
  if (
    encoded &&
    encoded.length > 0 &&
    encoded[0] === 'a' &&
    encoded[encoded.length - 1] === 'b'
  ) {
    const text = encoded.substring(1, encoded.length - 1);
    return text
      .match(/.{1,2}/g)
      .map(hex => Number.parseInt(hex, 16))
      .map(applySaltToChar)
      .map(charCode => String.fromCharCode(charCode))
      .join("");
  }
  console.error("unable to decode");
  return "";
};
