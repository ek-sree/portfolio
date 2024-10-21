import Link from "next/link";

export default function notFound(){
    return <>
    <div className="mt-10 ml-6">
    <Link className="bg-green-400 py-4 px-4 rounded-xl hover:bg-green-500" href='/'>Go back</Link>
    </div>
    <div className="flex justify-center text-red-500 text-5xl items-center mt-20">Sommon went wrong , id not found....!!😐☠️</div>
    </>
}