import { NextResponse } from "next/server";

type EnquiryPayload = {
  name?: string;
  phone?: string;
  service?: string;
  area?: string;
};

// export async function POST(request: Request) {
//   try {
//     const body = (await request.json()) as EnquiryPayload;

//     if (!body.name?.trim() || !body.phone?.trim() || !body.service?.trim()) {
//       return NextResponse.json(
//         { success: false, message: "Please fill all required fields." },
//         { status: 400 }
//       );
//     }

//     // TODO: Connect this to email, CRM, Google Sheet, database, or WhatsApp automation.
//     console.log("New enquiry:", body);

//     return NextResponse.json({
//       success: true,
//       message: "Thank you. We received your enquiry and will call you shortly.",
//     });
//   } catch {
//     return NextResponse.json(
//       { success: false, message: "Unable to process enquiry." },
//       { status: 500 }
//     );
//   }
// }


export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message = `
*New Service Enquiry*

Name: ${body.name}
Phone: ${body.phone}
Service: ${body.service}
Area: ${body.area}
`;

    const whatsappUrl = `https://wa.me/919833200228?text=${encodeURIComponent(
      message
    )}`;

    return NextResponse.json({
      success: true,
      whatsappUrl,
    });
  } catch {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}