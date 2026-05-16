const Footer = () => {
  return (
    <footer className="text-center p-8 bg-dark/80">
      <div className="flex justify-center gap-8 mb-4">
        <a
          href="https://www.linkedin.com/in/danilo-jos%C3%A9-650b64349"
          target="_blank"
          className="hover:text-primary transition-colors text-2xl flex flex-col items-center gap-1"
        >
          <i className="bi bi-linkedin"></i>
          <span className="text-xs uppercase tracking-widest">LinkedIn</span>
        </a>
        <a
          href="https://github.com/DaniloPy-coder"
          target="_blank"
          className="hover:text-primary transition-colors text-2xl flex flex-col items-center gap-1"
        >
          <i className="bi bi-github"></i>
          <span className="text-xs uppercase tracking-widest">GitHub</span>
        </a>
      </div>
      <p className="text-ofcourse/50 text-sm">&copy; Danilo Dev 2026</p>
    </footer>
  );
};

export default Footer;
