import { StaticImage } from "gatsby-plugin-image";
import React, { FormEvent, useState } from "react";
import Button from "./Button";

interface SubmitContactFormRequest {
  name?: string;
  email?: string;
  message: string;
}

interface ContactResponse {
  message: string;
}

const createContactRequest = async (request: SubmitContactFormRequest): Promise<void> => {
  const response = await fetch("https://contact.mattrigg.dev/", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  const json = (await response.json()) as ContactResponse;

  if (!response.ok) {
    throw new Error(json.message);
  }
};

function SuccessMessage({ className }: { className: string }) {
  return (
    <div className={`${className} flex h-full w-full justify-center text-center`}>
      <div className="m-auto">
        <h3 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Thanks!
        </h3>
        <p>I'll be in touch shortly.</p>
      </div>
    </div>
  );
}

function ErrorMessage() {
  return (
    <div className="mb-4 rounded-md bg-yellow-600 px-4 py-2 text-center text-white">
      Sorry, something went wrong. Please try again.
    </div>
  );
}

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);
    createContactRequest({ name, email, message })
      .then(() => setIsSuccess(true))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="relative h-screen max-h-[55rem]" id="contact">
      <StaticImage
        src="../images/iceberg.jpg"
        alt="Landscape with iceberg"
        // Absolute must be important to override gatsby-image-wrapper https://github.com/gatsbyjs/gatsby/issues/34457
        className="object-top-right !absolute -z-10 h-full object-cover"
      />
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-primary">Want to work together?</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let's talk
          </h2>
        </header>
        <div className="relative mx-auto mt-16 max-w-xl overflow-hidden rounded-xl bg-white/30 p-4 backdrop-blur-md backdrop-brightness-[1.05] sm:p-8">
          {isError && <ErrorMessage />}
          <form
            action="#" // TODO: Update API endpoint to redirect to site to support JS-disabled browsers
            className={`transition-transform duration-500 ${
              isSuccess ? "translate-y-[-50rem]" : "translate-y-0"
            }`}
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    autoComplete="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    id="name"
                    name="name"
                    onChange={(event) => setName(event.target.value)}
                    required
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-semibold leading-6 text-gray-900"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    id="email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    type="email"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  className="block text-sm font-semibold leading-6 text-gray-900"
                  htmlFor="message"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    name="message"
                    onChange={(event) => setMessage(event.target.value)}
                    required
                    rows={4}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Button
                type="submit"
                isLoading={isLoading}
                className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Message
              </Button>

              <p>or</p>

              <a href="/meet/" target="_blank" className="font-semibold leading-6 text-gray-900">
                Schedule a meeting <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </form>
          <SuccessMessage
            className={`absolute left-0 top-0 transition-transform duration-500 ${
              isSuccess ? "translate-y-0" : "translate-y-[50rem]"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
