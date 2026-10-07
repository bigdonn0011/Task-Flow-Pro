import { useRef } from "react";

interface AvatarProps {
  user: () => void;
  showName: () => string;
}
export const Avatar = ({ user, showName }: AvatarProps) => {
  //const [openAvatar, setopenAvatar] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const filePickerRef = () => {
    fileRef.current && fileRef.current.click();
  };
  return (
    <>
      <section className="items-center w-full cursor-pointer justify-center p-2 flex text-text">
        <section
          className="bg-card p-2 rounded-full shrink-0 hover:scale-110 active:scale-95 active:ring-4 active:ring-card/80 transition-transform duration-500 ease-in-out border"
          onClick={filePickerRef}
        >
          <span className="material-symbols-rounded rounded-full p-8 bg-red-200 block">
            person
          </span>
        </section>

        <div
          onClick={user}
          className="
            leading-tight tracking-tight px-4 py-1 !font-medium !text-2xl !text-left w-full"
        >
          <span>{showName()}</span>
        </div>
        <input type="file" ref={fileRef} className="hidden" />
      </section>
    </>
  );
};
