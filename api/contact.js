export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const { name, email, type, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

    // Here you would typically:
    // 1. Send an email notification using a service like SendGrid, Mailgun, etc.
    // 2. Store in a database
    // 3. Send to a CRM or other service
    
    // For now, we'll just log and return success
    console.log('Form submission received:', {
      name,
      email,
      type: type || 'General Inquiry',
      message,
      timestamp: new Date().toISOString()
    });

    // Return success response
    return res.status(200).json({ 
      success: true,
      message: 'Thank you for your message! We\'ll get back to you soon.'
    });
  }

  // Method not allowed
  return res.status(405).json({ 
    error: 'Method not allowed' 
  });
}
