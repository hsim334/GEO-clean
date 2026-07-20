import React from 'react';

export default function DiagnosticForm() {
  return (
    <div className="bg-formWhite border border-borderLight rounded-xl p-8 md:p-10 shadow-sm" id="check">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-textPrimary">
        Check your business
      </h2>
      <p className="text-textSecondary text-sm mb-8">
        Tell us what customers are most likely to hire you for.
      </p>

      {/* Using FormSubmit.co endpoint to process the form */}
      <form action="https://formsubmit.co/hello@getcitedgeo.com" method="POST" className="space-y-5">
        
        {/* Hidden configuration for formsubmit.co */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New AI Recommendation Check Request" />
        <input type="hidden" name="_next" value="https://getcitedgeo.com/thank-you.html" />

        <div>
          <label className="block text-sm font-semibold text-textPrimary mb-2">Business website</label>
          <input 
            type="url" 
            name="Website"
            placeholder="https://yourbusiness.com.au" 
            className="w-full bg-formWhite border border-borderLight rounded-md px-4 py-3 text-textPrimary placeholder:text-textSecondary/60 focus:outline-none focus:ring-2 focus:ring-primaryGreen focus:border-primaryGreen transition-all"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-textPrimary mb-2">Business location</label>
          <input 
            type="text" 
            name="Location"
            placeholder="Melbourne, VIC" 
            className="w-full bg-formWhite border border-borderLight rounded-md px-4 py-3 text-textPrimary placeholder:text-textSecondary/60 focus:outline-none focus:ring-2 focus:ring-primaryGreen focus:border-primaryGreen transition-all"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-textPrimary mb-2">Which service do you most want more customers for?</label>
          <input 
            type="text" 
            name="Service"
            placeholder="Commercial litigation" 
            className="w-full bg-formWhite border border-borderLight rounded-md px-4 py-3 text-textPrimary placeholder:text-textSecondary/60 focus:outline-none focus:ring-2 focus:ring-primaryGreen focus:border-primaryGreen transition-all"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-textPrimary mb-2">First name</label>
            <input 
              type="text" 
              name="First Name"
              placeholder="Harry"
              className="w-full bg-formWhite border border-borderLight rounded-md px-4 py-3 text-textPrimary placeholder:text-textSecondary/60 focus:outline-none focus:ring-2 focus:ring-primaryGreen focus:border-primaryGreen transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-textPrimary mb-2">Mobile number</label>
            <input 
              type="tel" 
              name="Mobile"
              placeholder="04XX XXX XXX"
              className="w-full bg-formWhite border border-borderLight rounded-md px-4 py-3 text-textPrimary placeholder:text-textSecondary/60 focus:outline-none focus:ring-2 focus:ring-primaryGreen focus:border-primaryGreen transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-textPrimary mb-2">Business email</label>
          <input 
            type="email" 
            name="Email"
            placeholder="name@business.com.au"
            className="w-full bg-formWhite border border-borderLight rounded-md px-4 py-3 text-textPrimary placeholder:text-textSecondary/60 focus:outline-none focus:ring-2 focus:ring-primaryGreen focus:border-primaryGreen transition-all"
            required
          />
        </div>
        
        <div className="flex items-start mt-6 mb-6 bg-pageBg p-4 rounded-md border border-dividerLight">
          <input type="checkbox" id="consent" name="Consent Given" value="Yes" className="mt-1 mr-3 w-4 h-4 text-primaryGreen focus:ring-primaryGreen rounded border-borderLight" required />
          <label htmlFor="consent" className="text-xs text-textSecondary leading-relaxed font-medium">
            I agree to GetCitedGEO analysing publicly available business information and contacting me about the result.
          </label>
        </div>

        <button 
          type="submit"
          className="w-full bg-primaryGreen text-formWhite font-semibold py-4 px-6 rounded-md hover:bg-greenHover transition-colors shadow-sm"
        >
          Run my recommendation check
        </button>
        <p className="text-xs text-textSecondary text-center mt-4 leading-relaxed font-medium">
          The initial check begins immediately. Harry may call within approximately ten minutes if the result uncovers something meaningful. No separate booking is required.
        </p>
      </form>
    </div>
  );
}
