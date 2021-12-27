import { MoviesGrid } from "../components/MoviesGrid";
import { useDebounce } from "../hooks/UseDebounce";
import { UseQuery } from "../hooks/UseQuery";




export function LandingPage(){
    const query = UseQuery();
    const search = query.get("search");
    const debouncedSearch = useDebounce(search, 600)
    return (
        <div>
            < MoviesGrid key={debouncedSearch} search={debouncedSearch} />)
        </div>
    );
}