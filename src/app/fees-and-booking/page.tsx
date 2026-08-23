import { ShieldAlert, Calendar, ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Fees & Booking | Private Executive Therapy UK",
  description: "Transparent pricing and secure booking for private-pay executive burnout therapy in the UK. Schedule your initial consultation today.",
};

export default function FeesAndBooking() {
  return (
    <div className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24]">
      
      {/* Header Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#E6F2ED] to-[#F8FAF8] text-[#0D2E24] text-center border-b border-[#155D49]/20">
        <div className="container mx-auto max-w-3xl space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#155D49] bg-white border border-[#155D49]/30">
            100% Private Pay & Confidential
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Transparent Investment
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium leading-relaxed max-w-2xl mx-auto">
            Premium, private-pay psychotherapeutic support designed for maximum discretion and clinical efficacy.
          </p>
        </div>
      </section>

      {/* Rate Cards - Perfectly Aligned Line-for-Line */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Assessment Card */}
            <div className="bg-white p-8 rounded-3xl border border-[#155D49]/20 shadow-md card-flow-effect flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#E6F2ED] text-[#155D49] text-xs font-bold rounded-full mb-4 border border-[#155D49]/30">
                  <span>Intake Pathway</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D2E24] mb-2 font-heading min-h-[56px] flex items-center">
                  Executive Intake & Assessment
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-[#0D2E24]">£130</span>
                  <span className="text-[#0D2E24]/70 ml-2 font-semibold text-sm">/ 75 mins</span>
                </div>
                <p className="text-[#0D2E24]/80 text-sm font-medium leading-relaxed mb-6 min-h-[40px]">
                  Comprehensive clinical formulation and nervous system evaluation.
                </p>
                <ul className="space-y-3 mb-8 text-[#0D2E24]">
                  <li className="flex items-start text-sm font-medium">
                    <Check className="w-5 h-5 text-[#155D49] mr-2.5 shrink-0 mt-0.5" />
                    <span>Pre-assessment diagnostic questionnaires</span>
                  </li>
                  <li className="flex items-start text-sm font-medium">
                    <Check className="w-5 h-5 text-[#155D49] mr-2.5 shrink-0 mt-0.5" />
                    <span>In-depth clinical formulation</span>
                  </li>
                  <li className="flex items-start text-sm font-medium">
                    <Check className="w-5 h-5 text-[#155D49] mr-2.5 shrink-0 mt-0.5" />
                    <span>Bespoke treatment roadmap</span>
                  </li>
                </ul>
              </div>

              <Link 
                href="#booking"
                className="w-full text-center py-3.5 px-4 bg-[#E6F2ED] text-[#0D2E24] font-bold text-sm rounded-full border border-[#155D49]/30 hover:bg-[#155D49] hover:text-white transition-colors"
              >
                Schedule Assessment
              </Link>
            </div>
            
            {/* Single Session Card */}
            <div className="bg-white p-8 rounded-3xl border border-[#155D49]/20 shadow-md card-flow-effect flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#E6F2ED] text-[#155D49] text-xs font-bold rounded-full mb-4 border border-[#155D49]/30">
                  <span>Standard Session</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D2E24] mb-2 font-heading min-h-[56px] flex items-center">
                  Individual Executive Session
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-[#0D2E24]">£105</span>
                  <span className="text-[#0D2E24]/70 ml-2 font-semibold text-sm">/ 50 mins</span>
                </div>
                <p className="text-[#0D2E24]/80 text-sm font-medium leading-relaxed mb-6 min-h-[40px]">
                  Targeted therapeutic intervention and ongoing support.
                </p>
                <ul className="space-y-3 mb-8 text-[#0D2E24]">
                  <li className="flex items-start text-sm font-medium">
                    <Check className="w-5 h-5 text-[#155D49] mr-2.5 shrink-0 mt-0.5" />
                    <span>Flexible weekly or fortnightly scheduling</span>
                  </li>
                  <li className="flex items-start text-sm font-medium">
                    <Check className="w-5 h-5 text-[#155D49] mr-2.5 shrink-0 mt-0.5" />
                    <span>Private-pay discretion & complete confidentiality</span>
                  </li>
                  <li className="flex items-start text-sm font-medium">
                    <Check className="w-5 h-5 text-[#155D49] mr-2.5 shrink-0 mt-0.5" />
                    <span>Evidence-based clinical modalities</span>
                  </li>
                </ul>
              </div>

              <Link 
                href="#booking"
                className="w-full text-center py-3.5 px-4 bg-[#E6F2ED] text-[#0D2E24] font-bold text-sm rounded-full border border-[#155D49]/30 hover:bg-[#155D49] hover:text-white transition-colors"
              >
                Book Single Session
              </Link>
            </div>
            
            {/* Package Card */}
            <div className="bg-[#0D2E24] text-white p-8 rounded-3xl border-2 border-[#155D49] shadow-2xl card-flow-effect flex flex-col justify-between h-full relative overflow-hidden">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#155D49] text-white text-xs font-bold rounded-full mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#34D399]" />
                  <span>Most Recommended</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-2 min-h-[56px] flex items-center">
                  Burnout Recovery Package
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-white">£570</span>
                  <span className="text-slate-300 ml-2 text-sm font-semibold">(£95/session)</span>
                </div>
                <p className="text-slate-200 text-sm font-normal leading-relaxed mb-6 min-h-[40px]">
                  A structured, committed pathway to nervous system regulation.
                </p>
                <ul className="space-y-3 mb-8 text-white font-medium">
                  <li className="flex items-start text-sm text-slate-100">
                    <Check className="w-5 h-5 text-[#34D399] mr-2.5 shrink-0 mt-0.5" />
                    <span className="font-semibold text-white">Full 6-session prepaid course</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-100">
                    <Check className="w-5 h-5 text-[#34D399] mr-2.5 shrink-0 mt-0.5" />
                    <span className="font-semibold text-white">Direct messaging between sessions for crisis boundary checks</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-100">
                    <Check className="w-5 h-5 text-[#34D399] mr-2.5 shrink-0 mt-0.5" />
                    <span className="font-semibold text-white">Formal mid-point clinical review</span>
                  </li>
                </ul>
              </div>

              <Link 
                href="#booking"
                className="w-full text-center py-3.5 px-4 bg-[#155D49] hover:bg-[#0A4C3A] text-white font-bold text-sm rounded-full transition-colors shadow-md relative z-10"
              >
                Select Package Pathway
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Insurance Notice */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-[#E6F2ED] border-l-4 border-[#155D49] p-6 md:p-8 rounded-r-2xl flex items-start shadow-sm card-flow-effect">
            <ShieldAlert className="w-8 h-8 text-[#155D49] mr-4 shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-[#0D2E24] mb-2 font-heading">Private-Pay Discretion Guarantee</h4>
              <p className="text-[#0D2E24]/85 text-sm leading-relaxed font-medium">
                MindHaven operates exclusively as a private-pay practice to protect client confidentiality and eliminate insurance-imposed session limits or required diagnostic reporting to employers. Superbill statements can be provided for self-claim policies upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section id="booking" className="py-20 px-4 bg-white border-t border-[#155D49]/15">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl font-extrabold text-[#0D2E24] font-heading">Schedule Your Introduction</h2>
            <p className="text-[#0D2E24]/80 max-w-2xl mx-auto text-sm font-medium">
              Book a complimentary 15-minute consultation to discuss your primary objectives and ensure clinical alignment before committing to a full assessment.
            </p>
          </div>
          
          <div className="bg-[#F8FAF8] rounded-3xl border border-[#155D49]/20 overflow-hidden shadow-xl card-flow-effect flex flex-col md:flex-row">
            
            {/* Form Side */}
            <div className="w-full md:w-2/5 p-8 border-b md:border-b-0 md:border-r border-[#155D49]/15 bg-white">
              <h3 className="text-xl font-bold text-[#0D2E24] mb-6 flex items-center font-heading">
                <Calendar className="w-5 h-5 mr-3 text-[#155D49]" />
                Intake Form
              </h3>
              
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#0D2E24] mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#155D49]/30 bg-[#F8FAF8] text-[#0D2E24] focus:outline-none focus:ring-2 focus:ring-[#155D49]"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#0D2E24] mb-1.5">Corporate / Personal Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#155D49]/30 bg-[#F8FAF8] text-[#0D2E24] focus:outline-none focus:ring-2 focus:ring-[#155D49]"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="objective" className="block text-sm font-bold text-[#0D2E24] mb-1.5">Primary Objective</label>
                  <select 
                    id="objective"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#155D49]/30 bg-[#F8FAF8] text-[#0D2E24] focus:outline-none focus:ring-2 focus:ring-[#155D49]"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="burnout">Burnout Recovery</option>
                    <option value="stress">Executive Stress</option>
                    <option value="anxiety">High-Functioning Anxiety</option>
                    <option value="career">Career Transition</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <button 
                  type="button"
                  className="w-full mt-4 inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-[#0D2E24] hover:bg-[#155D49] rounded-full transition-all shadow-md"
                >
                  Proceed to Calendar <ArrowRight className="ml-2 w-4 h-4 text-[#34D399]" />
                </button>
              </form>
            </div>
            
            {/* Calendar Widget Side */}
            <div className="w-full md:w-3/5 bg-[#E6F2ED]/50 flex items-center justify-center min-h-[400px] p-8 text-center">
              <div className="text-[#0D2E24]/70">
                <Calendar className="w-12 h-12 mx-auto mb-3 text-[#155D49]" />
                <p className="font-bold text-lg text-[#0D2E24] mb-1 font-heading">Secure Calendar Availability</p>
                <p className="text-xs font-medium text-[#0D2E24]/80">Completing the form unlocks available appointment slots.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
