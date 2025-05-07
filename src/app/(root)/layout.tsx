import StreamVideoProvider from "@/components/providers/StreamClientProvider"

function layout({ children }: { children: React.ReactNode }) {
    return (
        <StreamVideoProvider>
            {children}
        </StreamVideoProvider>
    )
}

export default layout