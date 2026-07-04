import { NextResponse } from "next/server";
import { NewsletterSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validationResult = NewsletterSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validationResult.error.format()
        },
        { status: 400 }
      );
    }

    const { email } = validationResult.data;

    // Simulate saving subscriber to database (Supabase or Email Campaign API)
    console.log("Mock DB Save: New Newsletter Subscriber:", email);

    // Simulate short network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to our newsletter!"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error in newsletter route:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
