import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const NOTIFY_EMAIL = "elvismwangi35671@gmail.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { full_name, email, phone, year_of_study, message } = await req.json();

    // Send notification email using Supabase's built-in email
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Store in database
    const { error: dbError } = await supabaseAdmin
      .from("join_requests")
      .insert({ full_name, email, phone, year_of_study, message });

    if (dbError) {
      throw new Error(`Database error: ${dbError.message}`);
    }

    // Send email notification via Resend or similar
    // For now, we'll use a simple approach with the Supabase edge function
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (RESEND_API_KEY) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "CLC KU <onboarding@resend.dev>",
          to: [NOTIFY_EMAIL],
          subject: `New CLC Join Request from ${full_name}`,
          html: `
            <h2>New Join Request</h2>
            <p><strong>Name:</strong> ${full_name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Year of Study:</strong> ${year_of_study || "Not specified"}</p>
            <p><strong>Message:</strong> ${message || "No message"}</p>
          `,
        }),
      });

      if (!emailRes.ok) {
        console.error("Email send failed:", await emailRes.text());
      }
    } else {
      console.log("RESEND_API_KEY not set. Join request saved to database:", {
        full_name, email, phone, year_of_study
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});