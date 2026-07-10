export function NxWelcome({ title }: { title: string }) {
  return (
    <div className="body-wrapper">
      <div className="container">
        <div id="welcome">
          <h1 className="text-vet-900">
            <span> Hello there, </span>
            Welcome {title} 👋
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NxWelcome;
