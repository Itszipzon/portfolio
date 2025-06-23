import "./css/AppContainer.css";

type AppContainerProps = {
  img: string;
  title: string;
  releaseDate?: string;
  version?: string;
  status?: string;
};

export default function AppContainer({ img, title, releaseDate, version, status }: AppContainerProps) {
  return (
    <div className="app-container">
      <img src={img} alt={`${title} logo`} className="app-logo" />
      <h2 className="app-title">{title}</h2>
      {releaseDate && <p className="app-release-date">Release Date: {releaseDate}</p>}
      {version && <p className="app-version">Version: {version}</p>}
      {status && <p className="app-status">Status: {status}</p>}
      <div className="app-actions">
        <button className="app-button">Launch</button>
        <button className="app-button">Details</button>
      </div>
    </div>
  );
}