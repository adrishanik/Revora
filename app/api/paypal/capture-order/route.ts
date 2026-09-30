import { NextResponse } from "next/server";

async function getAccessToken() {

  const client =
    process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  const secret =
    process.env.PAYPAL_CLIENT_SECRET;

  const environment =
    process.env.PAYPAL_ENV === "live"
      ? "https://api-m.paypal.com"
      : "https://api-m.sandbox.paypal.com";

  const credentials =
    Buffer.from(
      `${client}:${secret}`
    ).toString("base64");

  const response = await fetch(
    `${environment}/v1/oauth2/token`,
    {
      method: "POST",

      headers: {
        Authorization:
          `Basic ${credentials}`,

        "Content-Type":
          "application/x-www-form-urlencoded",
      },

      body:
        "grant_type=client_credentials",
    }
  );

  const data =
    await response.json();

  return {
    token: data.access_token,
    environment,
  };
}

export async function POST(
  request: Request
) {

  try {

    const { orderID } =
      await request.json();

    if (!orderID) {

      return NextResponse.json(
        {
          error:
            "orderID is required",
        },
        {
          status: 400,
        }
      );

    }

    const {
      token,
      environment,
    } = await getAccessToken();

    const response = await fetch(
      `${environment}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",

        headers: {
          Authorization:
            `Bearer ${token}`,

          "Content-Type":
            "application/json",
        },
      }
    );

    const data =
      await response.json();

    return NextResponse.json(
      data,
      {
        status: response.status,
      }
    );

  } catch {

    return NextResponse.json(
      {
        error:
          "Unable to capture PayPal order.",
      },
      {
        status: 500,
      }
    );

  }

}
