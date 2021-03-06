const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        The random thoughts of {' '}
        <a
          href="https://github.com/terran324"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Nicholas Ho.
        </a>
      </h4>
    </section>
  )
}

export default Intro
