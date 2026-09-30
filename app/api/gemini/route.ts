import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {

  try {

    const body = await request.json();

    const prompt = body.prompt;

    if (!prompt) {
      return NextResponse.json(
        {
          error: "Prompt is required",
        },
        {
          status: 400,
        }
      );
    }

    const apiKey =
      process.env.GEMINI_API_KEY;

    if (!apiKey) {

      return NextResponse.json({
        text:
          "Gemini is not configured yet. Add GEMINI_API_KEY to your Vercel environment variables.",
      });

    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {

      return NextResponse.json(
        {
          error:
            data?.error?.message ||
            "Gemini request failed",
        },
        {
          status: response.status,
        }
      );

    }

    const text =
      data?.candidates?.[0]?.content
        ?.parts?.[0]?.text || "";

    return NextResponse.json({
      text,
    });

  } catch (error) {

    return NextResponse.json(
      {
        error:
          "Something went wrong while contacting Gemini.",
      },
      {
        status: 500,
      }
    );

  }

}
