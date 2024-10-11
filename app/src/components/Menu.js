import Link from "next/link";

export default function Menu(){
    return(
        <div className="flex flex-row gap-3">
        <Link href="./">Strona główna</Link>
        <Link href="./titleChanger">title Changer</Link>
        <Link href="./counter">Counter</Link>
        <Link href="./dataChanger">Change Data</Link>
        <Link href="./requestData">Request Data</Link>
        </div>
    )
}