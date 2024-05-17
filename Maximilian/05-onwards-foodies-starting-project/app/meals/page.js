import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          <span className={classes.highlight}>당신만의 </span> 맛있는 음식을 만들어보세요
        </h1>
        <p>가장 좋아하는 음식의 레시피를 고르고, 만들어보세요!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">레시피를 공유하는건 어떠세요?</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
