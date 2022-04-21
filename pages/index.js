import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import ContactForm from "components/Contact/ContactForm";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  {/* <h1 className="text-white font-semibold text-5xl">
                    Goods for all.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    We offer home, personal care, and apparel products the 
                    entire family will enjoy.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
            </div>

            <div className="flex flex-wrap items-center mt-32 py-12" id="about">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Goods for all.
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  We offer home, personal care, and apparel products the 
                  entire family will enjoy.
                </p>
                {/* <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Change this text.
                </p> */}
                <a href="#marketplaces" className="font-bold text-blueGray-700 mt-8">
                  Check where to find
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  {/* <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <section className="pt-12 pb-48" id="marketplaces">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Where to find us</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  We are working on expanding our online presence to include
                  an online shop right here, however, you can currently find us on the following popular marketplaces.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="rounded-full mx-auto px-4 max-w-120-px">
                      <i className="fab fa-amazon fa-6x"></i>
                  </div>
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Amazon.com</h5>
                    <a href="https://www.amazon.com/s?me=AGXDDD6KG2U7M&marketplaceID=ATVPDKIKX0DER" className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Visit Store
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="rounded-full mx-auto max-w-120-px">
                    <i className="fab fa-ebay fa-6x"></i>
                  </div>
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">eBay</h5>
                    <a href="https://www.ebay.com/usr/enbgoods" className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Visit Store
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="rounded-full mx-auto px-4 max-w-120-px">
                    <i className="fab fa-etsy fa-6x"></i>
                  </div>
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Etsy</h5>
                    <a href="https://www.etsy.com/shop/enbgoods" className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Visit Store
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="rounded-full mx-auto max-w-120-px">
                    <i className="fab fa-threadless fa-6x"></i>
                  </div>
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Threadless</h5>
                    <a href="https://enbgoods.threadless.com/" className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                     Visit Store
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 pt-12 lg:pt-24 lg:pb-64" id="contact">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Get in touch
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 pb-6 text-blueGray-400">
                  Want to reach us with questions, comments, or concerns? Just complete this form and we will get back to you within 1-2 business days.
                </p>
              </div>
            </div>
            
          </div>
        </section>

        <ContactForm />

      </main>
      <Footer />
    </>
  );
}
