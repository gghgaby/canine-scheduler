export function NxWelcome({ title }: { title: string }) {
  return (
    <div className="body-wrapper">
      <div className="container md:max-w-md">
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome {title} 👋
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NxWelcome;
