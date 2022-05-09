import Game from '../Game';
import style from './style.module.css';

export default function App() {
  return (
    <main className={style.App}>
      <div className={style.container}>
        <h1 className={style.title}>minesweeper Game</h1>
        <Game />
      </div>
    </main>
  );
}
