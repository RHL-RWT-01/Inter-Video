import { LoaderIcon } from 'lucide-react'

function Loader() {
    return (
        <div className='h-[calc(100vh-4rem-1px)] flex items-center justify-center'>
            <LoaderIcon className='h-8 w-8 animate-spin text-muted-foreground' />

        </div>
    );
}

export default Loader