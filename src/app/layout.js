import AppLayout from "@/components/common/AppLayout";
import "./globals.css";
import { Inter, Montserrat, Work_Sans} from "next/font/google";
import ToastContext from "@/context/ToastContext";
import FolderContext from "@/context/FolderContext";
import { BeatLoader, RingLoader } from "react-spinners";
import LoadingContext from "@/context/LoadingContext";

const inter = Inter({ subsets: ["latin"] });
const Montserrat_int = Montserrat({
    subsets: ['latin'],
    weight: '500',
    variable: '--font-montserrat'
})
const Work_Sans_int = Work_Sans({ 
    subsets: ['latin'],
    weight: '700',
    variable: '--font-work_sans',
    lineHeight: '1.5', 
    
})

export const metadata = {
    title: "FileMaster",
    description: "Cloud file manager build on Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${Work_Sans_int.className} relative bg-[#1d232a]`}>
                <LoadingContext>
                    <ToastContext>
                        <FolderContext>
                            <AppLayout>{children}</AppLayout>
                        </FolderContext>
                    </ToastContext>
                </LoadingContext>
            </body>
        </html>
    );
}
