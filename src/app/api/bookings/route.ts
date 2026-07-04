import { NextResponse } from "next/server";
import { BookingSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body against Zod Schema
    const validationResult = BookingSchema.safeParse(body);
    
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

    const { service, stylist, date, time, client } = validationResult.data;

    // Simulate database insertion (e.g., Supabase table insert)
    // In production, you would connect to Supabase:
    // const { data, error } = await supabase.from('bookings').insert([{ ... }])
    
    console.log("Mock DB Save: New Appointment Reserved successfully", {
      service: service.name,
      stylist: stylist.name,
      schedule: `${date} at ${time}`,
      client: client.name
    });

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      {
        success: true,
        message: "Appointment scheduled successfully.",
        bookingId: `hr-${Math.floor(100000 + Math.random() * 900000)}`,
        details: {
          clientName: client.name,
          serviceName: service.name,
          stylistName: stylist.name,
          date,
          time
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error in booking route:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
