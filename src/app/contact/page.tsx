import { Fragment } from "react";

export default function ContactPage() {
  return (
    <Fragment>
    <section className="flex flex-col items-center justify-between py-24 px-16 blue-background">
      <h1 className="text-4xl font-bold text-center text-blue-700 pb-5">
        Contact
      </h1>
      <div className="w-full flex flex-col items-center justify-between py-24 px-16 bg-white rounded-xl">
      <div className="text-xl font-bold text-blue-700 pb-5">
        <div className="text-blue-400">
          Twitter:
        </div>
        <a href="https://twitter.com/J_Rosecrans" target="_blank">
          @J_Rosecrans
        </a>
      </div>
      <div className="text-xl font-bold text-blue-700 pb-5">
        <div className="text-blue-400">
          Email:
        </div>
        <a href="mailto:jrscrns@gmail.com" target="_blank">
          jrscrns@gmail.com
        </a>
      </div>
      <div className="text-xl font-bold text-blue-700 pb-5">
        <div className="text-blue-400">
          Github:
        </div>
        <a href="https://github.com/justin-rosecrans/myPortfolio" target="_blank">
          justin-rosecrans
        </a>
      </div>
      <div className="text-xl font-bold text-blue-700 pb-5">
        <div className="text-blue-400">
        LinkedIn:
        </div>
        <a href="https://www.linkedin.com/in/justin-rosecrans-7b956a5a/" target="_blank">
          justin-rosecrans
        </a>
      </div>
      <div className="text-xl font-bold text-blue-700 pb-5">
        <div className="text-blue-400">
          Facebook:
        </div>
        <a href="https://www.facebook.com/justin.rosecrans.1" target="_blank">
          justin.rosecrans.1
        </a>
      </div>
      <div className="text-xl font-bold text-blue-700 pb-5">
        <div className="text-blue-400">
          Deviant Art:
        </div>
        <a href="https://www.deviantart.com/teal-miestro" target="_blank">
          teal-miestro
        </a>
      </div>
    </div>

    <h2>Leave Feedback Comment Form: (Under Construction)</h2>
    <form name="contact" method="POST" data-netlify="true">
      <div>
        <label>Your Name: <input type="text" name="name" /></label>
      </div>
      <div>
        <label>Your Email: <input type="email" name="email" /></label>
      </div>
      <div>
        <label>Message: <textarea name="message"></textarea></label>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
    </section>
    </Fragment>
  );
}
