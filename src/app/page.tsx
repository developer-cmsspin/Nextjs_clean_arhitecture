import FooterData from '@/shared/components/footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        Home Page
      </div>
      <FooterData />
    </main>
  )
}
