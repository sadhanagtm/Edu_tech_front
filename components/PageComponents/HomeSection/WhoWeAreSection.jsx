import React from "react";
import Link from "next/link";
function WhoWeAreSection() {
  return (
    <div className="my-24 lg:my-44">
      <div className="lg:px-24">
        <div className="grid md:grid-cols-6 lg:grid-cols-5 gap-10">
          {/* left section video thumbnail  */}
          {/* this h1 tag is visible for mobile device  */}
          <h1 className="md:hidden text-2xl lg:text-4xl font-bold text-gray-800">
            Who We Are ?
          </h1>
          <div className="md:col-span-3 lg:col-span-2 h-80 w-full md:h-full md:w-full bg-gray-200"></div>

          {/* right section who we are content  */}
          <div className="md:col-span-3 lg:col-span-3 py-8 lg:py-24 md:px-10">
            {/* this h1 tag is visible after md breakpoint */}
            <h1 className="hidden md:block text-2xl lg:text-4xl font-bold text-gray-800">
              Who We Are ?
            </h1>
            <p className="mb-8 md:my-12 text-gray-600 lg:text-md text-justify">
              sikka-i is a platform that provides every individual with the
              opportunity of learning the desired skills , earning good income ,
              and owning the dream life. we work to uplift the life of youths by
              providing them multiple learning , earning and owning
              opportunities.
            </p>
            <Link href="./About" passHref>
              <button className="btn-outline-primary rounded-full text-primary w-32 transition hover:opacity-70">
                {" "}
                More info...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAreSection;
