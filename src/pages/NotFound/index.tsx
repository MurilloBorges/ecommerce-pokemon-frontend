import React from 'react';

// COMPONENTS
import Image from 'src/components/atoms/Image';

// ASSETS
import notfound1 from 'src/assets/images/notfound1.svg';
import notfound2 from 'src/assets/images/notfound2.svg';
import Title from 'src/components/atoms/Title';
import Href from 'src/components/atoms/Href';

const NotFound: React.FC = () => {
  const [image, setImage] = React.useState<string>();

  React.useEffect(() => {
    const rand = Math.floor(Math.random() * 2 + 1);
    if (rand === 1) {
      setImage(notfound1);
    } else {
      setImage(notfound2);
    }
  }, []);

  return (
    <div className="notfound">
      <div>
        <Title type="h2" text="404" />
        <Image src={image as RequestInfo} />
        <Href to="/" text="Voltar" />
      </div>
    </div>
  );
};

export default NotFound;
