import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="mt-32">
      <div className="py-20 border-purple-400 border-t rounded-2xl bg-[rgba(22,26,49,1)]">
        <div className="text-gray-200 flex justify-center mx-auto flex-col max-w-44 cursor-pointer">
          <h1 className="text-3xl text-justify font-medium tracking-[7px]">
            Rimon
          </h1>
          <p className="text-gray-400 tracking-wide uppercase text-xs font-normal">
            create you unique
          </p>
        </div>
        <div className="max-w-[900px] mx-auto">
          <p className="text-base text-gray-400 mt-6 font-medium text-center">
            Let's build something amazing together. I'm available for freelance
            projects, collaborations, and full-time opportunities. Drop me a
            message, and let's discuss how we can turn your ideas into reality.
          </p>
          <div className="text-3xl flex gap-x-6 justify-center my-5">
            <FaFacebook className="text-blue-800" />
            <FaGithub className="text-black" />
            <FaLinkedin className="text-blue-200" />
            <FaTwitter className="text-blue-400" />
          </div>
        </div>
        <footer className="footer footer-center p-4 text-gray-300 ">
          <aside>
            <p>Copyright © 2024 - All right reserved by Amdadul_HQ</p>
          </aside>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
