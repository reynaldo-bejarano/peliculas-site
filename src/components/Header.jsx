import { Search } from "./Search";
import styles from "./App.module.css"

export function Header() {
    return (
    <div>
        <h1 className={styles.title}>Reynaldo Bejarano</h1>
    </div>
          
    );
}
export function HeaderInput() {
    return (
        <div>
             <Search/>
        </div>
    );
}

