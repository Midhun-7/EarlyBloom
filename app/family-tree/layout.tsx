import ChatWindow from "@/components/ChatUI";
import ChatUI from "@/components/ChatUI";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en" className="flex flex-row h-fit max-w-screen">
        <div className="w-1/2 p-4 bg-gray-100">
            <h1>Family Tree</h1>
            {children}
        </div>
        <div className="w-1/2 p-4 h-screen bg-white">
            <ChatWindow/>
        </div>
      {/* <ChatWindow messages={[]} onSendMessage={() => {}} /> */}
    </main>
  );
}
