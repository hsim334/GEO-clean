export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;
    
    // Validate required fields
    const requiredFields = ['name', 'phone', 'email', 'business_name', 'website', 'target_service'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return res.status(400).json({ error: `Missing required field: ${field}` });
      }
    }

    // Construct the payload for the Fire API
    const payload = {
      full_name: data.name,
      phone: data.phone,
      email: data.email,
      business_name: data.business_name,
      website: data.website,
      priority_service: data.target_service,
      service_wanted_most: data.target_service,
      slack_channel: process.env.SLACK_CHANNEL || 'C0BKDL096GZ'
    };

    const fireUrl = process.env.FIRE_URL;
    const fireToken = process.env.FIRE_TOKEN;

    if (!fireUrl || !fireToken) {
      console.error('Missing Fire API environment variables');
      return res.status(500).json({ error: 'Internal server configuration error.' });
    }

    // Send the request to the Fire API
    const response = await fetch(fireUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${fireToken}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Fire API Error:', response.status, errorText);
      throw new Error(`Fire API responded with status ${response.status}`);
    }

    // Return success to the frontend
    return res.status(200).json({ success: true, message: 'Lead submitted successfully' });

  } catch (error) {
    console.error('Server Error submitting lead:', error);
    // Return a generic error to the frontend so we don't expose sensitive info
    return res.status(500).json({ 
      error: 'An internal error occurred while submitting your request. Please try again later.' 
    });
  }
}
