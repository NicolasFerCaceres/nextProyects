import { montserrat_alt } from '@/ui/fonts'

export default function ToDoTitle(){
    return (
        <div className="m-[10px] flex items-center flex-col">
            <h1 className={`${montserrat_alt.className} text-4xl`}>To Do list</h1>
            <div className=' bg-(--box-background) w-[120px]'>
                <p className='text-[10px]'>This is a practice tool</p>
            </div>
        </div>
    )
}