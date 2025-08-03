import ChatWindow from "@/components/ChatUI";
import ChatUI from "@/components/ChatUI";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en">
      {children}
      {/* <div className="w-1/2 p-4 h-screen bg-white">
            <ChatWindow/>
        </div> */}
      {/* <ChatWindow messages={[]} onSendMessage={() => {}} /> */}
    </main>
  );
}
