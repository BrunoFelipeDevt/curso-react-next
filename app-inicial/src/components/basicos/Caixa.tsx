export default function Caixa(props: any) {
    return(
        <div className={`
            flex justify-center items-center
            bg-purple-500 rounded-md p-2
            w-[192px] h-48 text-5xl font-light
        `}>
            {props.children}
        </div>
    )
}