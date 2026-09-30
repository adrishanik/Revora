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

    const body = await request.json();

    const amount =
      String(body.amount || "299.00");

    const {
      token,
      environment,
    } = await getAccessToken();

    const response = await fetch(
      `${environment}/v2/checkout/orders`,
      {
        method: "POST",

        headers: {
          Authorization:
            `Bearer ${token}`,

          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({

          intent: "CAPTURE",

          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: amount,
              },
            },
          ],

        }),
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
          "Unable to create PayPal order.",
      },
      {
        status: 500,
      }
    );

  }

  }
