import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Documentation',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    description: (
      <>
        Our documentation covers all aspects of ZectorPro/ALAS, from integration protocols to advanced features. Explore the guides, tutorials, and API references to make the most of our platform.
      </>
    ),
  },
  {
    title: 'Advanced Analytics',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2920/2920349.png',
    description: (
      <>
        Leverage our powerful analytics tools to gain insights from your data. Create custom dashboards, generate detailed reports, and make data-driven decisions to optimize your supply chain operations.
      </>
    ),
  },
  {
    title: 'Contact Us',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/9194/9194840.png',
    description: (
      <>
        <p>If you have any questions, feel free to contact us at:</p>
        <a href="mailto:developteam@zectorpro.com">developteams@zectorpro.com</a>
      </>
    ),
  }
];

function Feature({ title, imageUrl, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImage} src={imageUrl} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
