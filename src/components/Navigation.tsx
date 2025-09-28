import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";

const Navigation = () => {
  const redirect = (e) => {
 window.location.href='/employers'
  };

  const Jobredirect = (e) => {
 window.location.href='/jobseekers'
  };
  return (
    <nav className="w-full bg-background border-b border-border py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">A1</span>
          </div>
          <a href="/" className="text-xl font-semibold text-foreground">
  A1Selectors
</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
  {/* Main Link */}
  <a
    href="#services"
    className="text-muted-foreground hover:text-foreground transition-colors"
  >
    Our Services
  </a>

  {/* Submenu */}
  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
    <ul className="flex flex-col">
      <li>
        <a href="/services/contract-hiring" className="block px-4 py-2 hover:bg-gray-100">
         Contract hiring
        </a>
      </li>
      <li>
        <a href="/services/it-non-it" className="block px-4 py-2 hover:bg-gray-100">
         IT/NON-It Services
        </a>
      </li>
      <li>
        <a href="/services/rpo" className="block px-4 py-2 hover:bg-gray-100">
          RPO
        </a>
      </li>
       <li>
        <a href="/services/staffing" className="block px-4 py-2 hover:bg-gray-100">
          Staffing
        </a>
      </li>
      
    </ul>
  </div>
</div>

          <a href="/companies" className="text-muted-foreground hover:text-foreground transition-colors">For Companies</a>
          <a href="#talent" className="text-muted-foreground hover:text-foreground transition-colors"></a>

                    <div className="relative group">
  {/* Main Link */}
  <a
    href="#talent"
    className="text-muted-foreground hover:text-foreground transition-colors"
  >
    For Talent
  </a>

  {/* Submenu */}
  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
    <ul className="flex flex-col">
      <li>
        <a href="/jobs" className="block px-4 py-2 hover:bg-gray-100">
         Find Jobs
        </a>
      </li>
      {/* <li>
        <a href="/services/it-non-it" className="block px-4 py-2 hover:bg-gray-100">
         Carrer Services
        </a>
      </li> */}
    
      
    </ul>
  </div>
</div>
          <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a>
          <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
          <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" onClick={redirect} className="hidden sm:flex">
            <Search className="w-4 h-4 mr-2" />
            Hire Talent
          </Button>
          <Button variant="default" onClick={Jobredirect} size="sm">
            <Download className="w-4 h-4 mr-2" />
            Get Hired
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;