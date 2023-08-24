import { fetchOffersAction } from '../../store/api-action';
import { useAppDispatch } from '../../hooks';

export default function ErrorPage(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <section>
      <p className="error__text">Не удалось загрузить предложения</p>
      <button
        className="replay replay--error"
        onClick={() => {
          dispatch(fetchOffersAction());
        }}
        type="button"
      >
        Попробовать ещё раз
      </button>
    </section>
  );
}
