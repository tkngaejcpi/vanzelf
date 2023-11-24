import { Base64 } from "js-base64";

export interface Article {
  title: string;
  body: string;
  description: string;

  created_date: string;
  signature: string;
}

const algorithm: EcKeyImportParams & EcdsaParams = {
  name: "ECDSA",
  namedCurve: "P-384",
  hash: "SHA-384",
};

export const isArticleValid = async (
  { title, body, description, created_date, signature }: Article,
  b64VerifyKey: string,
): Promise<boolean> => {
  const verfiyKeyJWK: JsonWebKey = JSON.parse(Base64.decode(b64VerifyKey));
  const verifyKey = await globalThis.crypto.subtle.importKey(
    "jwk",
    verfiyKeyJWK,
    algorithm,
    false,
    ["verify"],
  );

  const rawSignature = Base64.toUint8Array(signature);
  const rawArticle = new TextEncoder().encode(
    JSON.stringify({
      title,
      body,
      description,
      created_date,
    }),
  );

  return globalThis.crypto.subtle.verify(
    algorithm,
    verifyKey,
    rawSignature,
    rawArticle,
  );
};
