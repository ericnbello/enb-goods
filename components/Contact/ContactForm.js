import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mbjwznpr");
    
    if (state.succeeded) {
        return (
            <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                    <div className="flex-auto p-5 lg:p-10">
                      <form onSubmit={handleSubmit}>
                          <div className="relative w-full mb-3 mt-8">
                              <label
                                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                  htmlFor="full-name"
                              >
                                  Full Name
                              </label>
                              <input
                                  type="text"
                                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                  placeholder="Full Name"
                                  name="full-name"
                                  required=""
                              />
                              <ValidationError 
                                  prefix="full-name" 
                                  field="full-name"
                                  errors={state.errors}
                              />
                          </div>
  
                          <div className="relative w-full mb-3">
                              <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="email"
                              >
                              Email
                              </label>
                              <input
                              type="email"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Email"
                              name="email"
                              required=""
                              />
                              <ValidationError 
                              prefix="Email" 
                              field="email"
                              errors={state.errors}
                              />
                          </div>
  
                          <div className="relative w-full mb-3">
                              <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="message"
                              >
                              Message
                              </label>
                              <textarea
                              rows="4"
                              cols="80"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                              placeholder="Type a message..."
                              name="message"
                              required=""
                              />
                              <ValidationError 
                              prefix="Message" 
                              field="message"
                              errors={state.errors}
                              />
                          </div>
                          <div className="text-center mt-6">
                              <button
                              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="submit"
                              >
                              Send Message
                              </button>
                              <div id="success">Success! Message sent.</div>
                          </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
    return (
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <form onSubmit={handleSubmit}>
                        <div className="relative w-full mb-3 mt-8">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="full-name"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Full Name"
                                name="full-name"
                                required=""
                            />
                            <ValidationError 
                                prefix="full-name" 
                                field="full-name"
                                errors={state.errors}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="email"
                            >
                            Email
                            </label>
                            <input
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Email"
                            name="email"
                            required=""
                            />
                            <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="message"
                            >
                            Message
                            </label>
                            <textarea
                            rows="4"
                            cols="80"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Type a message..."
                            name="message"
                            required=""
                            />
                            <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                            />
                        </div>
                        <div className="text-center mt-6">
                            <button
                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                            >
                            Send Message
                            </button>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}