import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { SendMessageIcon } from "../icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { verifyEmailAddress } from "@/utility/verifyEmail";

export function ContactDialog() {
  const [loader, setLoader] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to manage dialog open/close

  const senderRef = useRef(null);
  const messageRef = useRef(null);

  const Send = async () => {
    const sender = senderRef?.current?.value;
    const message = messageRef?.current?.value;

    if (!sender || !message) {
      return toast.error("Fill all fields");
    }
    const validate = verifyEmailAddress(sender);
    if (!validate) return toast.error("Email is invalid");

    setLoader(true);
    try {
      const res = await axios.post("/api/send", { sender, message });
      if (res.data.success) {
        toast.success(res.data.message);
        setIsOpen(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    } finally {
      setLoader(false);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      {" "}
      <DialogTrigger className="flex w-full justify-center">
        <button
          className="group flex h-12 w-[12rem] items-center justify-center gap-x-3 rounded-md border border-accent font-semibold text-accent duration-500 hover:border-none  hover:bg-accent/30 hover:text-black  hover:duration-500 dark:hover:bg-accent"
          onClick={() => setIsOpen(true)}
        >
          <span>Send Message</span>
          <span>
            <SendMessageIcon className="text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent
        setisOpen={setIsOpen}
        className="text-black dark:text-white sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle>Send me a quick Message</DialogTitle>
          <DialogDescription>
            Keep it short! I will try to reply within minutes.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right capitalize">
              your email
            </Label>
            <Input ref={senderRef} className="col-span-3" />
          </div>
          <div className="grid w-full grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Message
            </Label>
            <Textarea ref={messageRef} className="col-span-3 resize-none " />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={Send}
            type="submit"
            className="border-slate-400 bg-accent text-white"
          >
            {loader ? (
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
            ) : (
              "Send"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}