import './Banner.css';

type BannerProps = {
  title?: string;
  alt: string;
  background: string;
};

export function Banner({ background, title, alt }: BannerProps): JSX.Element {
  return (
    <div className="banner">
      <img
        className="banner__background"
        src={background}
        alt={alt}
      />
      {title && <h1 className="banner__title">Chez vous, partout et ailleurs</h1>}
    </div>
  );
}
