function Footer() {
  return (
    <section id="contact">
      <div className="flex justify-center">
        <div className="relative flex flex-col items-center justify-center p-4 pt-20 gap-38 bg-[#141414] rounded-2xl  w-7xl">
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">
              Let's make something great ✨
            </span>
            <span className="text-[#A9A9A9]">
              Have a job opportunity or project in mind? I'd love to hear from
              you! <br />
              Reach out via{" "}
              <a
                className="text-[#637CEC]"
                href="mailto:manojprabhuskp@gmail.com"
              >
                manojprabhuskp@gmail.com
              </a>{" "}
              or{" "}
              <a
                className="text-[#637CEC]"
                target="_blank"
                href="https://www.linkedin.com/in/manojprabhup/"
              >
                LinkedIn
              </a>
            </span>
          </div>
          <div className="flex flex-col items-center md:!flex-row justify-evenly text-[#A9A9A9] w-full">
            <span>© 2025 Manoj Prabhu</span>
            <div className="flex gap-4">
              <a className="text-[#637CEC]" href="/about">
                About
              </a>
              <a className="text-[#637CEC]" href="/manojprabhu_resume.pdf" target="_blank">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
