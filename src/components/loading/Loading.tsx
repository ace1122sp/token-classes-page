import style from './Loading.module.css';

const Loading: React.FC = () => (
  <div className={style.loading}>
    <div className={style.spinner} />
  </div>
);

export default Loading;
