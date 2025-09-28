import ContactSection from "@/components/Sections/ContactSection";

function ContactBlock() {
  return (
    <div className="min-h-screen">
      <ContactSection
        title="Get In Touch With Us"
        description="Ready to start your construction project? We're here to help you every step of the way. Contact us today for a free consultation."
        badge="Contact Us"
        className="py-20 bg-white"
        mapEmbedUrl="https://www.google.com/maps/place/KAMILI+GROUP+LTD/@-6.6630136,39.1845498,1657m/data=!3m1!1e3!4m6!3m5!1s0x185c57a97e2d7589:0x165d1ed201e70226!8m2!3d-6.6595973!4d39.1812155!16s%2Fg%2F11rkb092f5?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
      />
    </div>
  );
}

export default ContactBlock;
