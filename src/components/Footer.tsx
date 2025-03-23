
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-16 bg-kahu-bg-blue">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-mono mb-8 text-kahu-blue">
            keep in touch
          </h2>
          
          <div className="space-y-2 text-center font-mono text-2xl">
            <p>kahuco.de</p>
            <p>LinkedIn: kahu.code</p>
            <p>Xaviere Murray-Puhara</p>
            <p>Michael Puhara</p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Logo size="md" />
          </div>
          
          <div className="mt-10 text-sm text-gray-600">
            <p>© 2025 kahu.code. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
