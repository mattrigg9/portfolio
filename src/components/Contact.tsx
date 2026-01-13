"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import Button from "./Button";
import Field from "./Field";

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
    <section className="relative h-full max-h-[55rem] min-h-screen" id="contact">
      <Image
        src="/images/iceberg.jpg"
        alt="Landscape with iceberg"
        fill
        className="object-cover object-top-right -z-10"
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
              <Field
                as="input"
                autoComplete="name"
                label="Name"
                name="name"
                onTextChange={setName}
                required
              />

              <Field
                as="input"
                autoComplete="email"
                label="Email"
                name="email"
                onTextChange={setEmail}
                required
                type="email"
              />

              <div className="sm:col-span-2">
                <Field
                  as="textarea"
                  label="Message"
                  name="message"
                  onTextChange={setMessage}
                  required
                  rows={4}
                />
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Button type="submit" isLoading={isLoading}>
                Send Message
              </Button>

              <p>or</p>

              <a href="/meet/" target="_blank" className="font-semibold leading-6 text-gray-800 hover:text-indigo-950 transition-colors">
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
